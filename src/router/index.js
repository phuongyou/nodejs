const searchRouter = require('./search');
const siteRouter = require('./site');

function router(app) {
    // app.get('/', (req, res) => {
    //   res.render('home')
    // })

    //Search

    app.use('/search', searchRouter);

    //Home
    app.use('/', siteRouter);

    //loi k link dc css
}

module.exports = router;
