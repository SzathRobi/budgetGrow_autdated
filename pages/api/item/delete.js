import connectDB from '../../../middlewares/mongodb';
import Transaction from '../../../models/transaction';

const handler = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.body._id);
  
    if (!transaction) res.status(404).send("No item found");
    res.status(200).send("deleted");
  } catch (error) {
      res.status(500).send(error);
  }
};

export default connectDB(handler);
