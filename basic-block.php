<?php

/**
 * Plugin Name:       Basic Block
 * Plugin URI:        https://example.com
 * Description:       My Gutenberg login block
 **/


function basic_block()
{
  wp_enqueue_script("basic-block-js", plugin_dir_url(__FILE__) . "js/index.js", array("wp-blocks", "wp-editor"),true);
  wp_enqueue_style('basic-block-css', plugin_dir_url( __FILE__ ) . 'css/style.css' );
}

add_action("enqueue_block_editor_assets", "basic_block");


register_block_type(
  'block/basic-block',
  array(
    'render_callback' => 'basic_block_render'
  )
);

function basic_block_render()
{
  $name = get_bloginfo('name');
  $tagline = get_bloginfo('description');
  return '
  <section>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="12" cy="12" r="9"></circle>
    <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
  </svg>
  <h3 class="title">test Option 2</h3>

  <h1 class="subtitle">' . $name . '</h1>
  <div class="descriptions">
    <p class="description">recreate this whole icon box component as UI of your gutenberg block; displaying site\'s title as a header and sites tagline at the bottom below the 2nd paragraph. the 2nd paragraph should be editable.</p>
    <p class="description">lorem ipsum dolor sit amet, id placerat partiendo sea, corpora prodesset incorrupte has id, cu est disputando ullamcorper. Option mentitum referrentur vel ea. Modo suscipit qui et, quo mutat minim reformidans an, ex dicant dissentiunt neglegentur eam. Autem facer pri ut, in duo ullum</p>
  </div>
  <h2 class="subtitle">' . $tagline . '</h2>
</section>
  ';
}
