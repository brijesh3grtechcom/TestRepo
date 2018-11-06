var admob;
var admobid;
var _opt;
var _interstitialReady;
var _bannerReady;
var _rewardVideoReady;
var _mobpub;
var _mopubmobid;
var _mopubinterstitialReady;
var _mopubbannerReady;
var AdColony;
var adsId;
var Vungle;
var VungleAdsId;
var chartboost;
var chartboostadsId;
var unityads;
var unityadsId;
var myMedia;// play audio file in Android and IOS
try{
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
//alert("RR");
       // app.ajaxApiCall();
      //  app.playMedia();
          app.initAdMob();
       //app.initMopub();
        app.initAdColonyAds();
//        app.initVungleAds();
  //      app.initChartBoostAds();
     //   app.initUnityAds();
    },
    initAdMob: function () {
try{
//alert(window.AdMob);
       // admob = window.AdMob;
        if (admob) {
            admobid = {};
            if (navigator.userAgent.match(/Android/i)) {
                admobid = { // for Android
                    banner: 'ca-app-pub-3940256099942544/6300978111',
                    interstitial: 'ca-app-pub-3940256099942544/1033173712'
                };
            }
            else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
                admobid = { // for iOS
                    banner: 'ca-app-pub-4537786593759927/8696778404',
                    interstitial: 'ca-app-pub-4537786593759927/4747044662'
                };
            }
           // this.prepareAdMobInterstitial(false);
          //  this.prepareAdMobBanner(false);
        } else {
            //alert("No AdMob?");
        }

document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
  console.log(event)
})
//alert ("int1");

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
  
//alert( "Intershow");
//admob.interstitial.show()
//  document.getElementById('showAd').disabled = false
})
           document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
 // console.log(event)
 // admob.interstitial.prepare()
})
//alert ("inti");

admob.banner.config({
    id: admobid.banner,
    isTesting: false,
    autoShow: true,
   bannerAtTop: true,
	overlap:true

  })
