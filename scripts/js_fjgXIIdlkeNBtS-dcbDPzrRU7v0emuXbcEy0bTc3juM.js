var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
;
/**
 * @file
 * Adobe Pass javascript API.
 */
;
(function($, window, Drupal) {

  /**
   * @doc module
   * @name tve
   * @description
   * TVE global namespace
   */
  var tve = (window.tve = window.tve || {});

  /**
   * @doc object
   * @name tve.adobePass
   */
  var instance = tve.adobePass || (tve.adobePass = {});

  /**
   * @doc property
   * @name tve.adobePass:exists
   * @type {boolean}
   * @description
   * Use this variable to define if the service is already created.
   */
  instance.exists = false;

  /**
   * @doc function
   * @name tve.adobePass:getInstance
   *
   * @description initiates Adobe Pass service with the provided configuration and returns the service instance.
   *              tve.adobePass is exposed as singleton. getInstance recall returns the previously instantiated instance.
   *
   * @param {Object=} config for new instance.
   * @returns {tve.adobePass.AdobePassConnector} Adobe Pass service instance.
   */
  instance.getInstance = $.proxy(function(config) {

    // tve.adobePass instance is singleton
    if (instance.exists) {
      return instance;
    }
    else {

      // Also extending the origin object(tve.adobePass).
      // So you can use the new reference returned by method or continue using tve.adobePass.
      $.extend(this, new AdobePassConnector(config));
      // Mark service as created.
      this.exists = true;

      // Returns newly created singleton.
      return this;
    }
  }, instance);

  /**
   * @doc function
   * @name tve.adobePass:AdobePassConnector
   * @constructor
   * @param {Object=} config configuration for Adobe Pass service instance.
   * @description
   * ##Default config which can be extended with your options:
   * * `accessEnablerId` - {@type string} Access Enabler swf object id
   * * `mvpdFrameId` - {@type string} MVPD login-iframe id
   * * `adobePassIframeContainerId` - {@type string} MVPD login-iframe container id.
   *                                                 Iframe will be appended to this wrapper.
   * * `authNCheckedSuccessCallback` - {@type function({
   *                                      isAuthenticated: {@type boolean},
   *                                      mvpdId: {@type string | null
   *                                   }})} callback will be fired after AccessEnabler getAuthentication check.
   *                                   It becomes user authentication status object with mvpdId and auth-status.
   * * `authNCheckedFailedCallback` - {@type function} will be fired in case of any error while AccessEnabler processes.
   *                                                   1. embed object creation failed
   *                                                   2. timeout expired before response
   *
   */
  function AdobePassConnector(config) {
    var NONE_URL = 'none',
      EXPIRED_DATE = -1,
      TRUE_FLAG = '1';

    var basePath = (Drupal && Drupal.settings.basePath) || '/',
      noop = function() {},

      /**
       * Analytics obj, uses tveAnalytics if module is enabled.
       * Implements the following interface {
       *   trackMvpdSelected: function({Object=}),
       *   trackPassSignIn: function({Object=}),
       *   trackAuthentication: function({Object=})
       * }
       */
      tveAnalytics = tve.analytics ? {
        trackMvpdSelected: tve.analytics.trackAuthEvents.bind(tve.analytics, tve.analytics.events.MVPD_SELECTED),
        trackPassSignIn: tve.analytics.trackAuthEvents.bind(tve.analytics, tve.analytics.events.PASS_SIGNIN),
        trackAuthentication: tve.analytics.trackAuthEvents.bind(tve.analytics, tve.analytics.events.AUTHN_TRACK)
      } : {
        trackMvpdSelected: noop,
        trackPassSignIn: noop,
        trackAuthentication: noop
      },

      // Default configuration, can be extended by user configuration.
      defaults = {
        accessEnablerId: 'accessEnabler',
        mvpdFrameId: 'mvpdframe',
        adobePassIframeContainerId: 'adobePassIframeContainer',

        authNCheckedSuccessCallback: noop,
        authNCheckedFailedCallback: noop,
        openAdobePassFrame: noop,

        cookie: {
          path: basePath,
          user: 'nbcu_user_settings',
          loginPending: 'nbcu_ap_loginpending',
          adobePassUserGuid: 'instance_user_guid'
        },

        // Using tve.mvpdService with default configuration if it's not overriden.
        mvpdService: tve.mvpdService && tve.mvpdService.getInstance() || {

          // We are assuming getMvpd to return object which implements jQuery Promise API
          getMvpd: function() {
            return $.Deferred().promise();
          }
        },

        logger: {
          useWatchDog: true,
          url: basePath + 'adobe-pass/log',

          // Your custom logger callback.
          log: noop,
          messages: {
            INITIALIZATION_ERROR: Drupal.t('AccessEnabler Initialization Failed'),
            SWF_OBJECT_FAILURE: Drupal.t('swf object creation failed'),
            TIMEOUT: Drupal.t('Adobe Pass authn/authz process could not be completed due to some technical Issue'),
            NON_ENTITLED_MVPD: Drupal.t('User is authenticated with non-entitled MVPD')
          },
          errorLvl: {
            INFO: 'info',
            WARNING: 'warning',
            ERROR: 'error'
          }
        },

        analytics: tveAnalytics
      },

      // tve.adobePass events listener, for pub/sub functionality.
      pubSub = $({}),
      selectedProvider, redirect, authzCallback, metadataStatusCallback, mvpdWindow, aeCheckTimeoutId, accessEnabler;

    // Constructing tve.adobePass instance. Exposing API, embedding swf.
    init.call(this);

    function init() {
      var getUserStatus = function() {
          var userCookie;

          try {
            userCookie = JSON.parse($.cookie(config.cookie.user));
          }
          catch(e) {
            logError({
              errorId: e.name,
              message: e.message
            });
          }

          return userCookie;
        },
        userCookie;

      this.config = config = $.extend(defaults, Drupal.settings.adobePass, config);

      this.ACCESS_ENABLER_ID = config.accessEnablerId;
      this.events = {
        AUTHN_CHECKED: 'authChecked.adobePass'
      };

      // Safely parsing user cookie.
      userCookie = getUserStatus();

      // Exposing user authentication status as global properties. This data can be approved only after
      // getAuthentication in your authNCheckedSuccessCallback, but properties will be also updated by tve.adobePass.
      this.isAuthenticated = userCookie && userCookie.authn;
      this.currentProvider = userCookie && userCookie.selectedProvider;

      // Exposing public methods.
      publishApi(this);

      // Embedding AccessEnabled swg, adding handler.
      // Initialization entry point.
      loadAccessEnabler();
    }

    /**
     * Embeds AccessEnabler swf object into specific container.
     *
     * @param {Object} settings
     *    Configuration object exposed from adobe_pass.module.
     */
    function loadAccessEnabler() {
      var params = {
          menu: 'false',
          quality: 'low',
          AllowScriptAccess: 'always',
          swliveconnect: 'true',
          wmode: 'transparent',
          align: 'middle'
        },
        attributes = {
          id: config.accessEnablerId,
          name: config.accessEnablerId,
          style: "position: fixed; z-index: 9999; display: inline-block; " +
            "visibility: visible; left: 0px !important; top: 0px !important;"
        },
        ACCESS_ENABLER_CONTAINER_ID = 'contentAccessEnabler',
        container = document.createElement('div');
      container.id = ACCESS_ENABLER_CONTAINER_ID;
      
      // Avoids loading access enabler swf file if flash is disabled.
      if (!swfobject.hasFlashPlayerVersion(config.adobePassFlashVer)) {
        config.authNCheckedFailedCallback(false);
        return;
      }

      $(document.body).append(container);

      swfobject.embedSWF(
        // AccessEnabler.swf location.
        config.adobePassAccessEnablerLoc,
        // Container ID to embed AccessEnabled.swf.
        ACCESS_ENABLER_CONTAINER_ID,
        // Object size 1pxx1px.
        1, 1,
        // Minimum flash version.
        config.adobePassFlashVer,
        // XiSwfUrlStr.
        null,
        // Flash variables.
        null,
        // Parameters.
        params,
        // Object attributes.
        attributes,
        // Onload callback.
        accessLoadedCheck
      );
    }

    /**
     * Creates timeout for swf loaded event.
     *
     * Logs an error, if timeout expired before onload event.
     */
    function accessLoadedCheck(status) {

      // Checking for swf object successfull creation
      if (status.success) {

        // Setting timeout for AccessEnabler init process. Timeout is configured via admin. Default is 30seconds.
        aeCheckTimeoutId = setTimeout(function() {
          if (accessEnabler == null) {
            logError({
              message: config.logger.messages.INITIALIZATION_ERROR
            });
          }

          config.authNCheckedFailedCallback(config.logger.messages.TIMEOUT);
        }, config.adobePassTimeoutLength);
      }
      else {
        logError({
          message: config.logger.messages.SWF_OBJECT_FAILURE
        });
        config.authNCheckedFailedCallback(status);
      }
    }

    /**
     * Clears accessLoadedCheck timeout.
     */
    function stopAECheck() {
      if (aeCheckTimeoutId) {
        clearTimeout(aeCheckTimeoutId);
        aeCheckTimeoutId = null;
      }
    }

    /**
     * Initiates the check authentication process on load of the page.
     */
    function initiateCheckAuthProcess() {
      stopAECheck();
      accessEnabler = document.getElementById(config.accessEnablerId);

      // Logging error and exit if AccessEnabler is not found.
      if (accessEnabler == null) {
        logError({
          message: config.logger.messages.INITIALIZATION_ERROR
        });

        return;
      }

      // Enabler configuration.
      accessEnabler.setProviderDialogURL(NONE_URL);
      accessEnabler.setRequestor(config.adobePassRequestorId, null, config.refreshlessConfig);
      accessEnabler.checkAuthentication();

      return this;
    }

    /**
     * Start the authentication flow if no valid authentication token
     * is found in the local shared object.
     */
    function getAuthentication(redirectUrl) {
      redirect = redirectUrl || document.URL || window.location.href;
      accessEnabler.getAuthentication(redirect);

      return this;
    }

    /**
     * Start the authorization flow.
     */
    function getAuthorization(resource, callback) {
      authzCallback = callback;
      accessEnabler.getAuthorization(resource);

      return this;
    }

    /**
     * Checks if the current user has authorization to view the asset.
     *
     * @param {string} resourceID
     * @param {function():} callback
     * @returns {?Object} chains tve.adobePass if called in it's context.
     */
    function checkAuthorization(resourceID, callback) {
      authzCallback = callback;
      accessEnabler.checkAuthorization(resourceID);

      return this;
    }

    /**
     * Performs authentication with the provided MVPD ID.
     * You can pass optional redirectUrl to perform redirect after login process.
     * @param {string } id the MVPD id to authenticate.
     * @param {string=} redirectUrl the optional redirect url to go to after login process.
     *
     * @return {?Object} chains tve.adobePass instance if called in this context.
     */
    function login(id, redirectUrl) {
      getAuthentication(redirectUrl);
      setSelectedProvider(id);

      return this;
    }

    /**
     * Clear all authentication and authorization for the client.
     */
    function logout() {
      _deleteCookie();
      accessEnabler.logout();

      return this;
    }

    /**
     * Set the ID of the selected provider.
     *
     * @param providerId A provider identifier.
     */
    function setSelectedProvider(providerId) {
      var args = {
          'authnStatus': 'Not Authenticated',
          'mvpd_id': providerId
        },
        selectedProviderInfo = config.mvpdService.getMvpd(providerId);

      if (selectedProviderInfo) {
        selectedProviderInfo.then(function(data) {
            if (data['is_new_window'] == TRUE_FLAG) {
              createMVPDWindow();
            }
          }, null)
          .always(setProvider);
      }
      else {
        setProvider();
      }

      function setProvider() {
        aeCheckTimeoutId = setTimeout(function() {
          if (!mvpdWindow) {
            logError({
              message: config.logger.messages.TIMEOUT
            });
          }

          stopAECheck();
        }, config.adobePassTimeoutLength);

        config.analytics.trackMvpdSelected(args);
        $.cookie(config.cookie.loginPending, TRUE_FLAG, {
          expires: 1,
          path: config.cookie.path
        });
        selectedProvider = providerId;
        accessEnabler.setSelectedProvider(providerId);
      }

      return this;
    }

    /**
     * Find the currently selected provider.
     * @return An object with two properties:
     * - MVPD: contains the currently selected provider ID, or null if no MVPD was selected;
     * - AE_State: contains the Access Enabler's current authentication status for the user,
     *             one of 'New User', 'User Not Authenticated' or 'User Authenticated')
     */
    function getSelectedProvider() {
      return accessEnabler.getSelectedProvider();
    }

    /**
     * Perform the post auth check actions.
     */
    function performPostAuthCheckActions(isAuthenticated) {
      var selected = getSelectedProvider();

      isAuthenticated = !!isAuthenticated;

      if (isAuthenticated) {
        // Adding a check to avoid user getting access to the site using shared token for non entitled mvpds.
        config.mvpdService.getMvpd(selected.MVPD)
          .then(function(mvpdConfig) {
            if (mvpdConfig) {
              setAuthCookies(isAuthenticated, selected.MVPD);
              runCallback();
            }
            else {
              trackNonEntitledMvpd();
            }
          }, function(error, status) {
            var errorMsg = status || config.logger.messages.NON_ENTITLED_MVPD;

            if (status) {
              runCallback();
            }
            else {
              trackNonEntitledMvpd();
            }

            logError({message: errorMsg});
          });
      }
      else {
        _deleteCookie();
        
        if (selected.MVPD != null) {
          accessEnabler.setSelectedProvider(null);
        }
        runCallback();
      }

      function runCallback(nonEntitledMvpd) {
        var status;

        instance.isAuthenticated = nonEntitledMvpd ? false : isAuthenticated,
        instance.currentProvider = nonEntitledMvpd ? null : selected.MVPD;

        status = {
          isAuthenticated: instance.isAuthenticated,
          mvpdId: instance.currentProvider
        };

        instance.publish(instance.events.AUTHN_CHECKED, status);
        config.authNCheckedSuccessCallback(status);
      }

      function trackNonEntitledMvpd() {
        logout();
        runCallback(true);
      }
    }

    function setAuthCookies(isAuthenticated, providerId) {
      _setCookie({
        authn: isAuthenticated,
        selectedProvider: providerId
      });
    }

    function cancelAuthentication() {
      var mvpdFrame = document.getElementById(config.mvpdFrameId);
      accessEnabler.setProviderDialogURL(NONE_URL);

      stopAECheck();

      if (accessEnabler.getSelectedProvider().MVPD != null) {
        accessEnabler.setSelectedProvider(null);
      }

      if (mvpdFrame) {
        mvpdFrame.src = 'about:blank';
      }
      mvpdWindow = null;
    }

    /**
     * Creates a iframe from mvpd login screen to load
     */
    function createIframe(width, height) {
      var selected = getSelectedProvider(),
        args = {
          'authnStatus' : 'Not Authenticated',
          'mvpd_id' : selected.MVPD
        };
      // This call needs to be triggered for new window/iframe workflow.
      config.analytics.trackPassSignIn(args);

      // if mvpd is opened in new window
      if (mvpdWindow) {
        mvpdWindow.resizeTo(width,height);
        return false;
      }

      stopAECheck();
      config.openAdobePassFrame();
      create();

      function create() {
        var container = document.getElementById(config.adobePassIframeContainerId),
          iframe = document.getElementById(config.mvpdFrameId);

        // Create the iframe to the specified width and height for the MVPD login page.
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.id = iframe.name = config.mvpdFrameId;
          iframe.style.width = width + 'px';
          iframe.style.height = height + 'px';
        }

        container.appendChild(iframe);
        // Force the name into the DOM since it is still not refreshed, for IE.
        window.frames[config.mvpdFrameId].name = config.mvpdFrameId;
      }
    }

    /**
     * Destroy iframe opened for MVPD login.
     */
    function destroyIframe() {
      config.destroyIframe();
    }

    /**
     * MVPD Login screen in a new window rather than iframe workflow.
     */
    function createMVPDWindow() {
      mvpdWindow = window.open(null, config.mvpdFrameId, 'width=300, height=300', true);
      setTimeout(_checkClosed, 200);
    }

    /**
     *  Reopens the mvpd login screen if the user has kept the login screen open
     */
    function reopenMVPDWindow() {
      if (mvpdWindow && !mvpdWindow.closed) {
        mvpdWindow.focus();
        return true;
      }
      else{
        return false;
      }
    }

    /**
     * Watch when the Pop-up window is closed (either by the user or by finishing the authentication flow).
     */
    function _checkClosed() {
      try {
        if (mvpdWindow && mvpdWindow.closed) {
          window.location.href = redirect;
        }
        else {
          setTimeout(_checkClosed, 200);
        }
      }
      catch (error) {

      }
    }

    /**
     * Returns the adobe pass GUID.
     */
    function getUserGuid() {
      return $.cookie(config.cookie.adobePassUserGuid);
    }

    /**
     * Send Tracking Data function implementation
     * @public
     */
    function sendAuthnEvents(trackingEventType, trackingData) {
      var AUTH_DETECTION_EVENT = 'authenticationDetection';

      // Getting the selected mvpd id from tracking data since after authn success page gets reloaded.
      if (trackingData[0] && trackingEventType === AUTH_DETECTION_EVENT) {
        selectedProvider = trackingData[1];
      }
      var args = {'authnStatus' : trackingData[0] ? 'Authenticated' : 'Not Authenticated', 'mvpd_id' : selectedProvider };
      $.cookie(config.cookie.adobePassUserGuid, trackingData[2], { path: config.cookie.path });

      if (trackingEventType === AUTH_DETECTION_EVENT && $.cookie(config.cookie.loginPending) != null) {
        config.analytics.trackAuthentication(args);
        $.cookie(config.cookie.loginPending, '', { expires: EXPIRED_DATE, path: config.cookie.path });
      }
    }

    /**
     * Logs the error message into drupalis watch dog
     */
    function logError(error) {
      var loggerConfig = config.logger;

      error.level = error.level || loggerConfig.errorLvl.ERROR;

      if (error.level == 'info') {
        return false;
      }

      if (loggerConfig.useWatchDog) {
        $.ajax({
          type: 'POST',
          url: loggerConfig.url,
          dataType: 'json',
          data: {
            error: error
          }
        });
      }

      if (typeof loggerConfig.log === 'function') {
        loggerConfig.log(error);
      }

      return error;
    }

    /**
     * Sets adobe cookies.
     *
     * @param input parameters
     */
    function _setCookie(input) {
      $.cookie(config.cookie.user, JSON.stringify(input), {
        path: config.cookie.path
      });
    }

    /**
     * Deletes adobe auth cookies.
     */
    function _deleteCookie() {
      $.cookie(config.cookie.user, '', {
        expires: EXPIRED_DATE,
        path: config.cookie.path
      });
    }

    /**
     * Process the recieved metadata from adobe.
     */
    function processUserMetadata(key, encrypted, data) {
      var callbackFunction = (typeof metadataStatusCallback == 'function') ?
          metadataStatusCallback :
          eval(metadataStatusCallback);

      callbackFunction(key, encrypted, data);
    }

    /**
     * Gets user metadata from adobe.
     */
    function getUserMetadata(key, callback) {
      metadataStatusCallback = callback;
      accessEnabler.getMetadata(key);
    }

    /**
     * implementation for authz success.
     */
    function setToken(requestedResourceID, token) {
      var callbackFunction = (typeof authzCallback == 'function') ? authzCallback : eval(authzCallback);
      callbackFunction(true, {requestedResourceID: requestedResourceID, token: token});
    }

    /**
     * implementation for authz failure.
     */
    function tokenRequestFailed(requestedResourceID, requestErrorCode, requestErrorDetails) {
      var callbackFunction = (typeof authzCallback == 'function') ? authzCallback : eval(authzCallback);

      callbackFunction(false, {
        requestedResourceID: requestedResourceID,
        requestErrorCode: requestErrorCode,
        requestErrorDetails: requestErrorDetails
      });
    }

    /**
     * Publish/subscribe implementation for tve.adobePass obj
     * @returns {tve.adobePass.subscribe}
     */
    function subscribe() {
      pubSub.on.apply(pubSub, arguments);
      return this;
    }

    function unsubscribe() {
      pubSub.off.apply(pubSub, arguments);
      return this;
    }

    function publish() {
      pubSub.trigger.apply(pubSub, arguments);
      return this;
    }

    function publishApi(instance) {
      $.extend(instance, {
        'initiateCheckAuthProcess': initiateCheckAuthProcess,
        'stopAECheck': stopAECheck,
        'createIframe': createIframe,
        'destroyIframe' : destroyIframe,
        'performPostAuthCheckActions': performPostAuthCheckActions,
        'getAuthentication': getAuthentication,
        'login': login,
        'logout': logout,
        'setSelectedProvider': setSelectedProvider,
        'cancelAuthentication': cancelAuthentication,
        'sendAuthnEvents': sendAuthnEvents,
        'reopenMVPDWindow': reopenMVPDWindow,
        'getUserGuid': getUserGuid,
        'getUserMetadata': getUserMetadata,
        'processUserMetadata': processUserMetadata,
        'setToken': setToken,
        'tokenRequestFailed': tokenRequestFailed,
        'getAuthorization': getAuthorization,
        'checkAuthorization': checkAuthorization,
        'logError': logError,
        'subscribe': subscribe,
        'unsubscribe': unsubscribe,
        'publish': publish
      });
    }
  }

  /**
   * Global Callbacks
   */

  /**
   * Called when the Access Enabler is successfully loaded and initialized.
   * This is the entry point for your communication with the AE.
   */
  window.swfLoaded = function() {
    accessEnabler.bind('errorEvent', 'tveAdobePassLogError');
    tve.adobePass.initiateCheckAuthProcess();
  };

  /**
   * Callback that receives the list of available providers for the current requestor ID.
   */
  window.displayProviderDialog = function(providers) {
    tve.adobePass.stopAECheck();
  };

  /**
   * Callback that creates an iFrame to use for login if the MVPD requires it.
   */
  window.createIFrame = function(width, height) {
    tve.adobePass.createIframe(width, height);
  };

  /**
   * accessEnabler `errorEvent` handler
   * @returns {*}
   */
  window.tveAdobePassLogError = function() {
    return tve.adobePass.logError.apply(null, arguments);
  };

  /**
   * Callback that destroys an MVPD's iFrame.
   */
  window.destroyIFrame = function() {
    tve.adobePass.destroyIframe();
  };

  /**
   * Callback that receives the result of a successful authorization token request.
   * Your implementation sets the authorization token.
   */
  window.setToken = function(requestedResourceID, token) {
    tve.adobePass.setToken(requestedResourceID, token);
  };

  /**
   * Callback that indicates a failed authorization token request.
   * @param requestedResourceID The resource ID for which the token request failed.
   * @param requestErrorCode  The error code for the failure.
   * @param requestErrorDetails The custom error message that describes the failure.
   */
  window.tokenRequestFailed = function(requestedResourceID, requestErrorCode, requestErrorDetails) {
    tve.adobePass.tokenRequestFailed(requestedResourceID, requestErrorCode, requestErrorDetails);
  };

  /** Callback that customizes the size of the provided selector dialog. **/
  window.setMovieDimensions = function(width, height) {
    //TODO: Set the dimension for the provider selector.
  };

  /**
   * Callback that indicates the authentication status for the user.
   *  @param isAuthenticated Authentication status is one of 1 (Authenticated) or 0 (Not authenticated).
   *  @param errorCode Any error that occurred when determining the authentication status,
   *                   or an empty string if no error occurred.
   */
  window.setAuthenticationStatus = function(isAuthenticated, errorCode) {
    tve.adobePass.performPostAuthCheckActions(isAuthenticated, errorCode);
  };

  /**
   * Callback that sends a tracking data event and associated data
   *  @param trackingEventType The type of event that triggered this tracking event
   *  @param trackingData An array of all the tracking data/variables associated with the tracking event
   *
   * There are three possible tracking events types:
   *    authorizationDetection    - any time an authorization token request returns
   *    authenticationDetection    - any time an authentication check occurs
   *    mvpdSelection                - when the user selects an mvpd in the mvpd selection dialog
   * trackingData values:
   * For trackingEventType 'authorizationDetection'
   *     [0] Whether the token request was successful [true/false]
   *       and if true:
   *       [1] MVPD ID [string]
   *       [2] User ID (md5 hashed) [string]
   *       [3] Whether it was cached or not [true/false]
   *
   * For trackingEventType 'authenticationDetection'
   *     [0] Whether the token request was successful (false)
   *       and if successful is true:
   *       [1] MVPD ID
   *       [2] User ID (md5 hashed)
   *       [3] Whether it was cached or not (true/false)
   *
   * For trackingEventType 'mvpdSelection'
   *       [0] MVPD ID
   *
   * MVPD Example: MVPD ID for Comcast is 'Comcast'
   */
  window.sendTrackingData = function(trackingEventType, trackingData) {
    tve.adobePass.sendAuthnEvents(trackingEventType,trackingData);
  };

  /**
   * Called when a get-metadata request has completed successfully.
   * Passes back property key for the requested value, an array containing the resource ID for an AuthZ
   * token TTL (or null for any other key), and the property value retrieved from Access Enabler.
   *
   * @param key the Metadata key for which a value has been requested
   * @param encrypted true if value is encrypted
   * @param value the values associated with the Metadata key or null if no value is associated with the key.
   */
  window.setMetadataStatus = function(key, encrypted, value) {
    tve.adobePass.processUserMetadata(key, encrypted, value);
  };

})(jQuery, this, this.Drupal);
;
;
(function($, window) {
  'use strict';

  var getTimestamp = function() {
    return Date.now ? Date.now() : Number(new Date);
  };

  function getFeature (name) {
    try {
      if (window[name] !== null) {
        return window[name];
      }
    }
    catch (e) {}
    return null;
  }

  // LocalStorage wrapper to provide MVPD data cache.
  var appCache = {
    storage: getFeature('localStorage') || getFeature('sessionStorage'),
    get: function(key) {
      var data;

      try {
        data = JSON.parse(this.storage.getItem(key));
      }
      catch(e) {}

      return data;
    },
    set: function(key, value) {
      try {
        this.storage.setItem(key, JSON.stringify(value));
      }
      catch(e) {}

      return this;
    },
    remove: function(key) {
      var value;

      try {
        value = JSON.parse(this.storage.getItem(key));
        this.storage.removeItem(key);
        return value;
      }
      catch(e) {}

      return value;
    }
  };

  // Safe initialization for global tve.mvpdService namespace
  var tve = (window.tve = window.tve || {}),
    instance = tve.mvpdService || (tve.mvpdService = {exists: false});

  instance.getInstance = $.proxy(function(config) {
    if (instance.exists) {
      return instance;
    }
    else {
      $.extend(this, new MvpdService(config));
      this.exists = true;

      return this;
    }
  }, instance);

  function MvpdService(config) {
    var DEFAULT_PLATFORM_KEY = 'pc',
      mvpdSet = {};

    // creating a closure to store memorized search results
    var getProviderById = (function() {
      var savedProviders = {};

      /**
       * @doc function
       * @description returns provider found by id
       *
       * @param {string} id of the provider
       * @param {string} platformId is a platform id to look for in cache default is `pc`
       *
       * @returns  {Object|null}
       */
      return function getProviderById(id, platformId) {
        var result, platformKey, platformFromMemory, context;

        if (!id) {
          return null;
        }

        result = null;
        platformKey = getPlatformKey(platformId);
        platformFromMemory = savedProviders[platformKey] = savedProviders[platformKey] || {};

        // Returns provider from memory.
        if (result = platformFromMemory[id]) {
          return result;
        }

        context = mvpdSet[platformKey] && mvpdSet[platformKey].all;

        if (!context || !context.length) {
          return null;
        }

        $.each(context, function(index, provider) {

          // mvpd_id is a unique field.
          if (provider.mvpd_id === id) {

            // semorizing found provider
            platformFromMemory[id] = result = provider;
            // stop looping
            return false;
          }
        });

        return result;
      };
    })();

    this.config = config = $.extend({

      path: getBasePath() + 'mvpd',
      // 10 minutes cache valid timeout (in milliseconds).
      cacheTimeout: 600000,
      logError: function() {}

    }, config);

    this.getMvpd = (function() {
      var requestStack = {};

      function loadFromCache(platformConfig) {
        var platformKey = getPlatformKey(platformConfig && platformConfig.platformId),
          platformProviders = mvpdSet[platformKey] = appCache.get(platformKey);

        if (platformProviders && !isCacheValid(platformProviders.timestamp)) {
          appCache.remove(platformKey);
          mvpdSet[platformKey] = null;
        }
      }

      function getMvpd(id, platformConfig) {
        var getFirstIfIdProvided = getSecondIfTrue(id),
          dataKey = getFirstIfIdProvided('all', id),
          pendingRequest = requestStack[dataKey],
          fetchFromMvpdServiceDirectly = Boolean(platformConfig),
          platformMvpdUrl, platformId, providerInfo, platformKey;

        if (fetchFromMvpdServiceDirectly) {
          platformMvpdUrl = platformConfig.url;
          platformId = platformConfig.platformId;
        }
        else {
          platformMvpdUrl = config.path;
        }

        platformKey = getPlatformKey(platformId);
        providerInfo = getFirstIfIdProvided(mvpdSet[platformKey], getFuncWrap(getProviderById, [id, platformId]));

        if (getFirstIfIdProvided(providerInfo && providerInfo.fullList, providerInfo)) {
          return $.when(providerInfo);
        }
        else if (pendingRequest) {
          return pendingRequest;
        }
        else {
          var deferred = $.Deferred(),
            url = platformMvpdUrl + getFirstIfIdProvided('', '/' + id);

          $.get(url).then(function(data) {
              var mvpdData;

              if ('status' in data && !data.status) {
                deferred.reject(data);
              }
              else {
                mvpdData = getFirstIfIdProvided(getFuncWrap(processProviders, [data, platformId]), data.mvpd);
                deferred.resolve(mvpdData);

                if (id) {
                  mvpdSet[platformKey] = mvpdSet[platformKey] || {
                    all: [],
                    fullList: false,
                    timestamp: getTimestamp()
                  };

                  mvpdSet[platformKey].all.push(mvpdData);
                  appCache.set(platformKey, mvpdSet[platformKey]);
                }
                else {
                  mvpdData.timestamp = getTimestamp();
                  mvpdData.fullList = true;
                  appCache.set(platformKey, mvpdData);
                }
              }
            }, function(response) {
              config.logError.apply(config, arguments);
              deferred.reject.apply(deferred, arguments);
            })
            .always(function() {
              delete requestStack[dataKey];
            });

          return requestStack[dataKey] = deferred.promise();
        }
      }

      return function(id, platformConfig) {
        loadFromCache(platformConfig);
        return getMvpd.call(this, id, platformConfig);
      };
    })();

    this.addPlatform = function(config) {
      var self = this;

      this.platforms = this.platforms || {};

      return this.platforms[config.platformId] = this.platforms[config.platformId] || {
        url: config.url,
        getMvpd: function(id) {
          return self.getMvpd(id, config);
        }
      };
    };

    function isFunction(value) {
      return typeof value == 'function';
    }

    function existy(value) {
      return value != null;
    }

    function getFuncWrap(func, args) {
      if (!isFunction(func)) {
        throw new TypeError;
      }

      return function() {
        return func.apply(this, args);
      };
    }

    function getPlatformKey(suffix) {
      var MVPD_LIST_KEY = 'tveMvpdList';

      return [MVPD_LIST_KEY, '.', suffix || DEFAULT_PLATFORM_KEY].join('');
    }

    function getSecondIfTrue(value) {
      return function(options) {
        var result = (arguments.length > 1 ? arguments : options)[Number(existy(value))];
        return isFunction(result) ? result() : result;
      };
    }

    /**
     * @doc function
     * @description Returns base path. Safely parses Drupal.settings or use root '/' path
     * @returns {string}
     */
    function getBasePath() {
      var drupalSettings = (Drupal && Drupal.settings) || {};

      return drupalSettings.basePath || '/';
    }

    /**
     * @doc function
     * @description Compares current timestamp with provided cache timestamp.
     *              Returns true if diff between timestamps is lower than configured timeout
     *
     * @param {number} timestamp cache timestamp
     *
     * @returns {boolean}
     */
    function isCacheValid(timestamp) {
      return getTimestamp() - timestamp < config.cacheTimeout;
    }

    function processProviders(providers, converterId) {
      var push = Array.prototype.push,
        concat = Array.prototype.concat,
        coverters = {
          'false': function(providers) {
            var processedProviders = [];
            // Flatten featured and non-featured arrays with apply with apply.
            push.apply(processedProviders, concat.apply([], [providers.featured, providers.not_featured]));

            // Sorting providers list by titles to display alphabetically sorted in dropdown of all providers.
            // Using Array.prototype.sort.
            processedProviders.sort(alphabeticalSort);

            return {
              all: processedProviders,
              featured: providers.featured
            };
          },
          'true': function(providers) {
            var processedProviders = [],
              featuredProviders = [],
              mappingRules = {
                mvpd: 'mvpd_id',
                title: 'title',
                is_new_window: 'isNewWindow',
                pickerImage: 'mvpd_logo',
                pickerImage_2x: 'mvpd_logo_2x'
              },
              isMvpdFeatured = function(mvpd) {
                // not featured tier is 2
                var FEATURED_MVPD_TIER_VALUE = 1;

                return mvpd.tier === FEATURED_MVPD_TIER_VALUE;
              },
              isFeatured, current;

            providers = providers.mvpdWhitelist;

            for (var i = 0, length = providers.length; i < length; i++) {
              current = providers[i];
              isFeatured = isMvpdFeatured(current);

              current = processObjectFields(current, mappingRules);

              processedProviders.push(current);
              if (isFeatured) {
                featuredProviders.push(current);
              }
            }

            // Sorting providers list by titles to display alphabetically sorted in dropdown of all providers.
            // Using Array.prototype.sort.
            processedProviders.sort(alphabeticalSort);

            return {
              all: processedProviders,
              featured: featuredProviders
            };
          }
        };

      if (!providers) return;

      /**
       * @doc function
       * @description Comparator for Array.sort which sorts object by `title` key
       *              `title` is lowercased before comparison
       *
       * @param {Object} a is the first object in comparison
       * @param {Object} b is the second object in comparison
       *
       * @returns {number}
       */
      function alphabeticalSort(a, b) {
        var aTitleNormalized = a.title.toLowerCase(),
          bTitleNormalized = b.title.toLowerCase();

        if (aTitleNormalized > bTitleNormalized) {
          return 1;
        }
        else if (aTitleNormalized < bTitleNormalized) {
          return -1;
        }
        else {
          return 0;
        }
      }

      /**
       * @doc function
       * @description Processes the object and formates the output
       *
       * @param {Object} obj initial object to be mapped
       * @param {Object} mappingRules mapping rules with the following style {key: value}
       *                 key is the new object key for the value field in the obj
       *
       * @throws {TypeError} if obj is null or undefined
       * @returns {Object}
       */
      function processObjectFields(obj, mappingRules) {
        var mappedResult = {};

        if (!existy(obj)) {
          throw new TypeError;
        }
        for (var key in obj) {
          if (mappingRules.hasOwnProperty(key)) {
            mappedResult[mappingRules[key]] = obj[key];
          }
          else {
            mappedResult[key] = obj[key];
          }
        }

        return mappedResult;
      }

      // Returns object with limited featured mvpd-list and full list of entitled mvpds.
      return providers ? coverters[existy(converterId)](providers) : undefined;
    }
  }

})(jQuery, this);
;
(function ($) {

/**
 * Provides Ajax page updating via jQuery $.ajax (Asynchronous JavaScript and XML).
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with #ajax['path'] and
 * #ajax['wrapper'] properties. If set, this file will automatically be included
 * to provide Ajax capabilities.
 */

Drupal.ajax = Drupal.ajax || {};

Drupal.settings.urlIsAjaxTrusted = Drupal.settings.urlIsAjaxTrusted || {};

/**
 * Attaches the Ajax behavior to each Ajax form element.
 */
Drupal.behaviors.AJAX = {
  attach: function (context, settings) {
    // Load all Ajax behaviors specified in the settings.
    for (var base in settings.ajax) {
      if (!$('#' + base + '.ajax-processed').length) {
        var element_settings = settings.ajax[base];

        if (typeof element_settings.selector == 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).each(function () {
          element_settings.element = this;
          Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
        });

        $('#' + base).addClass('ajax-processed');
      }
    }

    // Bind Ajax behaviors to all items showing the class.
    $('.use-ajax:not(.ajax-processed)').addClass('ajax-processed').each(function () {
      var element_settings = {};
      // Clicked links look better with the throbber than the progress bar.
      element_settings.progress = { 'type': 'throbber' };

      // For anchor tags, these will go to the target of the anchor rather
      // than the usual location.
      if ($(this).attr('href')) {
        element_settings.url = $(this).attr('href');
        element_settings.event = 'click';
      }
      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
    });

    // This class means to submit the form to the action using Ajax.
    $('.use-ajax-submit:not(.ajax-processed)').addClass('ajax-processed').each(function () {
      var element_settings = {};

      // Ajax submits specified in this manner automatically submit to the
      // normal form action.
      element_settings.url = $(this.form).attr('action');
      // Form submit button clicks need to tell the form what was clicked so
      // it gets passed in the POST request.
      element_settings.setClick = true;
      // Form buttons use the 'click' event rather than mousedown.
      element_settings.event = 'click';
      // Clicked form buttons look better with the throbber than the progress bar.
      element_settings.progress = { 'type': 'throbber' };

      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
    });
  }
};

/**
 * Ajax object.
 *
 * All Ajax objects on a page are accessible through the global Drupal.ajax
 * object and are keyed by the submit button's ID. You can access them from
 * your module's JavaScript file to override properties or functions.
 *
 * For example, if your Ajax enabled button has the ID 'edit-submit', you can
 * redefine the function that is called to insert the new content like this
 * (inside a Drupal.behaviors attach block):
 * @code
 *    Drupal.behaviors.myCustomAJAXStuff = {
 *      attach: function (context, settings) {
 *        Drupal.ajax['edit-submit'].commands.insert = function (ajax, response, status) {
 *          new_content = $(response.data);
 *          $('#my-wrapper').append(new_content);
 *          alert('New content was appended to #my-wrapper');
 *        }
 *      }
 *    };
 * @endcode
 */
Drupal.ajax = function (base, element, element_settings) {
  var defaults = {
    url: 'system/ajax',
    event: 'mousedown',
    keypress: true,
    selector: '#' + base,
    effect: 'none',
    speed: 'none',
    method: 'replaceWith',
    progress: {
      type: 'throbber',
      message: Drupal.t('Please wait...')
    },
    submit: {
      'js': true
    }
  };

  $.extend(this, defaults, element_settings);

  this.element = element;
  this.element_settings = element_settings;

  // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
  // the server detect when it needs to degrade gracefully.
  // There are five scenarios to check for:
  // 1. /nojs/
  // 2. /nojs$ - The end of a URL string.
  // 3. /nojs? - Followed by a query (with clean URLs enabled).
  //      E.g.: path/nojs?destination=foobar
  // 4. /nojs& - Followed by a query (without clean URLs enabled).
  //      E.g.: ?q=path/nojs&destination=foobar
  // 5. /nojs# - Followed by a fragment.
  //      E.g.: path/nojs#myfragment
  this.url = element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g, '/ajax$1');
  // If the 'nojs' version of the URL is trusted, also trust the 'ajax' version.
  if (Drupal.settings.urlIsAjaxTrusted[element_settings.url]) {
    Drupal.settings.urlIsAjaxTrusted[this.url] = true;
  }

  this.wrapper = '#' + element_settings.wrapper;

  // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
  // bind Ajax to links as well.
  if (this.element.form) {
    this.form = $(this.element.form);
  }

  // Set the options for the ajaxSubmit function.
  // The 'this' variable will not persist inside of the options object.
  var ajax = this;
  ajax.options = {
    url: ajax.url,
    data: ajax.submit,
    beforeSerialize: function (element_settings, options) {
      return ajax.beforeSerialize(element_settings, options);
    },
    beforeSubmit: function (form_values, element_settings, options) {
      ajax.ajaxing = true;
      return ajax.beforeSubmit(form_values, element_settings, options);
    },
    beforeSend: function (xmlhttprequest, options) {
      ajax.ajaxing = true;
      return ajax.beforeSend(xmlhttprequest, options);
    },
    success: function (response, status, xmlhttprequest) {
      // Sanity check for browser support (object expected).
      // When using iFrame uploads, responses must be returned as a string.
      if (typeof response == 'string') {
        response = $.parseJSON(response);
      }

      // Prior to invoking the response's commands, verify that they can be
      // trusted by checking for a response header. See
      // ajax_set_verification_header() for details.
      // - Empty responses are harmless so can bypass verification. This avoids
      //   an alert message for server-generated no-op responses that skip Ajax
      //   rendering.
      // - Ajax objects with trusted URLs (e.g., ones defined server-side via
      //   #ajax) can bypass header verification. This is especially useful for
      //   Ajax with multipart forms. Because IFRAME transport is used, the
      //   response headers cannot be accessed for verification.
      if (response !== null && !Drupal.settings.urlIsAjaxTrusted[ajax.url]) {
        if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
          var customMessage = Drupal.t("The response failed verification so will not be processed.");
          return ajax.error(xmlhttprequest, ajax.url, customMessage);
        }
      }

      return ajax.success(response, status);
    },
    complete: function (xmlhttprequest, status) {
      ajax.ajaxing = false;
      if (status == 'error' || status == 'parsererror') {
        return ajax.error(xmlhttprequest, ajax.url);
      }
    },
    dataType: 'json',
    type: 'POST'
  };

  // Bind the ajaxSubmit function to the element event.
  $(ajax.element).bind(element_settings.event, function (event) {
    if (!Drupal.settings.urlIsAjaxTrusted[ajax.url] && !Drupal.urlIsLocal(ajax.url)) {
      throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {'!url': ajax.url}));
    }
    return ajax.eventResponse(this, event);
  });

  // If necessary, enable keyboard submission so that Ajax behaviors
  // can be triggered through keyboard input as well as e.g. a mousedown
  // action.
  if (element_settings.keypress) {
    $(ajax.element).keypress(function (event) {
      return ajax.keypressResponse(this, event);
    });
  }

  // If necessary, prevent the browser default action of an additional event.
  // For example, prevent the browser default action of a click, even if the
  // AJAX behavior binds to mousedown.
  if (element_settings.prevent) {
    $(ajax.element).bind(element_settings.prevent, false);
  }
};

