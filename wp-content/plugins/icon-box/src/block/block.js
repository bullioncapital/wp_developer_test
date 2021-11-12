/**
 * BLOCK: icon-box
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

import {
    InnerBlocks
} from "@wordpress/block-editor";

const ALLOWED_BLOCKS = ['core/site-title','site-tagline']
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
export default registerBlockType( 'cgb/block-icon-box', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Icon Box Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    description: 'A basic UI Component',
	keywords: [
		__( 'icon-box — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
    ],
    attributes: {
        message: {
            type: 'array',
            source: 'children',
            selector: '.message-body',
        },
        name: {
            type: 'array',
            source: 'bloginfo',
            selector: 'h1'
        }
    },

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: props => {
        const { attributes: { message }, className, setAttributes } = props;
        const onChangeMessage = message => { setAttributes( { message } ) };
        return (
            <div className={ className }>

                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                    width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                </svg>

                <h3>TEST OPTION 2</h3>
                
                <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />

                <p>
                    recreate this whole icon box component as UI of your gutenberg block; displaying site's title as a header and sites tagline at the bottom below the 2nd paragraph. the 2nd paragraph should be editable.
                </p>

                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={ __( 'Add your custom message', 'cgb' ) }
                      onChange={ onChangeMessage }
                      value={ message }
                  />              

            </div>
        );
    },

	/**
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */

	save: ( props ) => {
        const { attributes: { message } } = props;
        return (
            <div class="container">
            
                <div class="row justify-content-center">

                    <div class="col-lg-5">
                        <div class="inner first-col">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                        </svg>

                        <h3>TEST OPTION 2</h3>
                        
                        <InnerBlocks.Content />

                        <p>
                            recreate this whole icon box component as UI of your gutenberg block; displaying site's title as a header and sites tagline at the bottom below the 2nd paragraph. the 2nd paragraph should be editable.
                        </p>
                        </div>
                    </div>

                    <div class="col-lg-5">
                       <div class="inner">
                        <div class="message-body">
                                { message }
                            </div>
                       </div>
                    </div>

                </div>
                
                
                
            </div>
        );
	},
} );
