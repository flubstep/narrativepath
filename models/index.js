'use strict';

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.json'))[env];
const db = {};

mongoose.Promise = require('bluebird');

let mongoURI = (
  config.use_env_variable
  ? process.env[config.use_env_variable]
  : process.env['MONGO_URI']
);
mongoURI = mongoURI || config.mongo_uri;
mongoURI = mongoURI || 'mongodb:///localhost';
mongoose.connect(mongoURI);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    let model = require(path.join(__dirname, file));
    db[model.modelName] = model;
  });

module.exports = db;
