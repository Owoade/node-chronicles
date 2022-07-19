import {
  callbackify,
  deprecate,
  getSystemErrorMap,
  getSystemErrorName,
  inspect,
  promisify,
} from "util";

import { execFile } from "child_process";

import fs from "fs";

// Calbackify

function test() {
  return Promise.reject(true);
}

const callback = callbackify(test);

callback((err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// End of Calbackify

//  Deprecate

process.throwDeprecation = true; // Throws an Error when the deprecated function  is called
function legacyMethod() {
  return "This code was written by Einstein";
}

const dep = deprecate(legacyMethod, "Beware this code is out of date");

// End of Deprecate

// Get System Error Name and Map

fs.readFile("", (err, data) => {
  const errName = getSystemErrorName(err.errno);
  console.log(errName, "FS- block");
});

const controller = new AbortController();
const { signal } = controller;
const child = execFile("ode", ["--version"], { signal }, (error) => {
  const errMap = getSystemErrorMap(error.errno);
  const errName = getSystemErrorName(error.errno);
  console.log(errName, "Process block"); // an AbortError
});

controller.abort();

// Get System Error Name and Map

// Inspect

const obj = {
  [Symbol("Unique Identifieer")]: "This is a unique attribute",
};

console.log(inspect(obj));

//  End of Inspect


// Promisify

const getFile = promisify(fs.readFile);

getFile("../streams/index.js")
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err));

// End Promisify
