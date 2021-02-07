const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  link: [{type: Types.objectId, ref: "Link"}]
});

module.exports = model('User', schema);