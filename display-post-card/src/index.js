import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';


registerBlockType('display-post-card/post-card-block', {
	
	// built-in attributes

	title: 'Post Card Block',
	description: 'Block to display post card',
	icon: 'admin-post',
	category: 'layout',

	// custom attributes

	attributes: {

		title: {
			type: 'string',
			source: 'html',
			selector: 'h2'
		},

		body: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},
		
		recentPosts:{
			type: 'array',
			default: [],
		},

		recentCategories:{
			type: 'array',
			default: [],
		}

	},

	// built-in functions

	edit({ attributes, setAttributes }) {

		const {
			title,
			body,
			recentPosts,
			recentCategories
		} = attributes;




		// Fetching posts and categories

		useEffect (() => {
			
			apiFetch( { path: '/wp/v2/posts' } ).then( ( posts ) => {
				setAttributes ( { recentPosts: posts } );
				console.log(recentPosts);
				
			});
			
			apiFetch( { path: '/wp/v2/categories' } ).then( ( categories ) => {
				setAttributes ( { recentCategories: categories } );
				console.log(recentCategories);
				
			});
		
		}, [] );


		// Custom functions

		function onChangeTitle(newTitle) {
			setAttributes ({ title: newTitle });
		}

		function onChangeBody(newBody) {	
			setAttributes ({ body: newBody });
		}

		return ([
			<div class="post-card-container">

				<RichText key="editable"
						  tagName="h2"
						  placeholder="Display Post Heading"
						  value={ title }
						  onChange={ onChangeTitle }/>
				
				<RichText key="editable"
						  tagName="p"
						  placeholder="Display Post Description"
						  value={ body }
						  onChange={ onChangeBody }/>

				<div class="lists-wrapper flex">
					<ul class="flex-1">
						{recentPosts.map(post => (
							<li key={post.id}><a href={post.link}>{post.title.rendered}</a></li>
						))}
					</ul>

					<ul class="flex-1">
						{recentCategories.map(category => (
							<li key={category.id}><a href={category.link}>{category.name}</a></li>
						))}
					</ul>
				</div>
			
			</div>
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
			<div class="post-card-container">
				
				<h2>{ title }</h2>
				<RichText.Content tagName="p"
								  value={ body }/>

				<div class="lists-wrapper flex">
					<ul class="flex-1">
						{recentPosts.map(post => (
							<li key={post.id}>
								<a href={post.link}>{post.title.rendered}</a>
							</li>
						))}
					</ul>
					
					<ul class="flex-1">
						{recentCategories.map(category => (
							<li key={category.id}>
								<a href={category.link}>{category.name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			
		);

	},

});