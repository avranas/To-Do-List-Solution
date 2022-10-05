const express = require('express')
const router = express.Router()
const { create, read, removeTodo } = require('../controller');

router.get('/todos', read);
router.post('/todo/create', create);
router.delete('/todo/remove/:id', removeTodo);

module.exports = router;