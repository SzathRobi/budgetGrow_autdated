import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const transaction = new Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  income: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now().toLocaleString()
  }
});

mongoose.models = {};

const Transaction = mongoose.model('Transaction', transaction);

export default Transaction;