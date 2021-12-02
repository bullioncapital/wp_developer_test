/**
 * BLOCK: test-gutenberg-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { RichText } from '@wordpress/block-editor';

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
registerBlockType( 'cgb/block-test-gutenberg-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'test-gutenberg-block - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'test-gutenberg-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		content: {
            type: 'array',
            source: 'html',
            selector: 'p',
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
	edit: ( { attributes, setAttributes, className, isSelected } ) => {
		

		function onChangeContentName ( content ) {
			setAttributes({content: content})
		}

		let content = attributes.content // To bind attribute link_text

		// Creates a <p class='wp-block-cgb-block-test-gutenberg-block'></p>.
		return (
	
			
<section class="text-blueGray-700 ">
<div class="container items-center px-5 py-8 mx-auto">
	<div class="flex flex-wrap justify-center mb-12 divide-y-2 lg:divide-y-0 lg:divide-x-2">
		<div class="w-full lg:w-1/3">
			<div class="p-4 rounded-t-xl lg:rounded-l-xl lg:p-8 bg-blueGray-50">
				<div
					class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
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
				</div>
				<h3 class="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">test Option 2
				</h3>

				<h1
					class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
					Test Site</h1>
				<p class="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
	  recreate this whole icon box component as UI of your gutenberg block; displaying site's title as a header and sites tagline at the bottom below the 2nd paragraph. 
	  the 2nd paragraph should be editable.</p>
			</div>
		</div>
		<div class="w-full lg:w-1/3">
			<div class="h-full p-4 space-y-4 lg:rounded-r-xl rounded-b-xl lg:p-8 bg-blueGray-50">
				
					<RichText
						tagName="p"
                        className={className} // Automatic class: gutenberg-blocks-sample-block-editable
                        onChange={onChangeContentName} // onChange event callback
                        value={content} // Binding
                        placeholder="Lorem impsum write your content..."
                    />
				
				<h2 class="text-xs font-semibold tracking-widest text-black uppercase title-font"> Just another WordPress site
				</h2>
			</div>
			<div>
			</div>
		</div>
	</div>
</div>
</section>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( { attributes } ) => {
		
		return (

			<section class="text-blueGray-700 ">
	<div class="container items-center px-5 py-8 mx-auto">
		<div class="flex flex-wrap justify-center mb-12 divide-y-2 lg:divide-y-0 lg:divide-x-2">
			<div class="w-full lg:w-1/3">
				<div class="p-4 rounded-t-xl lg:rounded-l-xl lg:p-8 bg-blueGray-50">
					<div
						class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
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
					</div>
					<h3 class="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">test Option 2
					</h3>

					<h1
						class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
						Test Site</h1>
					<p class="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
          recreate this whole icon box component as UI of your gutenberg block; displaying site's title as a header and sites tagline at the bottom below the 2nd paragraph. 
          the 2nd paragraph should be editable.</p>
				</div>
			</div>
			<div class="w-full lg:w-1/3">
				<div class="h-full p-4 space-y-4 lg:rounded-r-xl rounded-b-xl lg:p-8 bg-blueGray-50">
					
						<RichText.Content tagName="p" value={ attributes.content } />
					
					<h2 class="text-xs font-semibold tracking-widest text-black uppercase title-font"> Just another WordPress site
					</h2>
				</div>
				<div>
				</div>
			</div>
		</div>
	</div>
</section>

			
		);
	},
} );
