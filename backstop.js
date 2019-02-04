/**
 * BackstopJS tests runner.
 */

const args = require("yargs")
  .usage("Usage: node $0 --command [string] --suite [string] --url [string] --filter [string]")
  .demandOption(["command","suite", "url"])
  .example("node $0 --command test --suite iasedu --url http://www-stage.ias.edu", "Test")
  .example("node $0 --command test --suite iasedu --url http://www-stage.ias.edu --filter IAS-299", "Test (filtered)")
  .example("node $0 --command approve --suite iasedu --url http://www-stage.ias.edu", "Approve changes")
  .describe("command", "The BackstopJS command: approve, reference, test, or openReport")
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
let config = require("./common");
config.id = args.suite;

const suite = require("./suites/" + args.suite)(args.url);
config.scenarios = suite.scenarios;

const merge = require('lodash.merge');
const overrides = suite.hasOwnProperty('config') ? suite.config : {};
config = merge(config, overrides);

backstop(args.command, { config: config, filter: args.filter }).catch(function () {
  process.exit(1);
});
