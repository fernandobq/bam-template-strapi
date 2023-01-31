'use strict';

/**
 * mobile-fallback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mobile-fallback.mobile-fallback');
