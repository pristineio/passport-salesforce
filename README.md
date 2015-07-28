# passport-oauth2
[![Build Status](https://travis-ci.org/pristineio/passport-salesforce.svg)](https://travis-ci.org/pristineio/passport-salesforce)
[![Quality](https://codeclimate.com/github/pristineio/passport-salesforce/badges/gpa.svg)](https://codeclimate.com/github/pristineio/passport-salesforce)
[![Dependencies](https://david-dm.org/jaredhanson/passport-oauth2.svg)](https://david-dm.org/jaredhanson/passport-oauth2)


Salesforce strategy for [Passport](http://passportjs.org/).

## Install

    $ npm install passport-salesforce

## Usage

#### Configure Strategy

    passport.use(new OAuth2Strategy({
        authorizationURL: 'https://www.example.com/oauth2/authorize',
        tokenURL: 'https://www.example.com/oauth2/token',
        clientID: EXAMPLE_CLIENT_ID,
        clientSecret: EXAMPLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/example/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ exampleId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'salesforce'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/force/authorize',
      passport.authenticate('salesforce', {session: false}));

    app.get('/force/callback',
      passport.authenticate('salesforce', {session: false}),
      function(req, res) {
        res.redirect('/');
      });

## Tests

    $ npm install
    $ npm test

## Credits

  - [Ben Shank](http://github.com/shanksauce)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2015 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
