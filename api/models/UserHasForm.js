/**
 * @name UserHasForm
 */
module.exports = {
  attributes: {
    to_edit: {
      type: 'boolean'
    },
    to_delete: {
      type: 'boolean'
    },
    user: {
      model: 'User',
      foreignKey: true,
      columnName: 'user_id'
    },
    form: {
      model: 'Form',
      foreignKey: true,
      columnName: 'form_id'
    }
  }
};
