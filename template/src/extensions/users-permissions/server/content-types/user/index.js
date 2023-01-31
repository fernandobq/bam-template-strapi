'use strict';

const schemaConfig = require('@strapi/plugin-users-permissions/server/content-types/user/schema-config');

module.exports = {
  collectionName: 'up_users',
  info: {
    name: 'user',
    description: '',
    singularName: 'user',
    pluralName: 'users',
    displayName: 'User',
  },
  options: {
    draftAndPublish: false,
    timestamps: true,
  },
  attributes: {
    username: {
      type: 'string',
      minLength: 3,
      unique: true,
      configurable: false,
      required: true,
    },
    email: {
      type: 'email',
      minLength: 6,
      configurable: false,
      required: true,
    },
    provider: {
      type: 'string',
      configurable: false,
      default: 'local',
    },
    password: {
      type: 'password',
      minLength: 6,
      configurable: false,
      private: true,
    },
    resetPasswordToken: {
      type: 'string',
      configurable: false,
      private: true,
    },
    confirmationToken: {
      type: 'string',
      configurable: false,
      private: true,
    },
    confirmed: {
      type: 'boolean',
      default: false,
      configurable: false,
    },
    blocked: {
      type: 'boolean',
      default: false,
      configurable: false,
    },
    role: {
      type: 'relation',
      relation: 'manyToOne',
      target: 'plugin::users-permissions.role',
      inversedBy: 'users',
      configurable: false,
    },
    frontPermission: {
      type: 'relation',
      relation: 'oneToOne',
      target: 'api::front-permission.front-permission'
    }
  },

  config: schemaConfig, // TODO: to move to content-manager options
};
