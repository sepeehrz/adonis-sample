/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('BaseRoute');

Route.group(() => {
  Route.customResource('', 'AboutusController');
})
  .prefix('admin/aboutus')
  .namespace('Admin')
  .middleware('auth');
