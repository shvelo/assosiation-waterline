/* global sails, c, module */

module.exports = {

	attributes: {
		quantity: { type: 'integer' },
		//Relations
		a: { model: 'a', foreignKey: true, columnName: 'a_id' },
		workday: { model: 'b', type: 'date', foreignKey: true, columnName: 'b_id' }
	}
};
