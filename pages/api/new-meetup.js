import { MongoClient } from 'mongodb';
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        const { title, image, address, description } = data;
        const client = await MongoClient.connect(`mongodb+srv://max:max123@cluster0.3yymq.mongodb.net/meetups?retryWrites=true&w=majority`)
        const db = client.db();
        const meetupsCollections = db.collection('meetups_data')
       const result = await meetupsCollections.insertOne({
            ...data
        })
        console.log("result --->11", result)
        client.close();

        res.status(201).json({
            message: 'Meetup inserted...'
        })
    }
}

export default handler;