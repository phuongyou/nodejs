const searchRouter = require('./search')


function router(app) {

    app.get('/', (req, res) => {
      res.render('home')
    })

    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })

    app.use('/search',searchRouter)

    app.post('/search', (req, res) => {
        console.log(req.body)
        res.render('search')
    })



}

module.exports = router