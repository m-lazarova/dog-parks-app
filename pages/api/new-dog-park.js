import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST'){
    const data = req.body;
    const client = await MongoClient.connect('mongodb+srv://DogPark:leQPcX9Oj1IdwQca@cluster0.wotl1.mongodb.net/dogParks?retryWrites=true&w=majority');

    const db = client.db();

    const parkCollection = db.collection('dogparks');
    const result = await parkCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: 'Dog park added successfully' });
  }
};

export default handler;