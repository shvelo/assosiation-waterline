/* global sails, c, module */

module.exports = {

	attributes: {
		quantity: { type: 'integer' },
		//Relations
		a: { model: 'a', foreignKey: true, columnName: 'a_id' },
		b: { model: 'b', type: 'datetime', foreignKey: true, columnName: 'b_id' }
	}
};
