'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('BaseModel');

class Contactus extends Model {
  static get allowField() {
    return ['name', 'email', 'message'];
  }
}

module.exports = Contactus;
