var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function getSearchParams(){var e={};if(location.search)for(var r=location.search.substring(1).split("&"),a=0;a<r.length;a++){var t=r[a].split("=");t[0]&&(e[t[0]]=t[1]||!0)}return e}function checkRedirectParam(){var e=getSearchParams();return"false"!==e.redirect}function checkReferrer(){var e=document.referrer,r=document.location.href.split("/"),a=new RegExp("^((http)s?://([a-z]+.)*("+r[2].replace(".",".")+")/?)","i");return!("referrer"in document&&e.match(a))}checkReferrer()&&checkRedirectParam()&&(document.getElementsByTagName("html")[0].className+=" show-home-splash");
}
/*
     FILE ARCHIVED ON 15:46:17 Nov 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:11:33 Dec 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.567
  exclusion.robots: 0.031
  exclusion.robots.policy: 0.02
  esindex: 0.011
  cdx.remote: 198.624
  LoadShardBlock: 223.378 (3)
  PetaboxLoader3.resolve: 110.938 (4)
  PetaboxLoader3.datanode: 92.934 (4)
  load_resource: 59.816
*/