const searchRouter = require('./search');
const siteRouter = require('./site');
const coursesRouter = require('./course');
const meRouter = require('./me');
const demoModule = require('./demoModule')

function router(app) {
    // app.get('/', (req, res) => {
    //   res.render('home')
    // })

    app.use('/demoModule',demoModule)

    //Course Manager 
    app.use('/me', meRouter);

    //Cousre views
    app.use('/course', coursesRouter);

    //Search
    app.use('/search', searchRouter);

    //Home
    app.use('/', siteRouter);
}

module.exports = router;
