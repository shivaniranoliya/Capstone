const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconnection');
const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes'); 
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
