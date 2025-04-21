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
      query = {Ticker: question1};
    }

    console.log(query);
    const result = await publicComp.find(query);
    const array_result = await result.toArray();
    
    if(array_result.length > 0) {
      console.log("Results of Query: ", array_result);
    } else {
      console.log("There isn't a product in the database that matches this search");
    } 

  } finally {
    await client.close();
  }
}

module.exports = run;
