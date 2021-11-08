/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
//const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
// import { registerBlockType } from '@wordpress/blocks';
 //import { RichText } from '@wordpress/block-editor';
 const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor
import { useBlockProps } from '@wordpress/block-editor';
 import icons from './components/icons';
 
 const { Component } = wp.element;

class FooterBlock extends Component {
	render(props) {		
		return (
			<div className="footerbox">
				<h3>[sitetagline]</h3>
			</div>
		);
	}
}

 registerBlockType( 'my-block/firstblock', {
	 apiVersion: 2,
	 title: 'My Block',
	 icon: 'smiley',
	 category: 'common',

	 attributes: {
		content: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
	 },
	 
	edit( { attributes, setAttributes } ) {
        const blockProps = useBlockProps();
        return (
            <RichText
                { ...blockProps }
                tagName="p" 
                value={ attributes.content } 
                allowedFormats={ [ 'core/bold', 'core/italic' ] } 
                onChange={ ( content ) => setAttributes( { content } ) } 
                placeholder={ __( 'Write Your Content Here' ) } 
            />
        );
    },
	 save: ( props ) => {
		const { attributes } = props;
		const blockProps = useBlockProps.save();

		 return (
			 <div { ...blockProps }>
				 {icons.upload}
				 <h3> TEST OPTION 2 </h3> 
				<h1>[sitetitle]</h1>
				<p>recreate this whole icon box component as UI of your gutenberg block; displaying site's title as a header and sites tagline at the bottom below the 2nd paragraph. the 2nd paragraph should be editable.</p>
				<hr/>
			   <RichText.Content { ...blockProps } tagName="p" value={ attributes.content } />
			 <FooterBlock/>
			 </div>
		 );
	 },
 } );
 