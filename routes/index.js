const express = require('express');
const router = express.Router();
const models = require('../models/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/pages', async (req, res, next) => {
  try {
    let allPages = await models.page.find();
    res.status(200).json(allPages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
