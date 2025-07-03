const glob = require("glob");
const path = require("path");

const chunkIndex = parseInt(process.argv[2]);
const totalChunks = parseInt(process.argv[3]);

const specs = glob.sync("cypress/e2e/**/*.spec.js");
specs.sort();

const chunkSize = Math.ceil(specs.length / totalChunks);
const start = (chunkIndex - 1) * chunkSize;
const selected = specs.slice(start, start + chunkSize);

console.log(selected.join(","));
