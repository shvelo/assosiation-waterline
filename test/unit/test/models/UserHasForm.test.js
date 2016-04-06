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

  it('poopulateAll()', function (done) {
    UserHasForm.create({
        to_edit: true,
        to_delete: true,
        user_id: user.id,
        form_id: form.id
      })
      .then(function (createdRecord){
        return User.find().populateAll();
      })
      .then(function (userFound){
        console.log(userFound);
        assert(userFound[0].forms.length);
        done();
      }).catch(done);
  });

	it('retains populated associations after save', function (done) {
    UserHasForm.create({
        to_edit: true,
        to_delete: true,
        user_id: user.id,
        form_id: form.id
      })
      .then(function (createdRecord){
        return User.find().populateAll();
      })
      .then(function (userFound){
        console.log(userFound);
        assert(userFound[0].forms.length, 'user has forms before save');
				return userFound[0].save().then(function(){
	        assert(userFound[0].forms.length, 'user has forms after save');
        	done();
				});
      }).catch(done);
  });

});
