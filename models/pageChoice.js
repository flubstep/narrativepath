const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageChoiceSchema = new Schema({
  content: {
    type: Object
  },
  toPage: {
    type: Schema.Types.ObjectId,
    ref: 'page'
  },
  fromPage: {
    type: Schema.Types.ObjectId,
    ref: 'page'
  },
  conditions: {
    type: Object
  }
});

module.exports = mongoose.model('pagechoice', PageChoiceSchema);
