//Dependencies
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');

//Initializing connection
const app = express();
const PORT = process.env.PORT || 3001;

//Creating sequelize session
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret',
    cookie: { maxAge: 24 * 60 * 60 * 1000, },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

//Serve Static Files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Configure handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Allows us to use our route files
app.use(routes);

//Sync sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});