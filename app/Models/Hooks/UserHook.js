"use strict";
const Hash = use("Hash");
const UserHook = (exports = module.exports = {});
UserHook.beforeSave = async (modelInstance) => {
  if (modelInstance.dirty.password) {
    modelInstance.password = await Hash.make(modelInstance.password);
  }
};
