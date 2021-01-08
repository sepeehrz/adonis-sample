/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('BaseRoute');

Route.group(() => {
  Route.customResource('', 'ContactusController');
})
  .prefix('admin/contactuses')
  .namespace('Admin')
  .middleware('auth');
