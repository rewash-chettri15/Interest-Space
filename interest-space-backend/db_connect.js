const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/project";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connection ESTABLISH.....");
  })
  .catch((err) => {
    console.log(
      "Error in DB connection : " + JSON.stringify(err, undefined, 2)
    );
    process.exit();
  });

module.exports = mongoose;
