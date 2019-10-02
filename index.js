const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const MongoDBStore = require('connect-mongodb-session')(session);
const routes = require('./routes/index');
const user = require('./routes/user');
require('dotenv').config();

const app = express();
const store = new MongoDBStore({
  uri: process.env.mongoURI,
  collection: 'mySessions'
});

store.on('error', function (error) {
  assert.ifError(error);
  assert.ok(false);
});


app.use(session({
  store: store,
  secret: 'SEKR37',
  cookie: {
    maxAge: 1000 * 60 * 60 // 1 hour
  },
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// require('./routes/user')(app);
// require('./routes/index')(app);
app.use('/', routes);
app.use('/user', user);
if (['production', 'ci'].includes(process.env.NODE_ENV)) {

}

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});