/**
 * Handle a key press.
 *
 * The Ajax object will, if instructed, bind to a key press response. This
 * will test to see if the key press is valid to trigger this event and
 * if it is, trigger it for us and prevent other keypresses from triggering.
 * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
 * and 32. RETURN is often used to submit a form when in a textfield, and 
 * SPACE is often used to activate an element without submitting. 
 */
Drupal.ajax.prototype.keypressResponse = function (element, event) {
  // Create a synonym for this to reduce code confusion.
  var ajax = this;

  // Detect enter key and space bar and allow the standard response for them,
  // except for form elements of type 'text' and 'textarea', where the 
  // spacebar activation causes inappropriate activation if #ajax['keypress'] is 
  // TRUE. On a text-type widget a space should always be a space.
  if (event.which == 13 || (event.which == 32 && element.type != 'text' && element.type != 'textarea')) {
    $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    return false;
  }
};

/**
 * Handle an event that triggers an Ajax response.
 *
 * When an event that triggers an Ajax response happens, this method will
 * perform the actual Ajax call. It is bound to the event using
 * bind() in the constructor, and it uses the options specified on the
 * ajax object.
 */
Drupal.ajax.prototype.eventResponse = function (element, event) {
  // Create a synonym for this to reduce code confusion.
  var ajax = this;

  // Do not perform another ajax command if one is already in progress.
  if (ajax.ajaxing) {
    return false;
  }

  try {
    if (ajax.form) {
      // If setClick is set, we must set this to ensure that the button's
      // value is passed.
      if (ajax.setClick) {
        // Mark the clicked button. 'form.clk' is a special variable for
        // ajaxSubmit that tells the system which element got clicked to
        // trigger the submit. Without it there would be no 'op' or
        // equivalent.
        element.form.clk = element;
      }

      ajax.form.ajaxSubmit(ajax.options);
    }
    else {
      ajax.beforeSerialize(ajax.element, ajax.options);
      $.ajax(ajax.options);
    }
  }
  catch (e) {
    // Unset the ajax.ajaxing flag here because it won't be unset during
    // the complete response.
    ajax.ajaxing = false;
    alert("An error occurred while attempting to process " + ajax.options.url + ": " + e.message);
  }

  // For radio/checkbox, allow the default event. On IE, this means letting
  // it actually check the box.
  if (typeof element.type != 'undefined' && (element.type == 'checkbox' || element.type == 'radio')) {
    return true;
  }
  else {
    return false;
  }

};

