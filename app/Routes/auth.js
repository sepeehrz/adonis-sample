/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
Route.group(() => {
  Route.post('register', 'AuthController.register');
  Route.post('login', 'AuthController.login');
  Route.get('check', 'AuthController.check');
})
  .prefix('admin/auth')
  .namespace('Admin');
