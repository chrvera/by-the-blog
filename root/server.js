const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const { sequelize } = require('./config/connection');
const helpers = require('./utils/helpers');
const routes = require('./controllers');

// Create an instance of the Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Configure session store
const sess = {
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
    sameSite: 'Strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Set up middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Handlebars as the template engine
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in the controllers directory
app.use(routes);

// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});