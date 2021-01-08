'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Resource = use('Resource');

class AboutusController extends Resource {
  constructor() {
    super();
    this.Model = use('App/Models/Aboutus');
  }
}

module.exports = AboutusController;
