#!/usr/bin/env node
//This is a silly tool that returns a random cat name from a list of cat names. It is meant to be used as a fun way to generate cat names for people who are looking for inspiration.
//it uses github action lib to output the catName as an output variable that can be used in other steps of the workflow.
import * as core from "@actions/core";

const catNames = [
  "Whiskers",
  "Fluffy",
  "Mittens",
  "Shadow",
  "Simba",
  "Luna",
  "Oliver",
  "Chloe",
  "Charlie",
  "Bella",
  "Max",
  "Sophie",
  "Tiger",
  "Cleo",
  "Smokey",
];

function getRandomCatName() {
  const randomIndex = Math.floor(Math.random() * catNames.length);
  return catNames[randomIndex];
}

try {
  const catType = core.getInput("catType");
  const path = core.getInput("path");
  console.log("path", path);
  if (!catType) {
    throw new Error("catType input is required");
  }
  console.log("running for catType", catType);
  const catName = getRandomCatName();
  core.setOutput("catName", catName+" the "+catType);
} catch (error) {
  core.setFailed(error.message);
}
