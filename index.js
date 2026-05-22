#!/usr/bin/env node
//This is a silly tool that returns a random deployment name from a list of deployment names. It is meant to be used as a fun way to generate deployment names for people who are looking for inspiration.
//it uses github action lib to output the deploymentOutput as an output variable that can be used in other steps of the workflow.
import * as core from "@actions/core";

const deploymentOutputs = [
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

function getRandomdeploymentOutput() {
  const randomIndex = Math.floor(Math.random() * deploymentOutputs.length);
  return deploymentOutputs[randomIndex];
}

try {
  const deploymentType = core.getInput("deploymentType");
  const country = core.getInput("country");
  console.log("country", country);
  if (!deploymentType) {
    throw new Error("deploymentType input is required");
  }
  if(deploymentType === "v3") {
    throw new Error("deploymentType v3 is problematic");
  }
  console.log("running for deploymentType", deploymentType);
  const output = getRandomdeploymentOutput();
  core.setOutput("The ", output+" the "+deploymentType);
} catch (error) {
  core.setFailed(error.message);
}
