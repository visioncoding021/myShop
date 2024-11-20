'use strict';

/**
 * doctalk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doctalk.doctalk');
