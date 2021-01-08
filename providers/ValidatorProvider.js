'use strict';
const { ServiceProvider } = require('@adonisjs/fold');
class ValidatorProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    //
  }
  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot() {
    const Validator = use('Validator');
    Validator.extend('mobile', async function (
      data,
      field,
      message,
      args,
      get
    ) {
      const value = get(data, field);
      if (!value) return;
      let mobile = /^[0][9][0-3|9][0-9]{8,8}$/g.exec(value);
      if (!mobile) {
        throw message;
      }
    });
  }
}
module.exports = ValidatorProvider;
