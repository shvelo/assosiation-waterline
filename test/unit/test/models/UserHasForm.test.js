/* global sails, Menu, B, A, C, DateTimeService */
var assert = require('chai').assert,
		destroyCollections = require('../../../helper').destroyCollections;

describe('UserHasForm', function () {
	var user, form;
	before(function (done) {
    User.create({
      email: 'foo@bar.com',
    }).then(function(userCreated){
      user = userCreated;
      return Form.create({
        name: 'a',
        creator: userCreated.id
      });
    }).then(function(formCreated){
      form = formCreated;
      done();
    }).catch(done);
	});

	after(function (done) {
		destroyCollections(User, Form, UserHasForm, done);
	});

	it('UserHasForm.create()', function (done) {
    UserHasForm.create({
        to_edit: true,
        to_delete: true,
        user_id: user.id,
        form_id: form.id
      })
      .then(function (createdRecord){
        assert(_.isObject(createdRecord));
        done();
      }).catch(done);
  });

});
