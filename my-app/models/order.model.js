const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Order = new schema({
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }
  }],
  time: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true
  }
});

module.exports = mongoose.model("Order", Order);
