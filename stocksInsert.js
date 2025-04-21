
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://bschar01:crosscountry%231@cluster0.k9kkhp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {

  try {
    await client.connect();
    const database = client.db('Stock');
    const publicComp = database.collection('Public Companies');

    
    const fs = require("fs");
    const { parse } = require("csv-parse");

    const parser = fs.createReadStream("companies-1.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    for await (const row of parser) {
      console.log("Inserting this lovely row", row);
      await publicComp.insertOne({Company: row[0], Ticker: row[1], Price: row[2]})

    }
    console.log("Yay - inserted");

  } finally {
    await client.close();
  }
}

module.exports = run;
