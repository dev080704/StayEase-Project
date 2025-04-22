const mongoose = require("mongoose");
const fs = require("fs");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/StayEase";
const OUTPUT_FILE = "./init/data.js";

async function exportData() {
  await mongoose.connect(MONGO_URL);
  const listings = await Listing.find({});
  const sampleListings = listings.map(listing => ({
    title: listing.title,
    description: listing.description,
    image: listing.image,
    price: listing.price,
    location: listing.location,
    country: listing.country,
  }));
  const fileContent = `const sampleListings = ${JSON.stringify(sampleListings, null, 2)};\n\nmodule.exports = { data: sampleListings };\n`;
  fs.writeFileSync(OUTPUT_FILE, fileContent, "utf-8");
  console.log(`Exported ${sampleListings.length} listings to data.js`);
  mongoose.connection.close();
}

exportData().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
