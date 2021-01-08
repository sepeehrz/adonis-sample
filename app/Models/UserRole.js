'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class UserRole extends Model {
  roles() {
    return this.belongsTo('App/Models/Role');
  }
}

module.exports = UserRole;
