const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/pages', async (req, res, next) => {
  try {
    let allPages = await models.page.find();
    res.json(allPages);
  } catch (err) {
    res.fail(err);
  }
});

module.exports = router;
