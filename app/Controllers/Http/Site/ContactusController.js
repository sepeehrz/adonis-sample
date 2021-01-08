'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Contactus = use('App/Models/Contactus');
const { validateAll } = use('Validator');

class ContactusController {
  async store({ request, response }) {
    const rules = {
      name: 'required',
      email: 'required|email',
      message: 'required',
    };
    const messages = {
      'name.required': 'فیلد نام الزامی می باشد.',
      'email.required': 'فیلد ایمیل الزامی می باشد.',
      'email.email': 'فرمت ایمیل اشتباه می باشد.',
      'message.required': 'فیلد پیام الزامی می باشد.',
    };
    const validation = await validateAll(request.post(), rules, messages);
    if (validation.fails()) {
      return response.status(400).json(validation.messages());
    }
    let data = request.only(Contactus.allowField);
    return Contactus.create(data);
  }
}

module.exports = ContactusController;
