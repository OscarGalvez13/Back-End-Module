const mongoose = require("mongoose");

const connect = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(
      "mongodb+srv://js13Oscar:T4W2zHRv1RStJNbr@cluster0.u7vfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    const db = mongoose.connection;
    db.on("open", () => {
      console.warn("Connection successful");
      resolve(mongoose);
    });
    db.on("error", (error) => {
      console.error("Connection failed", error);
      reject(error);
    });
  });

module.exports = {
  connect,
};
