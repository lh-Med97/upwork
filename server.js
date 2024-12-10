// server.js
// ... other imports
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
let users = []; // This should ideally be replaced with a database

// Register route
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    
    // Validation
    if (!email || !password || password.length < 6) {
        return res.status(400).send('Email and password are required, and password must be at least 6 characters long.');
    }

    // Check for existing user
    const existingUser = users.find(u => u.email === email);
    if (existingUser) return res.status(400).send('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).send('User registered');
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).send('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, email: user.email }); // Return email with token
});

// Middleware to authenticate users
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Protected route for applying to jobs
app.post('/api/apply', authenticateToken, (req, res) => {
    // Logic for applying to a job
    res.send('Job application submitted');
});

// Logout route (optional)
app.post('/api/logout', (req, res) => {
    // Invalidate token on client side (no server-side action needed for JWT)
    res.send('User logged out');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});