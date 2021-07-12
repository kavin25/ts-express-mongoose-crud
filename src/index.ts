import express from "express";
import mongoose from "mongoose";
import { dweetRoutes } from "./routes/api";

const app = express();
app.use(express.json());
app.use("/api/v1/dweets", dweetRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Hello");
});

mongoose
  .connect("mongodb://localhost:27017/dweetDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Couldn't connect to the DB **********");
    console.error(err.toString());
    console.log("**********");
  });
