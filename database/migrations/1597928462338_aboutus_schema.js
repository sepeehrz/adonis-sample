'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AboutusSchema extends Schema {
  up() {
    this.create('aboutuses', (table) => {
      table.increments();
      table.string('name');
      table.string('family');
      table.string('job_title');
      table.string('image');
      table.boolean('is_deleted').defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('aboutuses');
  }
}

module.exports = AboutusSchema;
