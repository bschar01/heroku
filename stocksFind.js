const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://bschar01:crosscountry%231@cluster0.k9kkhp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run(question1, question2) {
  try {
    const database = client.db('Stocks');
    const productList = database.collection('Public Companies');
    let query;
    if(question2 === "Company") {
      query = { Company: question1 };
    } else {
      query = { Ticker: question1 };
    }
    const result = await productList.findOne(query);

    
    if(result) {
      console.log(result);
    } else {
      console.log("There isn't a product in the database that matches this search");
    } 

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
