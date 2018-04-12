/**
 * BackstopJS tests for www.ias.edu.
 */

module.exports = function(baseUrl) {
  return [
    {
      label: "form webform",
      url: baseUrl + "/av-release-form"
    },
    {
      label: "landing support",
      url: baseUrl + "/support"
    },
    {
      label: "landing schools",
      url: baseUrl + "/schools"
    },
    {
      label: "press browder",
      url: baseUrl + "/press-releases/2016/browder-russia",
      delay: 1000
    },
    {
      label: "landing welcome",
      url: baseUrl + "/welcome",
      selectors: ["document", ".paragraphs-item-callout-quote"]
    },
    {
      label: "search dijkgraaf",
      url: baseUrl + "/search/node?keys=robbert%20dijkgraaf",
      delay: 2000
    },
    {
      label: "IAS-224",
      url: baseUrl + "/about/administration",
      selectors: ["#content-header", "#main"],
      misMatchThreshold : 0.1
    },
    {
      label: "search noresult error",
      url: baseUrl + "/search/node?keys=timelapse%20of%20godzilla%20attack",
      delay: 2000
    },
    {
      label: "home front",
      url: baseUrl + "/"
    },
    {
      label: "page apply",
      url: baseUrl + "/apply"
    },
    {
      label: "scholar dijkgraaf IAS-257",
      url: baseUrl + "/scholars/dijkgraaf"
    },
    {
      label: "scholar IAS-299",
      url: baseUrl + "/scholars/klaus-larres"
    },
    {
      label: "scholar arguz",
      url: baseUrl + "/scholars/nurömür-hülya-argüz"
    },
    {
      label: "scholar freed",
      url: baseUrl + "/scholars/daniel-freed"
    },
    {
      label: "landing scholars",
      url: baseUrl + "/scholars"
    },
    {
      label: "view scholars current",
      url: baseUrl + "/scholars/current-scholars"
    },
    {
      label: "view scholars current paged",
      url: baseUrl + "/scholars/current-scholars?aff=All&page=4"
    },
    {
      label: "view scholars all",
      url: baseUrl + "/scholars/all-scholars"
    },
    {
      label: "view scholars faculty",
      url: baseUrl + "/scholars/faculty-emeriti"
    },
    {
      label: "view scholars faculty past",
      url: baseUrl + "/scholars/faculty-emeriti?status=0&aff=All"
    },
    {
      label: "view scholars directors",
      url: baseUrl + "/scholars/directors"
    },
    {
      label: "home ideas",
      url: baseUrl + "/ideas",
      delay: 1000
    },
    {
      label: "ideas filtered",
      url: baseUrl + "/ideas?aff=1",
      delay: 1000
    },
    {
      label: "ideas filtered",
      url: baseUrl + "/ideas?aff=2",
      delay: 1000
    },
    {
      label: "ideas filtered",
      url: baseUrl + "/ideas?aff=3",
      delay: 1000
    },
    {
      label: "ideas filtered",
      url: baseUrl + "/ideas?aff=4",
      delay: 1000
    },
    {
      label: "ideas filtered",
      url: baseUrl + "/ideas?aff=All",
      delay: 1000
    },
    {
      label: "ideas filtered",
      url: baseUrl + "/ideas?aff=2&keys=wigderson",
      delay: 1000
    },
    {
      label: "idea bernstein",
      url: baseUrl + "/ideas/2011/bernstein-quantum-story",
      selectors: ["document", ".field-author-desc"]
    },
    {
      label: "idea IAS-327R",
      url: baseUrl + "/ideas/2017/exhibit-scholar-paradise"
    },
    {
      label: "idea IAS-327",
      url: baseUrl + "/ideas/2017/exhibit-scholar-paradise",
      onReadyScript: "chromy/clickGallery.js"
    },
    {
      label: "idea masrieh",
      url: baseUrl + "/ideas/ias-notes-fouad-j-masrieh"
    },
    {
      label: "idea serendipity",
      url: baseUrl + "/ideas?keys=scholarly%20serendipity",
      selectors: [".node-idea .group-middle"]
    },
    {
      label: "page memvisresinfo",
      url: baseUrl + "/humanresources/memvisresinfo"
    },
    {
      label: "event seminar",
      url: baseUrl + "/events/working-seminar-representation-theory",
      delay: 2000
    },
    {
      label: "event vino",
      url: baseUrl + "/events/pheno-vino-seminar-21"
    },
    {
      label: "event law",
      url: baseUrl + "/events/law-social-sciences-seminar"
    },
    {
      label: "event mathjax",
      url: baseUrl + "/events/princetonias-symplectic-geometry-seminar-95",
      delay: 2000
    },
    {
      label: "view events",
      url: baseUrl + "/events"
    },
    {
      label: "scholar goddard",
      url: baseUrl + "/scholars/goddard"
    },
    {
      label: "landing give",
      url: baseUrl + "/support/give-now"
    },
    {
      label: "support friends people",
      url: baseUrl + "/support/friends/people",
      selectors: ["document", ".ias-blocks-ias-sub-menu"]
    },
    {
      label: "view news filtered wigderson",
      url: baseUrl + "/news?view=All&keys=wigderson"
    },
    {
      label: "view news",
      url: baseUrl + "/news"
    },
    {
      label: "news strings",
      url: baseUrl + "/news/strings2016-videos"
    },
    {
      label: "news tags quantum",
      url: baseUrl + "/news-tags/quantum-mechanics",
      selectors: ["#content-area"]
    },
    {
      label: "news tags hirschman",
      url: baseUrl + "/news-tags/albert-o-hirschman",
      selectors: ["#content-area"]
    },
    {
      label: "news IAS-364",
      url: baseUrl + "/press-releases/john-bahcall-receives-enrico-fermi-award",
      selectors: [".cb-shortcode"]
    },
    {
      label: "news IAS-333",
      url: baseUrl + "/news/wam-2017",
    },
    {
      label: "news israel",
      url: baseUrl + "/news/israel-publiclecture2016"
    },
    {
      label: "news lang",
      url: baseUrl + "/news/lang-domain-newyorker",
      delay: 1000
    },
    {
      label: "news morin",
      url: baseUrl + "/news/morin-sight-quanta",
      delay: 1000
    },
    {
      label: "form webform incoming",
      url: baseUrl + "/incoming-scholar-contact-information"
    },
    {
      label: "human resources hr files",
      url: baseUrl + "/human-resources-memos-and-forms",
      onReadyScript: "chromy/clickAccordions.js"
    },
    {
      label: "scholar booker",
      url: baseUrl + "/scholars/courtney-booker"
    },
    {
      label: "scholar farmelo",
      url: baseUrl + "/scholars/graham-farmelo",
      selectors: ["document", ".field-type"]
    },
    {
      label: "scholar artist-in-residence",
      url: baseUrl + "/scholars/all-scholars?sort=field_last_name_value%20ASC&aff=All&stype=10&haff=All"
    },
    {
      label: "scholar bermel",
      url: baseUrl + "/scholars/derek-bermel"
    },
    {
      label: "scholar einstein",
      url: baseUrl + "/scholars/einstein"
    },
    {
      label: "view publications faculty",
      url: baseUrl + "/publications/faculty-and-members",
      delay: 1000
    },
    {
      label: "view publications",
      url: baseUrl + "/publications"
    },
    {
      label: "media IAS-247",
      url: baseUrl + "/in-the-media/visiting-professor-fights-eo-59447v8-behalf-syrian-doctor",
      selectors: ["document", ".field-title"]
    },
    {
      label: "landing why",
      url: baseUrl + "/support/why-support-ias"
    },
    {
      label: "landing working",
      url: baseUrl + "/campus-resources/working-ias"
    },
    {
      label: "landing about",
      url: baseUrl + "/about"
    },
    {
      label: "landing human resources",
      url: baseUrl + "/working-ias/human-resources"
    },
    {
      label: "about trustees",
      url: baseUrl + "/about/trustees"
    },
    {
      label: "form user",
      url: baseUrl + "/user"
    },
    {
      label: "404",
      url: baseUrl + "/foobar404"
    },
    {
      label: "form custom give amias",
      url: baseUrl + "/give/amias"
    },
    {
      label: "form custom give mirzakhani",
      url: baseUrl + "/give/mirzakhani"
    },
    {
      label: "form custom give authorize",
      url: baseUrl + "/give/authorize/Sm9obg%3D%3D/VGVzdA%3D%3D/MSBFaW5zdGVpbiBEcml2ZQ%3D%3D/UHJpbmNldG9u/Tko%3D/MDg1NDA%3D/VW5pdGVkIFN0YXRlcw%3D%3D/anRlc3RAZXhhbXBsZS5jb20%3D/My4xNA%3D%3D/b25lX3RpbWU%3D/VW5yZXN0cmljdGVkIChPdGhlciBBbW91bnQpLCB5b3VyIG5hbWUocykgb24gbGlzdGluZyBvZiBkb25vcnM6ICJDaHJpcyAtIHRlc3RpbmcgLSBpZ25vcmUi",
      onReadyScript: "chromy/clickAccordions.js"
    },
    {
      // clickMobileMenu causes menu hover problems in subsequent scenarios.
      label: "page apply mobile",
      url: baseUrl + "/apply",
      onReadyScript: "chromy/clickMobileMenu.js"
    }
  ];
};
