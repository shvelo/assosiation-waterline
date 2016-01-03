//Form.js

module.exports = {
  schema: true,
  tableName: 'forms',

  attributes:
  {
    name    : { type: 'string', required: true, unique: true },
    creator : { type: 'string', unique: false },
    sequence: { type: 'integer', autoIncrement: true },

    // Add a reference to the owners Users
    owners: {
      collection: 'User',
      via: 'form',
      through: 'userhasform'
    }
  }

};
