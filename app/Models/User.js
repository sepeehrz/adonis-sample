'use strict';
const Token = use('Token');
const Model = use('BaseModel');

class User extends Model {
  static boot() {
    super.boot();
    this.addHook('beforeSave', 'UserHook.beforeSave');
  }
  static get hidden() {
    return ['password'];
  }
  static async register(mobile, username) {
    let user = await this.query().where({ username: mobile }).first();
    if (!user && username) {
      user = await this.query().where({ username }).first();
      if (user) {
        user.username = mobile;
        user.moblie = mobile;
        await user.save();
      }
    }
    if (!user) {
      user = await User.create({ username: mobile, mobile, password: mobile });
    }
  }
  tokens() {
    return this.hasMany('App/Models/Token');
  }
  roles() {
    return this.belongsToMany('App/Models/Role').pivotTable('user_roles');
  }
}

module.exports = User;
