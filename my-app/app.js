const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const chalk = require("chalk");

mongoose.connect(
  "mongodb+srv://bnk:bnkmongo@cluster0.vu2gbj5.mongodb.net/InternetiotAdvanced?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(chalk.yellow("Attempting to connect to MongoDB"));
    if (err) {
      console.error(chalk.red("Couldn't connect to Mongo"));
    } else {
      console.log(chalk.green("Connected to MongoDB"));
    }
  }
);

app.listen(3004, () => {

  console.log(chalk.green(`\nServer is running on port 3004 \n`));

});