'use strict';

/**
 * unauthorized-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::unauthorized-page.unauthorized-page');
