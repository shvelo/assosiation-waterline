/* global sails, c, a, b, module */


module.exports = {

	attributes: {
		id: { type: 'datetime', primaryKey: true },
		start: { type: 'datetime', defaultsTo: new Date(1970, 0, 1, 12, 0) },
		end: { type: 'datetime', defaultsTo: new Date(1970, 0, 1, 16, 0, 0) },
		isTrue: { type: "boolean", required: true, defaultsTo: true },
		//Relations
		as: { collection: 'a', through: 'c', via: 'b' }
	}
};

