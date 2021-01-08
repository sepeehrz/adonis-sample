'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('BaseModel');

class Aboutus extends Model {
  static get jsonFields() {
    return ['image'];
  }
  static get allowField() {
    return ['name', 'family', 'job_title', 'image'];
  }
}

module.exports = Aboutus;
