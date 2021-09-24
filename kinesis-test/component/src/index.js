import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';

registerBlockType( 'kinesis-test/post-cat-list', {
    title: 'Post & Category List', // The title of block in editor.
    icon: 'admin-comments', // The icon of block in editor.
    category: 'layout', // The category of block in editor.
    // Custom Attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p',
            default: 'recreate this whole card component as UI of your gutenberg block; with an editable headline and two lists displaying categories and most recent posts, like so:',
        },
        recentCategories: {
            type: 'array',
            default: []
        },
        recentPosts: {
            type: 'array',
            default: []
        }
    },

    edit({ attributes, setAttributes}) {
        const {
            title,
            body,
            recentPosts,
            recentCategories
        } = attributes;

        // Retreiving Posts and Categories for WP REST API
        useEffect ( () => {
            apiFetch( { path: '/wp/v2/posts?per_page=4' } ).then( ( posts ) => {
                setAttributes( { recentPosts: posts } );
            } );

            apiFetch( { path: '/wp/v2/categories?per_page=4' } ).then( ( categories ) => {
                setAttributes( { recentCategories: categories } );
            } );
        }, [] )

        // Change Block Content Functions
        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } );
        }

        function onChangeBody(newBody) {
            setAttributes( { body: newBody } );
        }

        return ([
            <section className="text-blueGray-700 ">
                <RichText key="editable"
                          tagName="h2"
                          placeholder="A small headline to switch your visitors into users."
                          value={ title }
                          onChange={ onChangeTitle }/>
                <RichText key="editable"
                          tagName="p"
                          value={ body }
                          onChange={ onChangeBody }/>
                <ul className="w-1/2">
                    {recentCategories.map(category => (
                        <li key={category.id}><a href={category.link}>{category.name}</a></li>
                    ))}
                </ul>
                <ul className="w-1/2">
                    {recentPosts.map(post => (
                        <li key={post.id}><a href={post.link}>{post.title.rendered}</a></li>
                    ))}
                </ul>
            </section>
        ]);
    },

    save({ attributes }) {
        const {
            title,
            body,
            recentPosts,
            recentCategories
        } = attributes;

        return (
            <section className="text-blueGray-700 ">
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full mb-12 text-left ">
                        <div className="w-full mx-auto lg:w-1/2">
                            <h3 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">Test Option 1</h3>
                            <h2 className="mx-auto mb-6 text-xl font-semibold leading-none tracking-tighter text-black title-font">{ title }</h2>
                            <RichText.Content 
                                tagName="p"
                                value={ body }
                                className={ 'mx-auto mb-8 text-base font-medium leading-relaxed text-blueGray-700' } />
                            <div className="flex flex-wrap justify-start flex-grow mt-8 text-left md:mt-0 ">
                                <div className="space-y-4 w-1/2">
                                    <p className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font"> Categories: </p>
                                    <nav className="mb-10 list-none">
                                        {recentCategories.map(category => (
                                            <li>
                                                <a href={category.link} className="mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase hover:text-black title-font focus:ring-2 ring-offset-current ring-offset-2">{category.name}</a>
                                            </li>
                                        ))}
                                    </nav>
                                </div>
                                <div className=" space-y-4 w-1/2">
                                    <p className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font"> Recent posts: </p>
                                    <nav className="mb-10 list-none">
                                        {recentPosts.map(post => (
                                            <li key={post.id}>
                                                <a href={post.link} className={'mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase hover:text-black title-font focus:ring-2 ring-offset-current ring-offset-2'}>{post.title.rendered}</a>
                                            </li>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
} );

