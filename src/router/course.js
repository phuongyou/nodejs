const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.get('/:id/edit', courseController.edit);

router.post('/multi-delete', courseController.multiDelete);
router.post('/store', courseController.createHandle);
router.post('/:id/restore', courseController.restore);
router.post('/multi-restore', courseController.multiRestore);


router.put('/:id', courseController.update);

router.delete('/:id', courseController.delete);
router.delete('/:id/forceDelete', courseController.forceDelete);





module.exports = router;
