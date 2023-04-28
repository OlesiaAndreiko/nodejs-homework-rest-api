const app = require("./app");

const connectMongo = require("./db/connection");

require("dotenv").config();

const startServer = async () => {
  try {
    await connectMongo();
    app.listen(process.env.PORT || 9090, (error) => {
      if(error) {
        console.log(`Error launch server ${error}`)
      }
      console.log(`Database connection successful`);
    });
  } catch (error) {
    console.log(`Failed to launch application ${error.message}`);    
    process.exit(1);
  }
};

startServer();