import connectDB from '../../../middlewares/mongodb';
import Transaction from '../../../models/transaction';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if title, amount or income is provided
    const { title, amount, income } = req.body;  //income maybe fucks things up if value = false
    if (title && amount) {
        try {
          const transaction = new Transaction({
            title,
            amount,
            income
          });
          // Create new transaction
          const transactioncreated = await transaction.save();
          return res.status(200).send(transactioncreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);