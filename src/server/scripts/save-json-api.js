const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "../db/data.json");
const destination = path.resolve(__dirname, "../../..", "build/static/db");

fs.mkdirSync(destination, { recursive: true });
fs.copyFileSync(source, path.join(destination, "data.json"));
console.log("JSON copied to build/static/db");