//alert ("int2");

  admob.banner.prepare();

  admob.interstitial.config({
    id: admobid.interstitial,
    isTesting: false,
    autoShow: true
  })
 // admob.interstitial.prepare();

}catch(e){}


    },
 	showAdMobInterstitial: function () {
try{
//alert("HH");
		admob.interstitial.prepare();
}catch(e){}

      },
       initMopub: function () {
        console.log("MoPub init");
        _mobpub = window.MoPub;
        if (_mobpub) {
            // Register AdMob events
            // new events, with variable to differentiate: adNetwork, adType, adEvent
            document.addEventListener('onAdFailLoad', function (data) {
                console.log('error: ' + data.error +
                    ', reason: ' + data.reason +
                    ', adNetwork:' + data.adNetwork +
                    ', adType:' + data.adType +
                    ', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
            });
            _opt = {
                adSize: 'SMART_BANNER',
                position: _mobpub.AD_POSITION.BOTTOM_CENTER,
                bgColor: 'black', // color name, or '#RRGGBB'
                isTesting: true, // set to true, to receiving test ad for testing purpose
            };
            _mopubmobid = {};
            if (navigator.userAgent.match(/Android/i)) {
                _mopubmobid = { // for Android
                    banner: "4c61f06cb0364946bd7aa341a0a247d8",
                    interstitial: "ad2cdcc33fa44c4784776eac915c5d79"
                };
            }
            else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
                _mopubmobid = { // for iOS
                    banner: "fd76fc25ebdf4471be1ad7f19ea15af8",
                    interstitial: "d01503c36e3f4d34b77e349266a5181f"
                };
            }
            _mobpub.setOptions(_opt);
            this.prepareMoPubInterstitial(false);
            this.prepareMoPubBanner(false);
        } else {
            console.log("No MobPub?");
        }
    },
    prepareMoPubBanner: function (bShow) {
        if (!_mobpub) return false;
        _mobpub.createBanner({
            adId: _mopubmobid.banner,
            position: _mobpub.AD_POSITION.BOTTOM_CENTER,
            autoShow: bShow,
            success: function () {
                _mopubbannerReady = true;
                console.log('MoPub banner ready');
            },
            error: function () {
                console.log('failed to create MoPub banner');
            }
        })
        return true;
    },
    showMoPubBanner: function () {
        if (!_mopubbannerReady) {
            console.log('MoPub banner not ready');
            return this.prepareMoPubBanner(true);
        }
        if (position == undefined) position = _mobpub.AD_POSITION.BOTTOM_CENTER;
        _mobpub.showBanner(position);
        return true;
    },
    prepareMoPubInterstitial: function (bShow) {
        if (!_mobpub) return false;
        _mobpub.prepareInterstitial({
            adId: _mopubmobid.interstitial,
            autoShow: bShow,
            success: function () {
                _mopubbannerReady = true;
                console.log('MoPub interstitial prepared');
            },
            error: function () {
                console.log('failed to prepare MoPub  interstitial');
            }
        })
        return true;
    },
    showMoPubInterstitial: function () {
        if (!_mopubbannerReady) {
            console.log('MoPub interstitial not ready');
            return this.prepareMoPubInterstitial(true);
        }
        _mobpub.showInterstitial();
        return true;
    },
    removeMoPubAds: function () {
        if (!_mobpub) return;
        _mobpub.removeBanner();
        _mopubbannerReady = false;
    },
    initAdColonyAds: function () {
        console.log("AdColony init");
        AdColony = window.adcolony;
        if (navigator.userAgent.match(/Android/i)) {
            adsId = { // for Android
                appId: "app5897b3b5a1774b349f",
                interstitialAdZoneId: "vzb511270b2f8640e29f",
                rewardedVideoAdZoneId: "vzb511270b2f8640e29f"
            };
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            adsId = { // for iOS
                appId: "app5897b3b5a1774b349f",
                interstitialAdZoneId: "vzb511270b2f8640e29f",
                rewardedVideoAdZoneId: "vzb511270b2f8640e29f"
            };
        }
        if (AdColony) {
            AdColony.setUp(adsId.appId, adsId.interstitialAdZoneId, adsId.rewardedVideoAdZoneId);
            console.log("AdsColony Setup");
            AdColony.loadedInterstitialAd({
                success: function () {
                    console.log('AdsColony interstitial prepared');
                }, error: function () {
                    console.log('AdsColony interstitial not prepared');
                }
            })

            AdColony.loadedRewardedVideoAd({
                success: function () {
                    console.log('AdsColony Reward Video prepared');
                }, error: function () {
                    console.log('AdsColony Reward Video not prepared');
                }
            })
        } else {
            console.log("No AdColonyAds?");
        }
    },
    showAdColonyInterstitialAd: function () {

        AdColony.showInterstitialAd();
    }
    ,
    showAdColonyRewardedVideoAd: function () {
        AdColony.showRewardedVideoAd();
    },
    initVungleAds: function () {
        console.log("Vungle init");
        if (navigator.userAgent.match(/Android/i)) {
            VungleAdsId = { // for Android
                appId: "58f05759ae5daade25000013"
            };
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            VungleAdsId = { // for iOS
                appId: "58f05759ae5daade25000013"
            };
        }
        Vungle = window.vungle;
        if (Vungle) {
            Vungle.setUp(VungleAdsId.appId);
            Vungle.isShowingRewardedVideoAd();
            Vungle.loadedRewardedVideoAd(true);
            console.log("Vungle Setup");
        } else {
            console.log("No Vungle?");
        }
    },
    showVungleRewardedVideoAd: function () {
        Vungle.loadedRewardedVideoAd(true);
        Vungle.showRewardedVideoAd();
    },
    initChartBoostAds: function () {
        //alert("Chartboost init");
        if (navigator.userAgent.match(/Android/i)) {
            chartboostadsId = { // for Android
                appId: "5a7d3fe4837d764cadf3597c",
                appSignature: "c3c9cd28b375852a158b6a4949b2eb4bbddab569"
            };
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            chartboostadsId = { // for iOS
                appId: "5a7d3fe4837d764cadf3597c",
                appSignature: "c3c9cd28b375852a158b6a4949b2eb4bbddab569"
            };
        }
        chartboost = window.chartboost;
        if (chartboost) {
            chartboost.setUp(chartboostadsId.appId);
            chartboost.preloadInterstitialAd('Default');
            chartboost.preloadRewardedVideoAd('Default');
            console.log("chartboost Setup");
        } else {
            console.log("No chartboost?");
        }
    },
    showChartBoostInterstitialAd: function () {
        //alert("Chartboost Show");

        chartboost.showInterstitialAd('Default');
    },
    showChartBoostRewardedVideoAd: function () {
        chartboost.showRewardedVideoAd('Default');
    },
    initUnityAds: function () {
        console.log("Unity init");
        if (navigator.userAgent.match(/Android/i)) {
            unityadsId = { // for Android
                gameId: "1694297",
                videoAdPlacementId: "video",
                rewardedVideoAdPlacementId: "rewardedVideo",
                isTest: true
            };
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            unityadsId = { // for iOS
                gameId: "1694298",
                videoAdPlacementId: "rewardedVideo",
                rewardedVideoAdPlacementId: "rewardedVideo",
                isTest: true
            };
        }
        unityads = window.unityads;
        if (unityads) {
            unityads.setUp(unityadsId.gameId, unityadsId.videoAdPlacementId, unityadsId.rewardedVideoAdPlacementId, unityadsId.isTest);
            unityads.loadedVideoAd();
            unityads.loadedRewardedVideoAd();
            console.log("Unity Setup");
        } else {
            console.log("No UnityAd?");
        }
    },
    showUnityVideoAd: function () {
        unityads.showVideoAd();
    },
    showUnityRewardedVideoAd: function () {
        unityads.showRewardedVideoAd();
    }
};
}catch(e){}

