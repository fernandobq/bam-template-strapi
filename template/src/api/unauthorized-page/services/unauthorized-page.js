'use strict';

/**
 * unauthorized-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unauthorized-page.unauthorized-page');
