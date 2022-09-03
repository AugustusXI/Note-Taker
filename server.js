// dependencies
const express = require("express");
const app = express();
// define the required routes for everything to run
const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");
// assign the api routes to when they're called

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// run the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server is listening on PORT: ${PORT}`);
});
