const app = require("./app");

const mongoose = require("mongoose");

const {DB_HOST, PORT = 8080} = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// uQUeYLVprV9e9Gw1
