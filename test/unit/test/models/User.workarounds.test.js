/* global sails, Address, User, Form, UserHasForm */
var assert = require('chai').assert,
  destroyCollections = require('../../../helper').destroyCollections;

describe('User', function() {
  var user, form, address;

  before('creating address', function(done) {
    Address.create({
      street: "Main street",
      description: "Desc"
    }).then(function(created) {
      address = created;
      done();
    }).catch(done);
  });
  before('creating user', function(done) {
    User.create({
      email: 'foo@bar.com',
      address: address.id
    }).then(function(userCreated) {
      user = userCreated;
      done();
    }).catch(done);
  });
  before('creating form', function(done) {
    Form.create({
      name: 'a',
      creator: user.id
    }).then(function(created) {
      form = created;
      done();
    }).catch(done);
  });
  before('creating UserHasForm', function(done) {
    UserHasForm.create({
      to_edit: true,
      to_delete: true,
      user_id: user.id,
      form_id: form.id
    }, done);
  });

  after(function(done) {
    destroyCollections(User, Form, UserHasForm, Address, done);
  });

  it('retains populated associations after customSave', function(done) {
    return User.findOne(user.id).populateAll().then(function(userFound) {
      console.log("BEFORE", userFound);
      assert(userFound.forms instanceof Array, 'user forms is array before save');
      assert(userFound.forms.length, 'user has forms before save');
      assert(userFound.address instanceof Object, 'user address is populated before save');
      assert(userFound.address.id, address.id, 'user address is populated before save');

        return userFound.customSave().then(function() {
        console.log("AFTER", userFound);
        assert(userFound.forms instanceof Array, 'user forms is array after save');
        assert(userFound.forms.length, 'user has forms after save');
        assert(userFound.address instanceof Object, 'user address is populated after save');
        assert(userFound.address.id, address.id, 'user address is populated after save');
        done();
      });
    }).catch(done);
  });
});
