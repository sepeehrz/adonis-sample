'use strict';
const Aboutus = use('App/Models/Aboutus');

class AboutusController {
  async show() {
    let items = await Aboutus.query().where({ is_deleted: 0 }).fetch();
    items = items.rows;
    return items;
  }
}

module.exports = AboutusController;
