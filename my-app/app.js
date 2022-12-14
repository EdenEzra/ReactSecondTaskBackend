const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI,
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
