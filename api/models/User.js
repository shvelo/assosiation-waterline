"use strict";

var BaseModel = require('./lib/BaseModel');

/**
 * @name User
 */
module.exports = new BaseModel("User", {
  attributes: {
    email: {type: 'email', required: true, unique: true},

    // Add a reference to Forms collection
    forms: {
      collection: 'Form',
      via: 'user',
      through: 'userhasform'
    },
    address: {
      model: 'address'
    }
  }
});
