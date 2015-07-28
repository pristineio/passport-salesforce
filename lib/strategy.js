'use strict';
var OAuth2Strategy = require('passport-oauth2');
var util = require('util');

function SalesforceStrategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL ||
    'https://login.salesforce.com/services/oauth2/authorize';
  options.tokenURL = options.tokenURL ||
    'https://login.salesforce.com/services/oauth2/token';
  options.scopeSeparator = options.scopeSeparator || ',';
  OAuth2Strategy.call(this, options, verify);
  this.name = 'salesforce';
  this._clientSecret = options.clientSecret;
  this._profileURL = options.profileURL ||
    'https://login.salesforce.com/services/oauth2/userinfo';
}

util.inherits(SalesforceStrategy, OAuth2Strategy);

SalesforceStrategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this._profileURL, accessToken, function(err, body) {
    if(err) {
      return done(err);
    }
    try {
      return done(null, JSON.parse(body));
    } catch(ex) {
      return done(new Error('Failed to parse user profile'));
    }
  });
};

module.exports = SalesforceStrategy;
