// Load environment variables first
require('dotenv').config();

// Validate required environment variables
const BASEURL = process.env.BASEURL;

if (!BASEURL) {
  console.error('❌ Missing required environment variable: BASEURL');
  process.exit(1);
}

// Extract port from BASEURL
const url = new URL(BASEURL);
const PORT = url.port || 1000;

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Simple Health Check Service
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'ERROR',
    message: 'Internal server error'
  });
});

// Configuration
app.listen(PORT, () => {
  console.log(`🚀 Server running on ${BASEURL}`);
  console.log(`📊 Health check endpoint: GET ${BASEURL}/api/health`);
});
