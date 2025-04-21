const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://bschar01:crosscountry%231@cluster0.k9kkhp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {

  try {
    await client.connect();
    const database = client.db('Stock');
    const publicComp = database.collection('Public Companies');

    
    await publicComp.deleteMany({});
    console.log("Everything deleted successfully!");

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
