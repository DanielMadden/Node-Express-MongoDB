const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Daniel:04302001@cluster0.2r2uv.mongodb.net/rawExpressTests?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(async (err) => {
  const collectionCars = await client.db("rawExpressTests").collection("cars");
  // perform actions on the collection object
  await collectionCars.insertOne({
    item: "card",
    qty: 15,
  });
  client.close();
});
