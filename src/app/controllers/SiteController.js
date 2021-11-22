class SiteController {
    HomeIndex(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController();
