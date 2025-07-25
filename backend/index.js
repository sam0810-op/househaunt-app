const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authroutes');
const propertyRoutes = require('./routes/propertyroutes');

const app = express();
app.use(cors({
    origin: "https://sam0810-op.github.io",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/property', propertyRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running ✅')))
  .catch(err => console.log(err));
