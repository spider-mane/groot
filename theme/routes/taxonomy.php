<?php

use Timber\Timber;

/**
 * Get context
 */
$global = Timber::context();

/**
 * Do things maybe
 */

/**
 * Build context
 */
$context = [];

/**
 * Render template
 */
Timber::render('taxonomy.twig', $context + $global);
