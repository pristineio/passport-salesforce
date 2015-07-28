# passport-salesforce
[![Quality](https://codeclimate.com/github/pristineio/passport-salesforce/badges/gpa.svg)](https://codeclimate.com/github/pristineio/passport-salesforce)
[![Dependencies](https://david-dm.org/jaredhanson/passport-oauth2.svg)](https://david-dm.org/jaredhanson/passport-oauth2)


Salesforce authentication strategy for [Passport](http://passportjs.org/).

## Install

    $ npm install passport-salesforce

## Usage

#### Configure Strategy

    passport.use(new SalesforceStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "http://localhost:1234/salesforce/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        done(null, {});
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

## Credits

  - [Ben Shank](http://github.com/shanksauce)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2015 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
