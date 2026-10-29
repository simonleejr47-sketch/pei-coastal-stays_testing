/* =========================================================
 * server.js — PEI Coastal Stays REST API entry point
 * CSCI 3172 Lab 3
 *
 * Start: node server.js  
 * ========================================================= */

'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const itemsRouter = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware: parse JSON request bodies
app.use(express.json());

// Custom middleware: log method, path, timestamp for every request
app.use(logger);

// RESTful routes for the stay resource
app.use('/api/items', itemsRouter);

// Simple health check so a browser visit shows something friendly
app.get('/', (req, res) => {
  res.json({
    service: 'PEI Coastal Stays API',
    endpoints: [
      'GET /api/items',
      'GET /api/items/:id',
      'POST /api/items',
      'DELETE /api/items/:id'
    ]
  });
});

// 404 — unknown route (falls through all matching routes)
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.originalUrl} does not exist.`
  });
});

// Centralized error-handling middleware (four-parameter signature)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Request body contains malformed JSON.'
    });
  }

  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong on the server.'
  });
});

app.listen(PORT, () => {
  console.log(`PEI Coastal Stays API listening on port ${PORT}`);
});
