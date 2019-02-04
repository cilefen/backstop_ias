/**
 * BackstopJS common settings.
 */

const viewports = require("./viewports");

module.exports = {
  engine: "puppeteer",
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  report: ["browser"],
  asyncCompareLimit: 100,
  viewports: [
    viewports.phone,
    viewports.tablet_vertical,
    viewports.laptop,
    viewports.desktop
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report"
  }
};
