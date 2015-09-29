# es6-promisify for Meteor

This package is a Meteor wrapper for the Node package [es6-promisify](https://github.com/digitaldesignlabs/es6-promisify)

It makes a 'Promisify' function available globally on both client and server.

Note that it forces the use of the Meteor 'promise' package. It doesn't allow native Promise to be used.

## Usage
    var createUser = Promisify(Accounts.createUser);
    createUser({
      email: 'someone@somewhere.com',
      password: 'Password1',
      profile: {
        firstName: 'John',
        lastName: 'Smith'
      }
    }).then(function() { alert('Success!'); })
      .catch(function() { alert('Failure.'); });