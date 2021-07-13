( function() {

  var __ = wp.i18n.__;
  var el = wp.element.createElement;
  var registerBlockType = wp.blocks.registerBlockType;

  registerBlockType(
    'block/basic-block', {
      title: __( 'Basic Block', '' ),
      icon: 'shield-alt',
      category: 'common',
      edit: function( props ) {
        return el(
          'h2',
          { className: props.className },
          'The basic block will be displayed here'
        );
      },
      save: function( props ) {
        return null
      },
    }
  );

})();
