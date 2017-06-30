const Authentication = require('./controllers/authentication');
const Story = require('./controllers/story');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.get('/auth', requireAuth, function(req, res) {
  	res.send({ message: "blah blah blah..." })
  })
}