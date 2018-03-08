// Update March 9, 2018

//<!-- Cxense script begin -->
var cX = cX || {}; cX.callQueue = cX.callQueue || [];
cX.callQueue.push(['setSiteId', '1131749162413357813']);
cX.callQueue.push(['sendPageViewEvent']);

(function(d,s,e,t){e=d.createElement(s);e.type='text/java'+s;e.async='async';
e.src='http'+('https:'===location.protocol?'s://s':'://')+'cdn.cxense.com/cx.js';
t=d.getElementsByTagName(s)[0];t.parentNode.insertBefore(e,t);})(document,'script');
//<!-- Cxense script end -->

// <!-- BEGIN CRITEO LOADER -->
    // Load Criteo asynchronously
	window.Criteo = window.Criteo || {};
	window.Criteo.events = window.Criteo.events || [];
	(function(){ var gads_criteo = document.createElement('script');
		gads_criteo.async = true; gads_criteo.type = 'text/javascript';
		var useSSL = 'https:' == document.location.protocol;
		gads_criteo.src = (useSSL ? 'https:' : 'http:') + '//static.criteo.net/js/ld/publishertag.js';
		var node = document.getElementsByTagName('script')[0];
		node.parentNode.insertBefore(gads_criteo, node);
	})();
//<!-- END CRITEO LOADER -->

//<!-- Start: GPT Async -->
    // Load GPT asynchronously
	var PWT={}; //Initialize Namespace
    var gptadslots=[];
    var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
        (function(){ var gads = document.createElement('script');
            gads.async = true; gads.type = 'text/javascript';
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        })();
      };
//<!-- Endof: GPT Async -->

//<!-- Pubmatic -->
(function() {
      var purl = window.location.href;
      var url = '//ads.pubmatic.com/AdServer/js/pwt/156479/507';
      var profileVersionId = '';
      if(purl.indexOf('pwtv=')>0){
          var regexp = /pwtv=(.*?)(&|$)/g;
          var matches = regexp.exec(purl);
          if(matches.length >= 2 && matches[1].length > 0){
                          profileVersionId = '/'+matches[1];
          }
      }
      var wtads = document.createElement('script');
      wtads.async = true;
      wtads.type = 'text/javascript';
      wtads.src = url+profileVersionId+'/pwt.js';
      var node = document.getElementsByTagName('script')[0];
      node.parentNode.insertBefore(wtads, node);
})();
//<!-- Endof Pubmatic -->

var cX = cX || {}; cX.callQueue = cX.callQueue || [];
cX.callQueue.push(['invoke', function() {
	googletag.cmd.push(function() {	
        // Define the ad slots
		gptadslots.push(googletag.defineSlot('/31800665/TABLOIDNAKITA', [[970,90], [970,250]], 'div-gpt-ad-8464799-1').setTargeting('Pos', ['Top_1']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/31800665/TABLOIDNAKITA', [[300,600]], 'div-gpt-ad-8464799-2').setTargeting('Pos', ['Giant']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/31800665/TABLOIDNAKITA', [[300,250]], 'div-gpt-ad-8464799-4').setTargeting('Pos', ['MR3']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/31800665/TABLOIDNAKITA', [[1100,50]], 'div-gpt-ad-8464799-HorAd').setTargeting('Pos', ['Horizontal_Ad']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/31800665/TABLOIDNAKITA', 'div-gpt-ad-8464799-0').setTargeting('Pos', ['Popup']).addService(googletag.pubads()));		
		
        googletag.pubads().setTargeting(audience_data_key, aiService.getAudience(audience_data_key));
		googletag.pubads().enableSingleRequest();
		googletag.pubads().enableAsyncRendering();
        
    /* BEGIN CRITEO CDB */
		!function(){var e={
            "300x250" : 962259,
            "300x600" : 962260,
            "320x50" : 962261,
            "970x90" : 962262,
        },t="L",z=8;
        
        "F"!=(t=t.toUpperCase())&&"L"!=t&&"A"!=t&&(t="L");var o={placements:[]},i={},n={},a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
        
        for(var d in googletag.pubads().getSlots())if(googletag.pubads().getSlots().hasOwnProperty(d)){var g=googletag.pubads().getSlots()[d],l=g.getSizes(a,r);i[b=g.getSlotElementId()]=[],n[b]=0;for(var s in l)if(l.hasOwnProperty(s)){var u=l[s],c="object"==typeof u?u.getWidth():null,h="object"==typeof u?u.getHeight():null,p="object"==typeof u?c*h:0,f=e["object"==typeof u?c+"x"+h:u]||null;f&&(n[b]=p>n[b]?p:n[b],i[b].push({slotid:b,zoneid:f,width:c,height:h,area:p}))}}
        
        var w=0;for(var b in i)if(i.hasOwnProperty(b))for(var m=i[b],d=0;d<m.length;d++){var v=m[d];if(w>=z)break;if(("L"!=t||v.area==n[v.slotid])&&(o.placements.push({slotid:b,zoneid:v.zoneid}),w++,"F"==t))break}
        
        if(o.placements.length>0){window.Criteo=window.Criteo||{},window.Criteo.events=window.Criteo.events||[],googletag.pubads().disableInitialLoad();var y=function(){googletag.cmd.push(function(){Criteo.SetDFPKeyValueTargeting(),googletag.pubads().refresh()})};
        
        Criteo.events.push(function(){Criteo.SetLineItemRanges("0..30:0.01"),Criteo.RequestBids(o,y,2000)})}}();
    /* END CRITEO CDB */
        
        // Start ad fetching
		googletag.enableServices();	
        
	});
}]);

// Async load of cx.js
  (function(d,s,e,t){e=d.createElement(s);e.type='text/java'+s;e.async='async';
  e.src='http'+('https:'===location.protocol?'s://s':'://')+'cdn.cxense.com/cx.js';
  t=d.getElementsByTagName(s)[0];t.parentNode.insertBefore(e,t);})(document,'script');

    //Dependencies of GPT in body tag
cX.callQueue.push(['invoke', function() {
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-8464799-1'); }); //Top_1
}]);
cX.callQueue.push(['invoke', function() {
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-8464799-2'); }); //Giant
}]);
cX.callQueue.push(['invoke', function() {
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-8464799-4'); }); //MR3
}]);
cX.callQueue.push(['invoke', function() {
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-8464799-HorAd'); }); //Horizontal_Ad
}]);
cX.callQueue.push(['invoke', function() {
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-8464799-0'); }); //Popup
}]);