/**
 * Handler for the form serialization.
 *
 * Runs before the beforeSend() handler (see below), and unlike that one, runs
 * before field data is collected.
 */
Drupal.ajax.prototype.beforeSerialize = function (element, options) {
  // Allow detaching behaviors to update field values before collecting them.
  // This is only needed when field values are added to the POST data, so only
  // when there is a form such that this.form.ajaxSubmit() is used instead of
  // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
  // isn't called, but don't rely on that: explicitly check this.form.
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.detachBehaviors(this.form, settings, 'serialize');
  }

  // Prevent duplicate HTML ids in the returned markup.
  // @see drupal_html_id()
  options.data['ajax_html_ids[]'] = [];
  $('[id]').each(function () {
    options.data['ajax_html_ids[]'].push(this.id);
  });

  // Allow Drupal to return new JavaScript and CSS files to load without
  // returning the ones already loaded.
  // @see ajax_base_page_theme()
  // @see drupal_get_css()
  // @see drupal_get_js()
  options.data['ajax_page_state[theme]'] = Drupal.settings.ajaxPageState.theme;
  options.data['ajax_page_state[theme_token]'] = Drupal.settings.ajaxPageState.theme_token;
  for (var key in Drupal.settings.ajaxPageState.css) {
    options.data['ajax_page_state[css][' + key + ']'] = 1;
  }
  for (var key in Drupal.settings.ajaxPageState.js) {
    options.data['ajax_page_state[js][' + key + ']'] = 1;
  }
};

