import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import db from "./db";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

app.post("/run-query", (req: Request, res: Response) => {
  const query = req.body.qyery;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Internal server error");
    } else {
      console.log(results);
      res.send(results);
    }
  });
});


