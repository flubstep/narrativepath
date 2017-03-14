const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  title: {
    type: String
  },
  contentJSON: {
    type: Object
  }
});

module.exports = mongoose.model('page', PageSchema);
