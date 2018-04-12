/**
 * BackstopJS common settings.
 */

module.exports = {
  engine: "chrome",
  report: ["browser"],
  asyncCompareLimit: 100,
  viewports: [
    {
      name: "phone",
      width: 320,
      height: 480
    },
    {
      name: "tablet_vertical",
      width: 768,
      height: 1024
    },
    {
      name: "laptop",
      width: 1366,
      height: 768
    },
    {
      name: "desktop",
      width: 1920,
      height: 1080
    }
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report"
  }
};
