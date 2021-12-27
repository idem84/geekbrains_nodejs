"use strict";
const fs = require("fs");
let readline = require("readline");

const ACCESS_LOG = "./access.log";
const IP_LIST_1 = "./192.168.174.254.log";
const IP_LIST_2 = "./192.168.174.162.log";

const rd = readline.createInterface({
  input: fs.createReadStream(ACCESS_LOG),
  terminal: false,
});

const writeStream = fs.createWriteStream(IP_LIST_1, {
  flags: "a",
  encoding: "utf-8",
});

const writeStream2 = fs.createWriteStream(IP_LIST_2, {
  flags: "a",
  encoding: "utf-8",
});

rd.on("line", (line) => {
  let result = /192.168.174.254/g.test(line);
  let result2 = /192.168.174.162/g.test(line);
  if (result) {
    writeStream.write(line + "\n");
  } else if (result2) {
    writeStream2.write(line + "\n");
  }
});