/* global sails, c, a, module */

module.exports = {
	attributes: {
		name: { type: 'string', required: true, size: 255 },
		description: { type: 'string', size: 1000 },
		//Relations
		bs: { collection: 'B', via: 'a', through: 'c' }
	}
};

