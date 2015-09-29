# es6-promisify for Meteor

This package is a Meteor wrapper for the Node package [es6-promisify](https://github.com/digitaldesignlabs/es6-promisify)

It makes a 'Promisify' function available globally on both client and server.

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