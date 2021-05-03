const { fork } = require("child_process");
const os = require("os");
const cpuCount = os.cpus().length;

console.log("cpu count", cpuCount);

for (let i = 0; i < cpuCount; i++) {
  const process = fork("./child.js");
}
