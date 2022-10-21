const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const authRoutes = Router();

authRoutes.get(
  '/github',
  passport.authenticate('github', { scope: ['read:user', 'user:email'] }),
  function (req, res) {}
);

authRoutes.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/auth/github/fail',
    session: false,
  }),
  function (req, res) {
    const body = {
      reqQueryCode: req.query.code,
    };

    const token = jwt.sign({ auth: body }, process.env.JWT_SECRET, {
      expiresIn: '45m',
    });
    res.redirect(
      'open2work://' +
        token +
        ';' +
        req.user.displayName +
        ';' +
        req.user.photos[0].value
    );
  }
);

authRoutes.get('/github/fail', (req, res) => {
  res.redirect('open2work://fail');
});

module.exports = authRoutes;
