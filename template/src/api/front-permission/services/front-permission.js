'use strict';

/**
 * front-permission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::front-permission.front-permission');
