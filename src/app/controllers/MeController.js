const Course = require('../models/Course');
const { multiMongooseObject } = require('../../util/mongoose');
const { NULL } = require('node-sass');

class MeController {
    // [GET] /me/store/courses
    show(req, res, next) {
 
        Promise.all([Course.find(),Course.countDeleted(),Course.count()])
            .then(([courses,countDelete,countData])=>{
                res.render('courses/meCourses', {
                    course: multiMongooseObject(courses),
                    countDelete,
                    countData
                });
            })
            .catch(next);
            
    }

     // [GET] /me/recycle/courses
    recycle(req, res, next) {
        Promise.all([Course.findDeleted(),Course.count(),Course.countDeleted()])
            .then(([courses,count,countDeleted])=>{
                res.render('courses/recycle', {
                    course: multiMongooseObject(courses),
                    count,
                    countDeleted,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
