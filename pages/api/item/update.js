import connectDB from '../../../middlewares/mongodb';
import Transaction from '../../../models/transaction';

const handler = async (req, res) => {
try {
    await Transaction.findByIdAndUpdate(req.params.id, req.body);
    await Transaction.save();
    res.send("updated");
  } catch (error) {
    res.status(500).send(error);
  }
};

export default connectDB(handler);