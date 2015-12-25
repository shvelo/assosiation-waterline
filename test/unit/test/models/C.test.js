/* global sails, Menu, B, A, C, DateTimeService */
var assert = require('chai').assert,
		destroyCollections = require('../../../helper').destroyCollections;

describe('C', function () {
	var idOfC;
	before(function (done) {
		B.create({ id: DateTimeService.generateNowDate() })
				.then(function (newB) {
					A.create({ name: "my new a" }).then(function (newA) {
						C.create({ a_id: newA.id, b_id: newB.id, quantity: 12 }).then(function (newC) {
							idOfC = newC.id;
							done();
						}).catch(done);
					}).catch(done);
				}).catch(done);
	});

	after(function (done) {
		destroyCollections(A, B, C, done);
	});

	it('findOne()', function (done) {
		C.findOne(idOfC).then(function (result) {
			sails.log.info("Result of find one is", result);
			assert.equal(result.quantity, 12, "quantity decremented");
			done();
		}).catch(done);
	});

});
