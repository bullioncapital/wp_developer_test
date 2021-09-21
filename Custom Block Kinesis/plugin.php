<?php
/**
* Plugin Name: Luigi Custom block Option 1
* Description: Add custom Gutenberg block using ACF
* Version: 1.3
*/


function my_custom_blocl_acf_init() {
  // check function exists
  if( function_exists('acf_register_block_type') ) {
      acf_register_block_type(array(
          'name'          => 'luigi_block_option_1_kinesis',
          'title'         => __('Luigi Custom Block for Kinesis'),
          'description'       => __('A custom Luigi Custom Block for Kinesis block.'),
          'render_template'   => 'template-parts/blocks/luigi_block_option1/luigi_block_option1.php',
          'render_callback'   => 'my_acf_bock_render_callback',
          'category'      => 'formatting',
          'icon'          => 'admin-comments',
          'keywords'      => array( 'luigi_block_option_1_kinesis', 'quote' ),
          'enqueue_style' => get_stylesheet_directory_uri() . '/assets/css/bootstrap.min.css',
      ));
  }
}

add_action('acf/init', 'my_custom_blocl_acf_init');
