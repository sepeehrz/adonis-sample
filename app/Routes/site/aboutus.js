/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('BaseRoute');

Route.group(() => {
  Route.get('', 'AboutusController.show');
})
  .prefix('aboutus')
  .namespace('Site');
