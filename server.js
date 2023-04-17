const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Olesia:uQUeYLVprV9e9Gw1@cluster0.k16ocpe.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// uQUeYLVprV9e9Gw1
