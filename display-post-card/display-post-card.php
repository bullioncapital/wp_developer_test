<?php
/**
 * Display Post Card
 *
 * @package       DISPLAYPOS
 * @author        Farhan Ahmed
 * @version       1.0.0
 *
 * @wordpress-plugin
 * Plugin Name:   Display Post Card
 * Plugin URI:    https://mydomain.com
 * Description:   This is some demo short description...
 * Version:       1.0.0
 * Author:        Farhan Ahmed
 * Author URI:    https://farhanahmed.uk
 * Text Domain:   display-post-card
 * Domain Path:   /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;



function post_card_block_block_init() {

    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'post-card-block-block-editor',
        plugins_url( '/build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-editor' ),
        $asset_file['version']
    );

    wp_register_style(
        'post-card-block-block-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );

    wp_register_style(
        'post-card-block-block',
        plugins_url( 'style.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

    register_block_type( 'display-post-card/post-card-block', array(
        'editor_script' => 'post-card-block-block-editor',
        'editor_style'  => 'post-card-block-block-editor',
        'style'         => 'post-card-block-block',
    ) );
}

add_action( 'init', 'post_card_block_block_init' );
