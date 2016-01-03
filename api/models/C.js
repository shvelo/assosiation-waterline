/* global sails, C, module */

module.exports = {
	attributes: {
		quantity: { type: 'integer' },
		//Relations
		a: { model: 'A', foreignKey: true, columnName: 'a_id' },
		b: { model: 'B', type: 'datetime', foreignKey: true, columnName: 'b_id' }
	}
};
