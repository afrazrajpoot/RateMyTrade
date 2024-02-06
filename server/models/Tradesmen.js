const mongoose = require('mongoose');

const tradesMenSchema = new mongoose.Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username:{
    type:String
  },
  lat: Number, 
  lng:Number,
  tradeType: String,
  location:String,
  phoneNumber: Number,
  description: String,
   
    image:{
      type:String
    },
    gigImage1:{
      type: String,
    },
    gigImage2:{
      type: String,
    },
    gigImage3:{
      type: String,
    },
  }, {timestamps: true})

module.exports = mongoose.model('Trademan', tradesMenSchema);
