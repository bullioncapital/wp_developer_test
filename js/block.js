const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;

registerBlockType('block/basic-block', {
  title: __('Basic Block'),
  icon: 'shield',
  category: 'common',
  keywords: [
    __('Basic Block')
  ],
  attributes: {
    second_paragraph: {
      type: 'string',
    }
  },
  edit({ attributes, setAttributes, className, focus, id }) {
    console.log(attributes);

    return (
      <div className={className}>
        <TextControl
          label={__('Enter second paragraph', '')}
          value={attributes.second_paragraph}
          onChange={(new_val) => {
            setAttributes({ second_paragraph: new_val })
          }} />
      </div>
    );
  },
  save({ attributes, className }) {
    return null;
  },
});