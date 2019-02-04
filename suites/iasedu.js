/**
 * BackstopJS tests for www.ias.edu: static content.
 */

const viewports = require("./../viewports");

module.exports = function(baseUrl) {
  return {
    scenarios: [
      {
        label: "form webform",
        url: baseUrl + "/av-release-form"
      },
      {
        label: "landing support",
        url: baseUrl + "/support",
        delay: 3000
      },
      {
        label: "landing schools",
        url: baseUrl + "/schools",
        delay: 3000
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
        label: "search noresult error",
        url: baseUrl + "/search/site/godzilla"
      },
      {
        label: "IAS-224",
        url: baseUrl + "/about/administration",
        misMatchThreshold: 0.1
      },
      {
        label: "page apply",
        url: baseUrl + "/apply"
      },
      {
        label: "scholar wigderson orcid",
        url: baseUrl + "/scholars/wigderson",
        selectors: [".group-scholar-info-list"]
      },
      {
        label: "scholar callan",
        url: baseUrl + "/scholars/curtis-callan",
        selectors: [".field-visit"]
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
        url: baseUrl + "/scholars",
        delay: 3000
      },
      {
        label: "idea bernstein",
        url: baseUrl + "/ideas/2011/bernstein-quantum-story",
        selectors: ["document", ".field-author-desc"]
      },
      {
        label: "idea IAS-260",
        url: baseUrl + "/ideas/2018/dijkgraaf-rosetta-stone",
        selectors: [".field-ias-multiple-authors__authors"]
      },
      {
        label: "idea IAS-289",
        url: baseUrl + "/ideas/2009/torture-and-accountability",
        selectors: [".intro-text"]
      },
      {
        label: "idea IAS-569",
        url: baseUrl + "/ideas/akshay-venkatesh-2018-fields-medalist",
        selectors: [".group-idea-credential"],
        delay: 2000
      },
      {
        label: "idea IAS-327R",
        url: baseUrl + "/ideas/2017/exhibit-scholar-paradise"
      },
      {
        label: "idea IAS-327",
        url: baseUrl + "/ideas/2017/exhibit-scholar-paradise",
        clickSelectors: [".ias-gallery-paragraph__sole-img"],
        postInteractionWait: 3000
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
        label: "idea IAS-167",
        url: baseUrl + "/ideas/2016/nabavi-iranian-newspaper-culture"
      },
      {
        label: "idea IAS-414",
        url: baseUrl + "/ideas/persistence-gender-inequality",
        selectors: [".node-idea"]
      },
      {
        label: "idea IAS-521 shortcode data-block",
        url: baseUrl + "/ideas/life-fassin"
      },
      {
        label: "page memvisresinfo",
        url: baseUrl + "/humanresources/memvisresinfo"
      },
      {
        label: "event seminar",
        url: baseUrl + "/events/working-seminar-representation-theory",
        delay: 3000
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
        label: "scholar goddard",
        url: baseUrl + "/scholars/goddard"
      },
      {
        label: "landing give",
        url: baseUrl + "/support/give-now",
        delay: 3000
      },
      {
        label: "support friends people",
        url: baseUrl + "/support/friends/people",
        selectors: ["document", ".ias-blocks-ias-sub-menu"]
      },
      {
        label: "news strings",
        url: baseUrl + "/news/strings2016-videos"
      },
      {
        label: "news IAS-364",
        url: baseUrl + "/press-releases/john-bahcall-receives-enrico-fermi-award",
        selectors: [".cb-shortcode"]
      },
      {
        label: "news IAS-544",
        url: baseUrl + "/press-releases/digital-envelope-crash-course-modern-cryptography-subject-institute-talk-avi",
        selectors: ["#content-area"]
      },
      {
        label: "news IAS-333",
        url: baseUrl + "/news/wam-2017"
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
        clickSelectors: [".field-accordion-title"],
        postInteractionWait: 1000
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
        label: "scholar wheeler IAS-163",
        url: baseUrl + "/scholars/john-archibald-wheeler",
        selectors: [".field-appointment"]
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
        label: "landing working",
        url: baseUrl + "/campus-resources/working-ias",
        delay: 3000
      },
      {
        label: "landing about",
        url: baseUrl + "/about",
        delay: 2000
      },
      {
        label: "landing human resources",
        url: baseUrl + "/working-ias/human-resources"
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
        label: "give friends",
        url: baseUrl + "/give/friends",
        delay: 5000
      },
      {
        // clickMobileMenu causes menu hover problems in subsequent scenarios.
        label: "page apply mobile",
        url: baseUrl + "/apply",
        clickSelectors: [".mobile-menu-btn"],
        viewports: [
          viewports.phone,
          viewports.tablet_vertical
        ],
        postInteractionWait: 1000
      }
    ],
  };
};
