const Teacher = require('../models/teacherModel');

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.getAll();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createTeacher = async (req, res) => {
    try {
        const teacher = req.body;
        const result = await Teacher.create(teacher);
        res.status(201).json({ message: 'Teacher created', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTeacherById = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await Teacher.findById(id);
        if (!teacher) {
            res.status(404).json({ message: 'Teacher not found' });
        } else {
            res.json(teacher);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Teacher.deleteById(id);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Teacher not found' });
        } else {
            res.json({ message: 'Teacher deleted' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTeacher = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const result = await Teacher.update(id, { name, email });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        res.status(200).json({ message: 'Teacher updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error updating teacher', error: err });
    }
};

module.exports = {
    getAllTeachers,
    createTeacher,
    getTeacherById,
    deleteTeacher,
    updateTeacher,
};
