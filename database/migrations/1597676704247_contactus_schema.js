'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ContactusSchema extends Schema {
  up() {
    this.create('contactuses', (table) => {
      table.increments();
      table.string('name', 50).notNullable();
      table.string('email', 50).notNullable();
      table.text('message', 250).notNullable();
      table.boolean('is_deleted').defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('contactuses');
  }
}

module.exports = ContactusSchema;
