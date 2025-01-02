const db = require('../config/db');

const Teacher = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM teachers');
        return rows;
    },

    create: async (teacher) => {
        const { name, subject, email } = teacher;
        const [result] = await db.query(
            'INSERT INTO teachers (name, email) VALUES (?, ?, ?)',
            [name, email]
        );
        return result;
    },

    findById: async (id) => {
        const [rows] = await db.query('SELECT * FROM teachers WHERE id = ?', [id]);
        return rows[0];
    },

    deleteById: async (id) => {
        const [result] = await db.query('DELETE FROM teachers WHERE id = ?', [id]);
        return result;
    },

    update: async (id, teacher) => {
        const { name, email } = teacher;
        const [result] = await db.query(
            'UPDATE teachers SET name = ?, email = ? WHERE id = ?',
            [name, email, id]
        );
        return result;
    },
};

module.exports = Teacher;
