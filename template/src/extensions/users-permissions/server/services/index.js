'use strict';

const jwt = require('@strapi/plugin-users-permissions/server/services/jwt');
const providers = require('@strapi/plugin-users-permissions/server/services/providers');
const user = require('@strapi/plugin-users-permissions/server/services/user');
const role = require('@strapi/plugin-users-permissions/server/services/role');
const usersPermissions = require('@strapi/plugin-users-permissions/server/services/users-permissions');
const providersRegistry = require('./providers-registry');
const permission = require('@strapi/plugin-users-permissions/server/services/permission');

module.exports = {
  jwt,
  providers,
  'providers-registry': providersRegistry,
  role,
  user,
  'users-permissions': usersPermissions,
  permission,
};
