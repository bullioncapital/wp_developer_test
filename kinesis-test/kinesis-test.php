<?php
/**
 * Plugin Name: kinesis Test Plugin
 * Author: Matthew Gibson
 * Version: 1.0.0
 */

function kinesis_test_register_blocks () {

    wp_register_script (
        'post-cat-list',
        plugins_url ( 'component/build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-editor' ),
        true
    );

    wp_register_style (
        'post-cat-list',
        plugins_url ( 'component/css/kinesis-test.css', __FILE__ ),
        [],
        false
    );

    register_block_type ( 'kinesis-test/post-cat-list', [
        'style' => 'post-cat-list',
        'editor_script' => 'post-cat-list',
    ]);

}
   
add_action( 'init', 'kinesis_test_register_blocks' );