/**
 * Modify form values prior to form submission.
 */
Drupal.ajax.prototype.beforeSubmit = function (form_values, element, options) {
  // This function is left empty to make it simple to override for modules
  // that wish to add functionality here.
};

/**
 * Prepare the Ajax request before it is sent.
 */
Drupal.ajax.prototype.beforeSend = function (xmlhttprequest, options) {
  // For forms without file inputs, the jQuery Form plugin serializes the form
  // values, and then calls jQuery's $.ajax() function, which invokes this
  // handler. In this circumstance, options.extraData is never used. For forms
  // with file inputs, the jQuery Form plugin uses the browser's normal form
  // submission mechanism, but captures the response in a hidden IFRAME. In this
  // circumstance, it calls this handler first, and then appends hidden fields
  // to the form to submit the values in options.extraData. There is no simple
  // way to know which submission mechanism will be used, so we add to extraData
  // regardless, and allow it to be ignored in the former case.
  if (this.form) {
    options.extraData = options.extraData || {};

    // Let the server know when the IFRAME submission mechanism is used. The
    // server can use this information to wrap the JSON response in a TEXTAREA,
    // as per http://jquery.malsup.com/form/#file-upload.
    options.extraData.ajax_iframe_upload = '1';

    // The triggering element is about to be disabled (see below), but if it
    // contains a value (e.g., a checkbox, textfield, select, etc.), ensure that
    // value is included in the submission. As per above, submissions that use
    // $.ajax() are already serialized prior to the element being disabled, so
    // this is only needed for IFRAME submissions.
    var v = $.fieldValue(this.element);
    if (v !== null) {
      options.extraData[this.element.name] = Drupal.checkPlain(v);
    }
  }

  // Disable the element that received the change to prevent user interface
  // interaction while the Ajax request is in progress. ajax.ajaxing prevents
  // the element from triggering a new request, but does not prevent the user
  // from changing its value.
  $(this.element).addClass('progress-disabled').attr('disabled', true);

  // Insert progressbar or throbber.
  if (this.progress.type == 'bar') {
    var progressBar = new Drupal.progressBar('ajax-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  }
  else if (this.progress.type == 'throbber') {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  }
};

/**
 * Handler for the form redirection completion.
 */
Drupal.ajax.prototype.success = function (response, status) {
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');

  Drupal.freezeHeight();

  for (var i in response) {
    if (response.hasOwnProperty(i) && response[i]['command'] && this.commands[response[i]['command']]) {
      this.commands[response[i]['command']](this, response[i], status);
    }
  }

  // Reattach behaviors, if they were detached in beforeSerialize(). The
  // attachBehaviors() called on the new content from processing the response
  // commands is not sufficient, because behaviors from the entire form need
  // to be reattached.
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }

  Drupal.unfreezeHeight();

  // Remove any response-specific settings so they don't get used on the next
  // call by mistake.
  this.settings = null;
};

/**
 * Build an effect object which tells us how to apply the effect when adding new HTML.
 */
Drupal.ajax.prototype.getEffect = function (response) {
  var type = response.effect || this.effect;
  var speed = response.speed || this.speed;

  var effect = {};
  if (type == 'none') {
    effect.showEffect = 'show';
    effect.hideEffect = 'hide';
    effect.showSpeed = '';
  }
  else if (type == 'fade') {
    effect.showEffect = 'fadeIn';
    effect.hideEffect = 'fadeOut';
    effect.showSpeed = speed;
  }
  else {
    effect.showEffect = type + 'Toggle';
    effect.hideEffect = type + 'Toggle';
    effect.showSpeed = speed;
  }

  return effect;
};

/**
 * Handler for the form redirection error.
 */
Drupal.ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
  alert(Drupal.ajaxError(xmlhttprequest, uri, customMessage));
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');
  // Reattach behaviors, if they were detached in beforeSerialize().
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }
};

