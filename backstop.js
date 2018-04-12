/**
 * BackstopJS tests runner.
 */

const args = require("yargs")
  .usage("Usage: node $0 --command [string] --suite [string] --url [string] --filter [string]")
  .demandOption(["command","suite", "url"])
  .example("node $0 --command reference --suite iasedu --url https://www.ias.edu", "Reference run")
  .example("node $0 --command test --suite iasedu --url http://www-stage.ias.edu", "Test run")
  .example("node $0 --command reference --suite iasedu --url https://www.ias.edu --filter IAS-299", "Filtered reference run")
  .example("node $0 --command reference --suite iasedu --url https://www.ias.edu --filter \"give authorize\"", "Filtered reference run")
  .describe("command", "The BackstopJS command: reference, test, or openReport")
  .string("command")
  .describe("suite", "The test suite to execute (example: iasedu)")
  .string("suite")
  .describe("url", "The base URL")
  .string("url")
  .describe("filter", "The label filter")
  .string("filter")
  .wrap(null)
  .argv;
const backstop = require("backstopjs");
var config = require("./common");
config.id = args.suite;
config.scenarios = require("./suites/" + args.suite)(args.url);
backstop(args.command, { config: config, filter: args.filter }).catch(function () {
  process.exit(1);
});
