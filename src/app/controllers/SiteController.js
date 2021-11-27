const Course = require('../models/Course')
const {multiMongooseObject} = require('../../util/mongoose')

class SiteController {
    HomeIndex(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', { courses :multiMongooseObject(courses) })
            //    res.json(courses)
            })
            .catch(error => next(error)) // catch(next)



 
    }
}

module.exports = new SiteController();
