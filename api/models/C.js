/* global sails, c, module */

var BBPromise = require('bluebird');

module.exports = {

	attributes: {
		quantity: { type: 'integer' },
		//Relations
		a: { model: 'a', foreignKey: true, columnName: 'a_id' },
		workday: { model: 'b', type: 'date', foreignKey: true, columnName: 'b_id' }
	},
	//Instance method
	incrementQ: BBPromise.promisify(function (id, inc, cb) {
		C.findOne(id).then(function (found) {
			if (!found) {
				return cb({ status: 404, message: "didn't found the id" });
			}

			found.quantity += inc;
			console.log('AAAAAAAAAAAAA', found);
			return found.save(cb);
		}).catch(cb);
	})
};

