const express = require('express');
const teacherController = require('../controllers/teacherController');

const router = express.Router();

router.get('/', teacherController.getAllTeachers);
router.post('/', teacherController.createTeacher);
router.get('/:id', teacherController.getTeacherById);
router.delete('/:id', teacherController.deleteTeacher);
router.put('/:id', teacherController.updateTeacher);

module.exports = router;
