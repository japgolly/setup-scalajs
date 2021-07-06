const core  = require('@actions/core')
const os    = require("os")
const path  = require("path")
const shell = require("shelljs")

function install() {
  // Read inputs
  const jsdomVer     = core.getInput('jsdom-version')
  const sourcemapVer = core.getInput('source-map-support-version')

  // Create namespace
  const prefix = path.join(os.homedir(), "scalajs-npm")
  shell.set("-e")
  shell.exec(`npm config set prefix ${prefix}`)

  // Install global libs
  shell.exec(`npm install -g jsdom@${jsdomVer} source-map-support@${sourcemapVer}`)

  // Env vars
  core.exportVariable("NODE_PATH", path.join(prefix, "lib", "node_modules"))
  core.addPath(path.join(prefix, "bin"))
}

try {
  install()
} catch (error) {
  core.setFailed(error.message)
}
