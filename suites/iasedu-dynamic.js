/**
 * BackstopJS tests for www.ias.edu: dynamic content.
 */

module.exports = function(baseUrl) {
  return {
    config: {
      paths: {
        bitmaps_reference: "backstop_data/bitmaps_reference_dynamic",
      }
    },
    scenarios: [
      {
        label: "home front",
          url: baseUrl + "/",
          delay: 5000
      },
      {
        label: "scholar dijkgraaf",
          url: baseUrl + "/scholars/dijkgraaf"
      },
      {
        label: "scholars current",
        url: baseUrl + "/scholars/current-scholars"
      },
      {
        label: "scholars current paged",
        url: baseUrl + "/scholars/current-scholars?aff=All&page=4"
      },
      {
        label: "scholars all",
        url: baseUrl + "/scholars/all-scholars"
      },
      {
        label: "scholars faculty",
        url: baseUrl + "/scholars/faculty-emeriti"
      },
      {
        label: "scholars faculty past",
        url: baseUrl + "/scholars/faculty-emeriti?status=0&aff=All"
      },
      {
        label: "scholars directors",
        url: baseUrl + "/scholars/directors"
      },
      {
        label: "ideas",
        url: baseUrl + "/ideas",
        delay: 3000
      },
      {
        label: "ideas ajax math",
        url: baseUrl + "/ideas",
        delay: 3000,
        clickSelectors: ["#edit-aff-2"],
        postInteractionWait: 3000
      },
      {
        label: "ideas ajax featured",
        url: baseUrl + "/ideas?aff=2",
        delay: 3000,
        clickSelectors: ["#edit-aff-featured"],
        postInteractionWait: 3000
      },
      {
        label: "ideas filtered",
        url: baseUrl + "/ideas?aff=2&keys=wigderson",
        delay: 1000
      },
      {
        label: "calendar",
        url: baseUrl + "/calendar"
      },
      {
        label: "event series",
        url: baseUrl + "/event-series/marston-morse-lecture"
      },
      {
        label: "news filtered",
        url: baseUrl + "/news?view=All&keys=wigderson"
      },
      {
        label: "news",
        url: baseUrl + "/news"
      },
      {
        label: "news tags",
        url: baseUrl + "/news-tags/quantum-mechanics",
        selectors: ["#content-area"]
      },
      {
        label: "trustees",
        url: baseUrl + "/about/trustees",
        selectors: ["#content-area"]
      },
      {
        label: "search grabar",
        url: baseUrl + "/search/site/oleg%20grabar",
        removeSelectors: [".search-url"]
      }
    ]
  };
};
