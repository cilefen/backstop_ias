/**
 * BackstopJS tests for www.library.ias.edu.
 */

module.exports = function(baseUrl) {
  return [
    {
      label: "home",
      url: baseUrl + "/",
      selectors: ["#footer", "document"],
      delay: 2000
    },
    {
      label: "journals",
      url: baseUrl + "/hs/periodicals/a-ak",
      delay: 2000
    },
    {
      label: "sidebar",
      url: baseUrl + "/archives",
      delay: 2000
    },
    {
      label: "loan request",
      url: baseUrl + "/hs/ias/ill",
      delay: 2000
    },
    {
      label: "staff",
      url: baseUrl + "/staff",
      delay: 2000
    },
    {
      label: "history and architecture",
      url: baseUrl + "/hs/libbuild",
      delay: 2000
    },
    {
      label: "login",
      url: baseUrl + "/user",
      delay: 2000
    },
    {
      label: "search node",
      url: baseUrl + "/search/node",
      delay: 2000
    },
    {
      label: "search sample",
      url: baseUrl + "/search/node?keys=request"
    }
  ];
};
