<?php

require dirname(__DIR__) . '/vendor/autoload.php';
require dirname(__DIR__) . '/bootstrap/app.php';

add_action('after_setup_theme', function () {
    require dirname(__DIR__) . '/bootstrap/theme.php';
});

# load theme scripts
add_action('init', function () {
    require theme()->appPath('scripts/init.php');
});

array_map(function ($file) {
    require dirname(__DIR__) . "/app/scripts/{$file}.php";
}, theme_config('app.scripts'));
