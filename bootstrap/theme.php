<?php

use WebTheory\Voltaire\Helpers\TemplateRouter;
use WebTheory\Voltaire\Helpers\ThemeImageSize;
use WebTheory\Voltaire\Helpers\TimberContext;
use WebTheory\Voltaire\Helpers\TimberTwigConfig;

################################################################################

# add supports
add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');
add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);
add_theme_support('custom-header');

# image sizes
ThemeImageSize::create(theme_config('images.sizes'));

# configure Twig/ Timber
TimberTwigConfig::set(theme_config('twig'));
TimberContext::load(theme()->path('context.php'));

# redirect template search
TemplateRouter::set(theme()->routesPath());
