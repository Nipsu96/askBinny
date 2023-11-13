const express = require("express");
const cors = require("cors");
const sortablesRouter = require("./routes/sortableRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api/sortable", sortablesRouter);

module.exports = app;
