const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://bschar01:crosscountry%231@cluster0.k9kkhp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run(question1, question2) {
  try {
    await client.connect();
    const database = client.db('Stock');
    const publicComp = database.collection('Public Companies');
    
    let query;
    if(question2 === "Company") {
      query = {Company: question1};
    } else {
      query = ({Ticker: question1};
    }
    query+= ", {'company': 1, '_id': 0, 'ticker': 1, 'price': 1});
    //db.coll.find({"x": 1}, {"actors": 1, "_id": 0})     // actors

    console.log(query);
    const result = await publicComp.find(query);
    
    if(result) {
      console.log(result);
    } else {
      console.log("There isn't a product in the database that matches this search");
    } 

  } finally {
    await client.close();
  }
}

module.exports = run;
