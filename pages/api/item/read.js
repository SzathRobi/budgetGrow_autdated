import connectDB from '../../../middlewares/mongodb';
import Transaction from '../../../models/transaction';

const handler = async (req, res) => {
  try {
    const transactions = await Transaction.find().lean()
    res.status(200).json(transactions)
  } catch (error) {
    res.status(500).send(error);
  }
};

export default connectDB(handler);
