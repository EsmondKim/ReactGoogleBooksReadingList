const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/GoogleBookAPIv1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// mongoose
//   .connect(
//     process.env.MONGODB_URI ||
//       `mongodb://${process.env.HOST}/${process.env.DB_NAME}`,
//     {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("\n\nMongoDB successfully connected\n\n"))
//   .catch((err) => console.log(err));

//Connect to the MongoDB Locally
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/GoogleBookAPIv1"
// );

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
