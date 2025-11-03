const core = require('@actions/core');

try {
  // Get input values
  const nametoGreet = core.getInput('who-to-greet');
  console.log(`Hello', ${nametoGreet}!`);
  core.setOutput('time', new Date().toTimeString());
} catch (error) {
  core.setFailed(error.message);
}