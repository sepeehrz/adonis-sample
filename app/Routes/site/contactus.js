/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.post('', 'ContactusController.store');
})
  .prefix('contactus')
  .namespace('Site');
