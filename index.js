#!/usr/bin/env node
//This is a silly tool that returns a random deployment name from a list of deployment names. It is meant to be used as a fun way to generate deployment names for people who are looking for inspiration.
//it uses github action lib to output the deploymentName as an output variable that can be used in other steps of the workflow.
import * as core from "@actions/core";

const deploymentNames = [
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

function getRandomDeploymentName() {
  const randomIndex = Math.floor(Math.random() * deploymentNames.length);
  return deploymentNames[randomIndex];
}

try {
  const deploymentType = core.getInput("deploymentType");
  const path = core.getInput("path");
  console.log("path", path);
  if (!deploymentType) {
    throw new Error("deploymentType input is required");
  }
  console.log("running for deploymentType", deploymentType);
  const deploymentName = getRandomDeploymentName();
  core.setOutput("deploymentName", deploymentName+" the "+deploymentType);
} catch (error) {
  core.setFailed(error.message);
}
