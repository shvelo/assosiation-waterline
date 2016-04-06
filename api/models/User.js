"use strict";

//
// User.js
//
module.exports = {
  schema: true,
  tableName: 'users',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes:
  {
    email: { type: 'email', required: true, unique: true },
    //.... some fields

    // Add a reference to Forms collection
    forms:
    {
      collection: 'Form',
      via: 'user',
      through: 'userhasform'
    },
    address: {
      model: 'address'
    },
    customSave: function() {
      var update = this.toObject();
      User.associations.forEach(function(assoc){
        if(update[assoc.alias] != null) {
          if(assoc.type === "collection") {
            delete update[assoc.alias];
          } else {
            update[assoc.alias] = update[assoc.alias].id == null ? update[assoc.alias] : update[assoc.alias].id;
          }
        }
      });

      return User.update(this.id, update);
    }
  }

};
