import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";

dotenv.config();

import db from "./db";

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
});

app.post("/run-query", (req: Request, res: Response) => {
	const query = req.body.query;
	console.log(query);
	db.query(query, (err, results) => {
		if (err) {
			res.status(500).send("Internal server error");
		} else {
			res.status(200).send(results);
		}
	});
});

app.get("/run-query", async (req: Request, res: Response) => {
	const query = req.query.query;

	if (typeof query !== "string") {
		return res.status(400).send("Query parameter must be a string");
	}

	db.query(query, (err, results) => {
		if (err) {
			res.status(500).send("Internal server error");
		} else {
			res.json(results);
		}
	});
});
