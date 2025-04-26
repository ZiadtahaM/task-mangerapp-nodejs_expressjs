const express = require('express');
const app = express();
const port = 3000;
require('./datab/mongoose'); 
// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const profileRoutes = require('./routes/profileroutes');

app.use('/api/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/profile', profileRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});