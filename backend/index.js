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

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
  })
  .catch(err => console.log(err));