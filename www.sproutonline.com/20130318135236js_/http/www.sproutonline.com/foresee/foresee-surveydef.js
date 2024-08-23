var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

FSR.surveydefs = [{
    name: 'browse',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 75,
        lf: 5
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
   repeatdays: 60,

   repeatoverride: false,

   altcookie: {
   },

   language: {
      locale: 'en'
   },

   exclude: {
   },

   zIndexPopup: 10000,

   ignoreWindowTopCheck: false,

   reverseButtons: false,

   ipexclude: 'fsr$ip',

   invite: {
      /* desktop */
      content: '<div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
      <div style=\"padding:0 0 8px 0;font-size:medium;font-weight:bold;\">We\'d welcome your feedback!</div>\
      <div style=\"padding:0 0 8px 0;\">Thank you for visiting our website. You have been selected to participate<br>in a brief customer satisfaction survey to let us know how we can improve<br>your experience.</div>\
      <div style=\"font-weight:bold;\">The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.</div>\
      </div></div>',
      
      /*
      content: '<div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
      <div style=\"padding:0 0 8px 0;font-size:medium;font-weight:bold;\">We\'d welcome your feedback!</div>\
      <div style=\"padding:0 0 8px 0;\">Thank you for visiting our website. You have been selected to participate<br>in a brief customer satisfaction survey to let us know how we can improve<br>your experience.</div>\
      </div></div>',
      */

      /* mobile
      content: '<div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
      <div style=\"padding:0 0 5px 0;font-size:medium;font-weight:bold;\">We\'d welcome your feedback!</div>\
      <div style=\"padding:0 0 0 0;\">Thank you for visiting our website. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.</div>\
      </div></div>',
      */
      
      /* desktop */
      footer: '<div div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//web.archive.org/web/20130318135236/http://privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',

      /* mobile
      footer: '<div div id=\"fsrcontainer\"><div style=\"float:left;width:50%;font-size:8pt;text-align:left;line-height:12px;\">Conducted by ForeSee</div><div style=\"float:right;font-size:8pt;text-align:right;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//web.archive.org/web/20130318135236/http://privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img style=\"width:50%;\" border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      */
      
      exclude: {
         local: [],
         referrer: []
      },
      include: {
         local: ['.']
      },

      /* desktop */
      width: '500',
      /* mobile
      width: {p: '260', l: '380'},
      text: {p: '100%', l: '70%'},
      */
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      timeout: 0,
      buttons: {
         accept: "Yes, I'll give feedback",
         decline: 'No thanks'
      },
      hideOnClick: false,
      /* desktop */
      css: 'foresee-dhtml.css',
      /* mobile
      css: 'foresee-dhtml-mobile.css',
      */
      hide: [],
      type: 'dhtml',
      /* desktop */
      url: 'invite.html'
      /* mobile
      url: 'invite-mobile.html'
      */
   },

   tracker: {
	  width: '690',
	  height: '415',
      timeout: 3,
      adjust: true,
      alert: {
         enabled: true,
         message: 'The survey is now available.'
      },
      url: 'tracker.html'
   },

   survey: {
      width: 690,
      height: 600
   },

   qualifier: {
      width: '690',
      height: '500',
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      buttons: {
         accept: 'Continue'
      },
      hideOnClick: false,
      css: false,
      url: 'qualifying.html'
   },

   cancel: {
      url: 'cancel.html',
      width: '690',
      height: '400'
   },

   pop: {
      what: 'survey',
      after: 'leaving-site',
      pu: false,
      tracker: true
   },

   meta: {
      referrer: true,
      terms: true,
      ref_url: true,
      url: true,
      url_params: false
   },

   events: {
      enabled: true,
      id: true,
      codes: {
         purchase: 800,
         items: 801,
         dollars: 802,
         followup: 803,
         information: 804,
         content: 805
      },
      pd: 7,
      custom: {}
   },

   pool: 50,

   previous: false,

   analytics: {
      google: false
   },

   cpps: {},

   mode: 'first-party'
};


}
/*
     FILE ARCHIVED ON 13:52:36 Mar 18, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:17:28 Aug 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.451
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 12.858
  LoadShardBlock: 128.646 (3)
  PetaboxLoader3.datanode: 173.198 (4)
  load_resource: 223.375
  PetaboxLoader3.resolve: 170.093
*/