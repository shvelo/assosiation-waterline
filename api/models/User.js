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
    email               : { type: 'email', required: true, unique: true },
    //.... some fields

    // Add a reference to Forms collection
    forms:
    {
      collection: 'Form',
      via: 'user',
      through: 'userhasform'
    }
  }

};
