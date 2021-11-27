const searchRouter = require('./search');
const siteRouter = require('./site');
const coursesRouter = require('./course')

function router(app) {
    // app.get('/', (req, res) => {
    //   res.render('home')
    // })

    app.use('/course', coursesRouter)

    //Search
    app.use('/search', searchRouter);

    //Home
    app.get('/', siteRouter);



}

module.exports = router;
