const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./api/main.js"));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((err, req, res, next) => {
  console.log(err);
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error!");
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
