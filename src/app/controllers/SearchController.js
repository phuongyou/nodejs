class SearchController {
    searchIndex(req, res) {
        res.render('search');
    }
}

module.exports = new SearchController();
