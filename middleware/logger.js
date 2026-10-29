/* =========================================================
 * middleware/logger.js — custom logging middleware
 * CSCI 3172 Lab 3
 *
 * Intercepts every request, prints the HTTP method, requested
 * path and a timestamp to the console, then calls next() so
 * the request keeps flowing down the pipeline.
 * ========================================================= */

'use strict';

const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;