/**
 * Provide a series of commands that the server can request the client perform.
 */
Drupal.ajax.prototype.commands = {
  /**
   * Command to insert new content into the DOM.
   */
  insert: function (ajax, response, status) {
    // Get information from the response. If it is not there, default to
    // our presets.
    var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
    var method = response.method || ajax.method;
    var effect = ajax.getEffect(response);

    // We don't know what response.data contains: it might be a string of text
    // without HTML, so don't rely on jQuery correctly iterpreting
    // $(response.data) as new HTML rather than a CSS selector. Also, if
    // response.data contains top-level text nodes, they get lost with either
    // $(response.data) or $('<div></div>').replaceWith(response.data).
    var new_content_wrapped = $('<div></div>').html(response.data);
    var new_content = new_content_wrapped.contents();

    // For legacy reasons, the effects processing code assumes that new_content
    // consists of a single top-level element. Also, it has not been
    // sufficiently tested whether attachBehaviors() can be successfully called
    // with a context object that includes top-level text nodes. However, to
    // give developers full control of the HTML appearing in the page, and to
    // enable Ajax content to be inserted in places where DIV elements are not
    // allowed (e.g., within TABLE, TR, and SPAN parents), we check if the new
    // content satisfies the requirement of a single top-level element, and
    // only use the container DIV created above when it doesn't. For more
    // information, please see http://drupal.org/node/736066.
    if (new_content.length != 1 || new_content.get(0).nodeType != 1) {
      new_content = new_content_wrapped;
    }

    // If removing content from the wrapper, detach behaviors first.
    switch (method) {
      case 'html':
      case 'replaceWith':
      case 'replaceAll':
      case 'empty':
      case 'remove':
        var settings = response.settings || ajax.settings || Drupal.settings;
        Drupal.detachBehaviors(wrapper, settings);
    }

    // Add the new content to the page.
    wrapper[method](new_content);

    // Immediately hide the new content if we're using any effects.
    if (effect.showEffect != 'show') {
      new_content.hide();
    }

    // Determine which effect to use and what content will receive the
    // effect, then show the new content.
    if ($('.ajax-new-content', new_content).length > 0) {
      $('.ajax-new-content', new_content).hide();
      new_content.show();
      $('.ajax-new-content', new_content)[effect.showEffect](effect.showSpeed);
    }
    else if (effect.showEffect != 'show') {
      new_content[effect.showEffect](effect.showSpeed);
    }

    // Attach all JavaScript behaviors to the new content, if it was successfully
    // added to the page, this if statement allows #ajax['wrapper'] to be
    // optional.
    if (new_content.parents('html').length > 0) {
      // Apply any settings from the returned JSON if available.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(new_content, settings);
    }
  },

  /**
   * Command to remove a chunk from the page.
   */
  remove: function (ajax, response, status) {
    var settings = response.settings || ajax.settings || Drupal.settings;
    Drupal.detachBehaviors($(response.selector), settings);
    $(response.selector).remove();
  },

  /**
   * Command to mark a chunk changed.
   */
  changed: function (ajax, response, status) {
    if (!$(response.selector).hasClass('ajax-changed')) {
      $(response.selector).addClass('ajax-changed');
      if (response.asterisk) {
        $(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ');
      }
    }
  },

  /**
   * Command to provide an alert.
   */
  alert: function (ajax, response, status) {
    alert(response.text, response.title);
  },

  /**
   * Command to provide the jQuery css() function.
   */
  css: function (ajax, response, status) {
    $(response.selector).css(response.argument);
  },

  /**
   * Command to set the settings that will be used for other commands in this response.
   */
  settings: function (ajax, response, status) {
    if (response.merge) {
      $.extend(true, Drupal.settings, response.settings);
    }
    else {
      ajax.settings = response.settings;
    }
  },

  /**
   * Command to attach data using jQuery's data API.
   */
  data: function (ajax, response, status) {
    $(response.selector).data(response.name, response.value);
  },

  /**
   * Command to apply a jQuery method.
   */
  invoke: function (ajax, response, status) {
    var $element = $(response.selector);
    $element[response.method].apply($element, response.arguments);
  },

  /**
   * Command to restripe a table.
   */
  restripe: function (ajax, response, status) {
    // :even and :odd are reversed because jQuery counts from 0 and
    // we count from 1, so we're out of sync.
    // Match immediate children of the parent element to allow nesting.
    $('> tbody > tr:visible, > tr:visible', $(response.selector))
      .removeClass('odd even')
      .filter(':even').addClass('odd').end()
      .filter(':odd').addClass('even');
  },

  /**
   * Command to add css.
   *
   * Uses the proprietary addImport method if available as browsers which
   * support that method ignore @import statements in dynamically added
   * stylesheets.
   */
  add_css: function (ajax, response, status) {
    // Add the styles in the normal way.
    $('head').prepend(response.data);
    // Add imports in the styles using the addImport method if available.
    var match, importMatch = /^@import url\("(.*)"\);$/igm;
    if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
      importMatch.lastIndex = 0;
      while (match = importMatch.exec(response.data)) {
        document.styleSheets[0].addImport(match[1]);
      }
    }
  },

  /**
   * Command to update a form's build ID.
   */
  updateBuildId: function(ajax, response, status) {
    $('input[name="form_build_id"][value="' + response['old'] + '"]').val(response['new']);
  }
};

})(jQuery);
;
(function (D) {
  var beforeSerialize = D.ajax.prototype.beforeSerialize;
  D.ajax.prototype.beforeSerialize = function (element, options) {
    beforeSerialize.call(this, element, options);
    options.data['ajax_page_state[jquery_version]'] = D.settings.ajaxPageState.jquery_version;
  }
})(Drupal);
;

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
  captures_list: 0.732
  exclusion.robots: 0.032
  exclusion.robots.policy: 0.019
  esindex: 0.011
  cdx.remote: 5.148
  LoadShardBlock: 95.383 (3)
  PetaboxLoader3.datanode: 97.966 (4)
  load_resource: 60.468
  PetaboxLoader3.resolve: 34.391
*/