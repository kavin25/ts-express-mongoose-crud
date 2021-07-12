import express from "express";
import Dweet from "../../../models/Dweet";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const dweets = await Dweet.find();
    res.json(dweets);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const { dweet, posted_by } = req.body;
  const newDweet = new Dweet({
    dweet,
    posted_by,
  });
  try {
    const savedDweet = await newDweet.save();
    res.json({ message: "Created Dweet", dweet: savedDweet });
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
