const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://Daniel:04302001@cluster0.2r2uv.mongodb.net/rawExpressTests?retryWrites=true&w=majority";

  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    await createListing(client, {
      name: "Lovely Loft",
      summary: "A charming loft in Paris",
      bedrooms: 1,
      bathrooms: 1,
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);

  console.log(`New listing created with the new id ${result.insertedId}`);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}
