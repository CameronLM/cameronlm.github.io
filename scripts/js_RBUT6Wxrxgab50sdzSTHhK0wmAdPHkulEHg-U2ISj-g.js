var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/**
 * Javascript helpers for Facebook Streams.  Loaded by fb_stream.module.
 */
FB_Stream = function(){};

/**
 * Display a stream dialog on Facebook Connect pages, via
 * http://developers.facebook.com/docs/reference/javascript/FB.ui
 *
 * @param json is the json-encoded output of fb_stream_get_stream_dialog_data().
 */
FB_Stream.stream_publish = function(json) {
  var data_array = Drupal.parseJson(json);
  var len = data_array.length;
  for (var i=0; i < len; i++) {
    var data = data_array[i];
    data.method = 'stream.publish';
    FB.ui(data);
  }
};;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function($) {

/**
 * Create a DART object to handle tagging functionality
 */
Drupal.DART = {};

/**
 * Overridable settings.
 */
Drupal.DART.settings = {
  "writeTags": true
};

/**
 * Using document.write, add a DART tag to the page
 */
Drupal.DART.tag = function(tag) {
  tag = typeof(tag) == 'string' ? eval('(' + tag + ')') : tag;

  var tagname = tag.settings.options.method == 'adj' ? 'script' : 'iframe';
  var options = tag.settings.options.method == 'adj' ? 'type="text/javascript"' : 'frameborder="0" scrolling="no" width="' + tag.sz.split("x")[0] + '" height="' + tag.sz.split("x")[1] + '"';

  // Allow other modules to include js that can manipulate the tag object.
  var processed_tag = ($ !== undefined) ? $(document).triggerHandler('dart_tag_process', [tag]) : undefined;
  tag = processed_tag !== undefined ? processed_tag : tag;

  ad = '<' + tagname + ' ' + options + ' src="';
  ad += dart_url + "/";
  ad += tag.network_id !== '' ? tag.network_id + "/" : "";
  ad += tag.settings.options.method + "/";
  ad += tag.prefix + '.' + tag.site + "/" + tag.zone + ";";
  ad += this.keyVals(tag.key_vals);

  // Allow other modules to include js that can manipulate the concatenated tag string.
  rendered_ad = ($ !== undefined) ? $(document).triggerHandler('dart_tag_render', [ad]) : undefined;
  ad = rendered_ad !== undefined ? rendered_ad : ad; ad += '"></' + tagname + '>';

  if (Drupal.DART.settings.writeTags) {
    document.write(ad);
  }

  // console.log('-----------------'+tag.pos+'------------------');
  // console.log(tag);

  return ad;
};

/**
 * Format a key|val pair into a dart tag key|val pair.
 */
Drupal.DART.keyVal = function(key, val, useEval) {
  if (key != "<none>") {
    kvp  = key + "=";
    kvp += useEval ? eval(val) : val;
    kvp += key == "ord" ? "?" : ";";
  }
  else {
    kvp = useEval ? eval(val) : val;
  }

  return(kvp);
};

/**
 * Loop through an object and create kay|val pairs.
 *
 * @param vals
 *   an object in this form:
 *   {
 *     key1 : {{val:'foo', eval:true}, {val:'foo2', eval:false}}
 *     key2 : {{val:'bar', eval:false}},
 *     key3 : {{val:'foobar', eval:true}}
 *   }
 */
Drupal.DART.keyVals = function(vals) {
  var ad = '';
  for(var key in vals) {
    value = vals[key];
    for(var val in value) {
      v = value[val];
      ad += this.keyVal(key, v['val'], v['eval']);
    }
  }
  return ad;
};


/**
 * If there are tags in the loadLastTags, then load them where they belong.
 */
Drupal.DART.display_ads = function () {
  ord = Math.round(Math.random()*1000000000000);
    if (typeof(Drupal.DART.settings.loadLastTags) == 'object') {
    $('.dart-tag.dart-processed').each(function () {
      $(this).removeClass('dart-processed');
      $(this).html('');
    });
    var init = false;
    for (var tag in Drupal.DART.settings.loadLastTags) {
      // variables for background ads may be defined in late loaded scripts. Load bg ad if needed.
      if (Drupal.DART.settings.loadLastTags.hasOwnProperty(tag) && tag != null) {
        (function(tag) {
          var name = tag;
          var scriptTag = Drupal.DART.tag(Drupal.DART.settings.loadLastTags[name]);
          if (typeof(postscribe) == 'function') {
            postscribe($('.dart-name-' + name), scriptTag, function () {
              Drupal.DART.loadBgAd(Drupal.settings.DART.bgAdVars);
              $('.dart-name-' + name).addClass('dart-processed');
            });
          }
          else if (typeof(_this.writeCapture) == 'function') {
            $('.dart-name-' + name).writeCapture().append(scriptTag, function () {
                Drupal.DART.loadBgAd(Drupal.settings.DART.bgAdVars);
            }).addClass('dart-processed');
          }
        }(tag));
      }
    }
  }
}

/**
 * Load the background ad as served by DART.
 */
Drupal.DART.loadBgAd = function(bgAdVars) {
  //ensure ads are loaded only once on the page
  if (!Drupal.DART.settings.bgAdLoaded && typeof bgAdVars != 'undefined') {
    var bgAdCSS = {};
    if (window[bgAdVars.bgImg] != undefined) {
      bgAdCSS['background-image'] = 'url(' + window[bgAdVars.bgImg] + ')';
    }
    if (window[bgAdVars.bgColor] != undefined) {
      bgAdCSS['background-color'] = window[bgAdVars.bgColor];
    }
    if (window[bgAdVars.bgRepeat] != undefined) {
      bgAdCSS['background-repeat'] = window[bgAdVars.bgRepeat];
    }
    $(bgAdVars.selector).css(bgAdCSS);

    if (window[bgAdVars.clickThru] != undefined) {
      $(bgAdVars.selector).addClass('background-ad');
      $(bgAdVars.selector).click(function (e) {
      if(e.target != this) return;
        window.open(window[bgAdVars.clickThru]);
      });
    }

    //don't try to load again
    if (window[bgAdVars.bgImg] != undefined) {
      Drupal.DART.settings.bgAdLoaded = true;
    }
  }
};



/**
 * Display Ads.
 */
Drupal.behaviors.DART = {
  attach: function(context) {
    Drupal.DART.display_ads();
    Drupal.DART.loadBgAd(Drupal.settings.DART.bgAdVars);
  }
};

})(jQuery);

;

}
/*
     FILE ARCHIVED ON 21:08:16 Oct 02, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:11:33 Dec 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.661
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.033
  esindex: 0.009
  cdx.remote: 23.778
  LoadShardBlock: 450.889 (3)
  PetaboxLoader3.resolve: 314.529 (5)
  PetaboxLoader3.datanode: 273.489 (5)
  load_resource: 230.043 (2)
*/