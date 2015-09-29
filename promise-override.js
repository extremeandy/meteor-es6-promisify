// Meteor normally expects to use it's own bundled 'promise' package. However,
// the node package 'es6-promisify' imports the node package 'es6-promise',
// and this isn't quite the same. This next line ensures that by the time
// 'es6-promisify' tries to import it's own package, we have already
// set it to use the Meteor one, which is "fully fledged" and so it won't
// overwrite it with 'es6-promise'.
this.Promise = Promise;