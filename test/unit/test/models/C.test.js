/* global sails, Menu, B, A, C, DateTimeService */
var assert = require('chai').assert,
		destroyCollections = require('../../../helper').destroyCollections;

describe('C', function () {
	var idOfC;
	before(function (done) {
		B.create({ id: DateTimeService.generateNowDate() })
				.then(function (newB) {
					A.create({ name: "my new a" }).then(function (newA) {
						c.create({ a_id: newA.id, b_id: newB.id, quantity: 12 }).then(function (newC) {
							idOfC = newC.id;
							done();
						}).catch(done);
					}).catch(done);
				}).catch(done);
	});

	after(function (done) {
		destroyCollections(A, B, C, done);
	});

	it('incrementQ()', function (done) {
		console.log('THE MODEL', c);
		console.log('THE MODEL method', c.incrementQ);
		c.incrementQ(idOfC, -2).then(function (result) {
			assert.equal(result.quantity, 10, "quantity decremented");
			done();
		}).catch(done);
	});


});
