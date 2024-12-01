import express from "express";
import "dotenv/config";
import initKnex from "knex";
import cors from "cors";

const knex = initKnex(config);
const app = express();

const PORT = process.env.PORT || 8080; // set port from .env or alternative 8080

app.use(express.json()); // initializes json to parse to allow easy access of the json content from the client site
app.use(cors({ origin: process.env.CORS_ORIGIN })); // allows to interact content from one site to other
