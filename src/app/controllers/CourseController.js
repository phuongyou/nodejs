const Course = require('../models/Course');
const { singleMongooseObject } = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        //res.json(req.params.slug )
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                // res.json(course)
                res.render('courses/show', {
                    courses: singleMongooseObject(courses),
                });
            })
            //catch(err=>next(err))
            .catch(next);
    }

    //[GET] /course/create --Createcourse
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /course/store --Create course Hanlde

    createHandle(req, res, next) {
        const data = req.body;
        data.image = `http://i3.ytimg.com/vi/${data.youtubeID}/maxresdefault.jpg`;
        const course = new Course(data);
        course.save()
            .then(() => res.redirect('/me/store/courses'))
            .catch(next);
    }

    //[GET] /course/:id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then(courses => {
                // res.json(course)
                res.render('courses/edit', {
                    courses: singleMongooseObject(courses),
                });
            })
            .catch(next);
    }

    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next)

    }

    //[DELETE] /course/:id
    delete(req, res, next) {


        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)

    }

    //[DELETE] /course/:id/forceDelete
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)


    }

    //[POST] /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)

    }

    //[DELETE] /course/multi-delete/:id
    multiDelete(req, res, next) {

        switch(req.body.action){
            case "delete":
                Course.delete({ _id: req.body.courseIDs })
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            default:

        }
    }


    //[POST] /course/multi-restore/
    multiRestore(req, res, next) {
        switch(req.body.action){
            case "restore":
                Course.restore({ _id:req.body.courseIDs})
                .then(()=> res.redirect('back'))
                .catch(next)
                break;
            case "pureDelete":
                Course.deleteMany({ _id:req.body.courseIDs})
                .then(()=> res.redirect('back'))
                .catch(next)
                break;
              
            
            default:
        }

    
    }


}

module.exports = new CourseController();
