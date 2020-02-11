<?php

use App\Facades\Config;
use Theme\Models\Asset;

/**
 *
 */
add_action('wp_enqueue_scripts', function () {

    if (is_admin()) return;

    /**
     * versions
     */
    $themeVersion = '1.0.2';
    $fontAwesomeVer = '5.9.0';

    /**
     * get post for conditional loading
     */
    $post = get_post();

    /**
     * nowpbs
     */
    wp_dequeue_style('wp-block-library');
    wp_dequeue_script('jquery');

    /**
     * icons
     */
    wp_enqueue_style('font-awesome-cdn', "//use.fontawesome.com/releases/v{$fontAwesomeVer}/css/all.css", null, $fontAwesomeVer);
    wp_enqueue_style('material-fonts', "//fonts.googleapis.com/icon?family=Material+Icons", null, null);

    /**
     * fonts
     */
    //

    /**
     * google maps
     */
    if (is_page('contact')) {

        $key = Config::get('services.google.maps.key');
        $callback = 'initMap';
        $query = "key={$key}&callback={$callback}";

        // wp_enqueue_script('google/maps', "//maps.googleapis.com/maps/api/js?{$query}", null, null, false);
    }

    /**
     * recaptcha
     */
    if (is_page('contact')) {

        $key = Config::get('services.reCaptcha.key');

        wp_enqueue_script('reCapcha', "//www.google.com/recaptcha/api.js?render={$key}", null, null, false);
    }

    /**
     * project styles
     */
    wp_enqueue_style('webtheory-css--main', Asset::stylesheet('styles'), null, deversion($themeVersion), null);

    /**
     * project scripts
     */
    wp_enqueue_script('webtheory-js--main', Asset::script('script'), null, deversion($themeVersion), true);
});
