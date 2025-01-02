const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const teacherRoutes = require('./routes/teacherRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    res.status(200).send('Service is running');
});

app.use('/api/teachers', teacherRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
