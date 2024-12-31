import "dotenv/config";
import express from "express";
import cors from "cors";

const expressApp = express();

expressApp.use(cors());

expressApp.get("/", (req, res) => {
  res.send("THIS IS HOME ROUTE SENT");
});

expressApp.listen(process.env.PORT, () => {
  console.log(`node-api app listening on port ${process.env.PORT}`);
});
