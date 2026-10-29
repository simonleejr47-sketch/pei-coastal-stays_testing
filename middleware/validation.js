/* =========================================================
 * middleware/validation.js — POST payload validation
 * CSCI 3172 Lab 3
 * ========================================================= */

'use strict';

const REQUIRED_FIELDS = [
  ['name', 'string', 'name must be a non-empty string'],
  ['region', 'string', 'region must be a non-empty string'],
  ['category', 'string', 'category must be a non-empty string'],
  ['price', 'number', 'price must be a valid positive number'],
  ['guests', 'number', 'guests must be a valid positive integer']
];

const isNonEmptyString = (value) =>
  typeof value === 'string' && value.trim().length > 0;

const validateStay = (req, res, next) => {
  const body = req.body;

  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Request body must be a JSON object.'
    });
  }

  for (const [field, type, message] of REQUIRED_FIELDS) {
    const value = body[field];

    if (type === 'string') {
      if (!isNonEmptyString(value)) {
        return res.status(400).json({
          error: 'Bad Request',
          message
        });
      }
    }

    if (type === 'number') {
      const isValidNumber =
        typeof value === 'number' && Number.isFinite(value);
      if (!isValidNumber || (field === 'price' && value <= 0)) {
        return res.status(400).json({
          error: 'Bad Request',
          message
        });
      }
      if (field === 'guests' && (!Number.isInteger(value) || value <= 0)) {
        return res.status(400).json({
          error: 'Bad Request',
          message
        });
      }
    }
  }

  next();
};

module.exports = validateStay;
