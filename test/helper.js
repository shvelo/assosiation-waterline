var async = require('async'),
				_ = require('lodash');


var createFunction = function createFunction(i, model) {
	return i > 0 ?
					function (data, cb) {
						model.destroy().exec(cb);
					} :
					function (cb) {
						model.destroy().exec(cb);
					};
};

/**
 * @type {{destroyCollections: Function}}
 */
module.exports = {
	destroyCollections: function () {
		var args = arguments, l = arguments.length - 1, cb = arguments[l],
						arrayToDestroy = [];
		_.each(_.slice(arguments, 0, l), function (model, i) {
			arrayToDestroy[i] = createFunction(i, model);
		});
		async.waterfall(arrayToDestroy, function (err, data) {
			cb(err, data);
		});
	}
};


