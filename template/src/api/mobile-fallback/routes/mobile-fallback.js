'use strict';

/**
 * mobile-fallback router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::mobile-fallback.mobile-fallback');
