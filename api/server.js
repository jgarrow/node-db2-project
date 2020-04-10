const express = require("express");

const db = require("../data/dbConfig");
const carsRoutes = require("./routes/carsRoutes");

const server = express();
const baseUrl = "/api";

server.use(express.json());
server.use(`${baseUrl}`, carsRoutes);

module.exports = server;
