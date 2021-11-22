const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const router = require('./router/index');

//HTTP logger
        app.use(morgan('combined'));

              //Static file
              app.use(express.static(path.join(__dirname, 'public')));

              //Add Midleware
              app.use(
            express.urlencoded({
                extended: true,
            }),
        );
app.use(express.json());
//Template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'recourses/views'));

router(app);

//127.1.1.1 === localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
