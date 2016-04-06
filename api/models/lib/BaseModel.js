"use strict";
/**
 * @name BaseModel
 */
module.exports = function BaseModel(name, definition) {
  this.attributes = {};
  Object.assign(this, definition);

  this.attributes.customSave = function (cb) {
    var model = sails.models[name.toLowerCase()],
        update = this.toObject();

    model.associations.forEach(function(assoc){
      if(update[assoc.alias] != null) {
        if(assoc.type === "collection") {
          delete update[assoc.alias];
        } else {
          update[assoc.alias] = update[assoc.alias].id == null ? update[assoc.alias] : update[assoc.alias].id;
        }
      }
    });

    return model.update(this.id, update).then(() => {
      if(cb)
        cb(this);
      return this;
    }, cb);
  };
};
