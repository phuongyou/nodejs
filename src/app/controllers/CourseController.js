const Course = require('../models/Course')
const { singleMongooseObject } = require('../../util/mongoose')


class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {

        //res.json(req.params.slug )
        Course.findOne({ slug: req.params.slug })
            .then(courses => {
               // res.json(course)
                res.render('courses/show',{courses:singleMongooseObject(courses)})

            })
            .catch(next)

    }
}

module.exports = new CourseController();
