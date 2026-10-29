/* =========================================================
 * routes/items.js — RESTful routes for the stay resource
 * CSCI 3172 Lab 3
 *
 * GET    /api/items       -> list all stays
 * GET    /api/items/:id   -> fetch one stay by id
 * POST   /api/items       -> create a stay (validated)
 * DELETE /api/items/:id   -> remove a stay by id
 * ========================================================= */

'use strict';

const express = require('express');
const store = require('../data/stays');
const validateStay = require('../middleware/validation');

const router = express.Router();

// GET /api/items — retrieve all records
router.get('/', (req, res) => {
  res.status(200).json({
    count: store.findAll().length,
    items: store.findAll()
  });
});

// GET /api/items/:id — retrieve a single record by id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'id must be a positive integer.'
    });
  }

  const stay = store.findById(id);
  if (!stay) {
    return res.status(404).json({
      error: 'Not Found',
      message: `No stay found with id ${id}.`
    });
  }

  res.status(200).json(stay);
});

// POST /api/items — create a new record (payload validated first)
router.post('/', validateStay, (req, res) => {
  const created = store.create(req.body);
  res.status(201).json({
    message: 'Stay created successfully.',
    item: created
  });
});

// DELETE /api/items/:id — remove a record by id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'id must be a positive integer.'
    });
  }

  const removed = store.removeById(id);
  if (!removed) {
    return res.status(404).json({
      error: 'Not Found',
      message: `No stay found with id ${id}.`
    });
  }

  res.status(200).json({
    message: 'Stay deleted successfully.',
    item: removed
  });
});

module.exports = router;
