const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const tasksRoutes = require("./routes/tasks");

const app = express();
const PORT = 9000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/task", tasksRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://nehachaturvedy:Neha1234@cluster0.3ofnsad.mongodb.net/task"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));
