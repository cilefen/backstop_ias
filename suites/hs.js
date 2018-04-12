/**
 * BackstopJS tests for www.hs.ias.edu.
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
      label: "faculty",
      url: baseUrl + "/faculty",
      delay: 2000
    },
    {
      label: "staff",
      url: baseUrl + "/staff",
      delay: 2000
    },
    {
      label: "current scholars",
      url: baseUrl + "/memberlists",
      delay: 2000
    },
    {
      label: "past scholars",
      url: baseUrl + "/past_scholars",
      delay: 2000
    },
    {
      label: "research classics",
      url: baseUrl + "/classics",
      delay: 2000
    },
    {
      label: "research near east",
      url: baseUrl + "/islamic_world",
      delay: 2000
    },
    {
      label: "research east asia",
      url: baseUrl + "/eas",
      delay: 2000
    },
    {
      label: "membership announcement",
      url: baseUrl + "/mem_announcement",
      delay: 2000
    },
    {
      label: "mellon fellowships",
      url: baseUrl + "/mellon",
      delay: 2000
    },
    {
      label: "resources",
      url: baseUrl + "/resources_hs_members",
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
      url: baseUrl + "/search/node?keys=bynum"
    }
  ];
};
