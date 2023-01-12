const mongoose = require("mongoose");

const connectDB = async () => {
    const user = process.env.MONGO_USER;
    const pass = process.env.MONGO_PASS;
    const mongoUrl = "mongodb+srv://"+ user+":"+pass+"@cluster0.uxghxpb.mongodb.net/prod";
  try {
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', async function () {
        console.log("Connection Successful");
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;