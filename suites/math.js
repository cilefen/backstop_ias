/**
 * BackstopJS tests for www.math.ias.edu.
 */

const viewports = require("./../viewports");

module.exports = function(baseUrl) {
  return {
    scenarios: [
      {
        label: "activities menu",
        url: baseUrl + "/activities",
        hoverSelectors: ["a.active-trail.active", ".menu-lvl-2 a"],
        viewports: [
          viewports.laptop,
          viewports.desktop
        ]
      },
      {
        label: "activities menu phone",
        url: baseUrl + "/activities",
        clickSelectors: [".mobile-menu-expand", ".mobile-menu-btn"],
        viewports: [viewports.phone],
        postInteractionWait: 1000
      },
      {
        label: "activities menu tablet",
        url: baseUrl + "/activities",
        clickSelectors: [".mobile-menu-btn"],
        viewports: [viewports.tablet_vertical],
        postInteractionWait: 1000
      }
    ]
  };
};
