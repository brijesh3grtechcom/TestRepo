/*admobid = { // for Android
                    banner: 'ca-app-pub-3940256099942544/6300978111',
                    interstitial: 'ca-app-pub-3940256099942544/1033173712'
                };

*/
try{
	app.initAdMob()
}
catch(e){alert(e);}
////////////////////Show ad on trigger from app
var myVar ;
/////////////////on back presslast screen
function show_ad_onexit()
{
	//alert('show_ad_onexit');
 	//prepareInterstitial();
}

try{

var ad_units = {
    ios : { 
        banner:"agltb3B1Yi1pbmNyDAsSBFNpdGUY8fgRDA",
        interstitial:"6b7776d1017f482a92dff222f0d8fada"
    },
    android : {
        banner:"agltb3B1Yi1pbmNyDAsSBFNpdGUY8fgRDA",
        interstitial:"6b7776d1017f482a92dff222f0d8fada"
    }
};

//var adid = (/(android)/i.test(navigator.userAgent)) ? ad_units.android : ad_units.ios;
// preppare and load ad resource in background, e.g. at begining of game level
//if(MoPub) MoPub.prepareInterstitial( {adId:adid.interstitial, autoShow:false} );

}catch(e){/*alert('ERR mopub = '+e);*/}
////////////////////////////////////////////////////////
// ad colony implementation
try{

//alert('ad colony');

var adcolony_appId;
var interstitialAdZoneId;
var rewardedVideoAdZoneId;
//android
if (navigator.userAgent.match(/Android/i)) {//alert(navigator.userAgent.match(/Android/i));
	
  // working id
adsId = { 
    adcolony_appId = "app5897b3b5a1774b349f",
	interstitialAdZoneId = "vzb511270b2f8640e29f",
	rewardedVideoAdZoneId = "vzb511270b2f8640e29f"
	};
/*trial	
	adcolony_appId = "appac261d5336d744f4ac",
	interstitialAdZoneId = "vzd855d463434d479086",
	rewardedVideoAdZoneId = "vz58f9aa9efa6843118e"
*/	
}
//ios
else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	//alert(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i));
adsId = { 
	adcolony_appId = "app5897b3b5a1774b349f",
	interstitialAdZoneId = "vz06e8c32a037749699e7050",
	rewardedVideoAdZoneId = "vz06e8c32a037749699e7050"
	};
}
document.addEventListener("deviceready", function(){try{
	window.adcolony.setUp(adcolony_appId, interstitialAdZoneId, rewardedVideoAdZoneId);
	}catch(e){/*alert('initialisetation err='+e);*/}
}, false);

}catch(e){/*alert('ERR adcolony = '+e);*/}
//////////////////////////////////////////////////////////

// vungle implementation
try{ //trial app id android : "542f7bb4ba288b5605000028"
     //working app id var vungle_appId = "58f05759ae5daade25000013";
     
var vungle_appId = "58f05759ae5daade25000013";
document.addEventListener("deviceready", function(){
	window.vungle.setUp(vungle_appId);
}, false);

}catch(e){/*alert('ERR vungle = '+e);*/}

//////////////////////////////////////all in one

function showmyvideoad(){
try{ //alert('showmyvideoad');
//if(MoPub){ MoPub.showInterstitial();if(MoPub) MoPub.prepareInterstitial( {adId:adid.interstitial, autoShow:false} );}
//alert("1");
window.adcolony.showInterstitialAd();

if(window.adcolony.loadedInterstitialAd()){ //window.adcolony.showInterstitialAd();
}
else {
window.vungle.showRewardedVideoAd();
if(window.vungle.loadedRewardedVideoAd()){
window.vungle.showRewardedVideoAd();
}

}

}catch(e){/*alert("ERR showmyvideoad = "+e);*/}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//appnext implementation
/*var placement_id ="91105afa-f488-4189-9664-dab70f955796";

var  options = {
  "buttonText": "Install",
  "buttonColor": "#6AB344",
  "skipText": "skip",
  "categories": "Action,Adventure", 
  "postback": "posback",
  "backButtonCanClose": false,
  "autoPlay": true,
  "mute": false,
  "creativeType": "managed"
}

var interstitial = new Appnext.Interstitial(placement_id, options);
interstitial.loadAd();

var onSuccess = function(){
 console.log("Ad loaded  show");
 //alert("live Ad loaded + show");
}
var onError = function(response){
 console.log("Show ad error : "+response);
 //alert("appnext ad error : "+response);
}
try{
//setInterval(function(){interstitial.showAd(onSuccess,onError);},40000);
}catch(e){//alert("ERR setInterval="+e);
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ban_ad="";
var inte_ad="";

try{

  ban_ad="";
   inte_ad="";
   ban_ad = "ca-app-pub-9665141300585986/8820996757";
   inte_ad = "ca-app-pub-9665141300585986/4111595556";    
   

   {
   //alert("else packageid = "+ packageid );
   ban_ad="";
   inte_ad="";
   ban_ad = "ca-app-pub-5310972137369476/6268168771";
   inte_ad = "ca-app-pub-5310972137369476/7744901971";     
   }  
       
// admob trial id
   ban_ad = "ca-app-pub-3940256099942544/6300978111";
   inte_ad = "ca-app-pub-3940256099942544/1033173712"; 
   
	var admobid = {};
	if( /(android)/i.test(navigator.userAgent) ) { 
		admobid = { // for Android		
		banner: ban_ad,
		interstitial: inte_ad
		};
	} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
		admobid = { // for iOS
		banner: ban_ad,
		interstitial: inte_ad
		};
	} else {
		admobid = { // for Windows Phone
		banner: ban_ad,
		interstitial: inte_ad
		};
	}
	
   
    
function initApp() {
		if (! AdMob ) { alert( 'admob plugin not ready' ); return; 
        }

		initAd();
       
        // display the banner at startup       
        //prepareInterstitial();      //for Interstitial 
        //setInterval(function(){prepareInterstitial();},65000);
             if (packageid == "and_agnes_cinderella-princess-transform")
     {}
else{
        if(auto_compatible == "no")
        {//alert(auto_compatible);
        createBannerOfGivenSize();  // for given size specified bellow 300x50
        }
        else
        {//alert(auto_compatible);
        createSelectedBanner();   // for adwidth == devicewidth
        }
        }
        
        //setInterval(function(){AdMob.showInterstitial();},10000);
        
    }
    function initAd(){
alert("here2");
        var defaultOptions = {
            adSize: 'SMART_BANNER',
            //width: '300', // valid when set adSize 'CUSTOM'
            //height: '50', // valid when set adSize 'CUSTOM'
           // position: AdMob.AD_POSITION.BOTTOM_CENTER,
            position: AdMob.AD_POSITION.TOP_LEFT,
            overlap:'true',
            // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
            bgColor: 'black', // color name, or '#RRGGBB'
            // x: integer,		// valid when set position to 0 / POS_XY
            // y: integer,		// valid when set position to 0 / POS_XY
            //isTesting: true, // set to true, to receiving test ad for testing purpose
            // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
        };
        AdMob.setOptions( defaultOptions );
        registerAdEvents();
    }
    try{
      	//document.getElementById("ad300x50").innerHTML="";
		//document.getElementById("ad300x50").innerHTML = "<div align='center'><a href='http://click.buzzcity.net/click.php?partnerid=86825'><img src='http://ads.buzzcity.net/show.php?partnerid=86825&get=mweb' alt=''/></a></div>";
}catch(e){}


    // optional, in case respond to events or handle error
    function registerAdEvents() {
        // new events, with variable to differentiate: adNetwork, adType, adEvent
        document.addEventListener('onAdFailLoad', function(data){ 
       //if(MoPub){ MoPub.showInterstitial();if(MoPub) MoPub.prepareInterstitial( {adId:adid.interstitial, autoShow:false} );}
        });
        //alert(window.document.body.innerHTML);
       
        //document.getElementById("err").innerHTML="<button style='width:100%;'onclick='btn()'>HTML</button>";
        document.addEventListener('onAdLoaded', function(data){alert( 'onAdLoaded' );});
        document.addEventListener('onAdPresent', function(data){alert( 'onAdPresent' );});
        document.addEventListener('onAdLeaveApp', function(data){/*alert( 'onAdLeaveApp' );*/});
        document.addEventListener('onAdDismiss', function(data){/*alert( 'onAdDismiss' );*/});
    }
     //function btn(){alert(window.document.body.innerHTML);}

    // click button to call following functions
    function getSelectedAdSize() {
       // var i = document.getElementById("adSize").selectedIndex;
       // var items = document.getElementById("adSize").options;
       // return items[i].value;
    }
    function getSelectedPosition() {
       // var i = document.getElementById("adPosition").selectedIndex;
       // var items = document.getElementById("adPosition").options;
       // return parseInt( items[i].value );
    }
    function createSelectedBanner() {
    	//var overlap = document.getElementById('overlap').checked;
        //var offsetTopBar = document.getElementById('offsetTopBar').checked;
        var overlap = 'true';
        var offsetTopBar = 'false';
        AdMob.createBanner( {adId:admobid.banner, overlap:overlap, offsetTopBar:offsetTopBar, adSize: getSelectedAdSize(), position:getSelectedPosition()} );
    }
    function createBannerOfGivenSize() {
        //var w = document.getElementById('w').value;
        //var h = document.getElementById('h').value;

        var w = 300;
        var h = 60;

        AdMob.createBanner( {adId:admobid.banner,
                           adSize:'CUSTOM', width:w, height:h,
                           position:getSelectedPosition()} );
    }
    function showBannerAtSelectedPosition() {
        AdMob.showBanner( getSelectedPosition() );
    }
    function showBannerAtGivenXY() {
        //var x = document.getElementById('x').value;
        //var y = document.getElementById('y').value;
        var x = '';
        var y = '';
        AdMob.showBannerAtXY(x, y);
    }
    function prepareInterstitial() {try{
        //var autoshow = document.getElementById('autoshow').checked;
        var autoshow = 'true';        
        AdMob.prepareInterstitial({adId:admobid.interstitial, autoShow:autoshow});
        
        
        }catch(e){//alert('ERR='+e);
        }
    }
    function onResize(){
       // var s = document.getElementById('sizeinfo');
       // s.innerHTML = "web view: " + window.innerWidth + " x " + window.innerHeight;
    }
initApp();

var intad = "admob";

function aInterstitial(){

if(intad=="admob")
    { 

app.showAdmobInterstitial();
    intad = "vungle";
    try {
    clearInterval(myVar);
    }
    catch(e){}

    }
else if(intad=="adcol")
     {try{    
     
     if (packageid == "and_agnes_cinderella-princess-transform")
     {}
     else{
    //alert(" Adcol  -- " + 	window.adcolony.loadedInterstitialAd());    
        if(window.adcolony.loadedInterstitialAd())
          {
           window.adcolony.showInterstitialAd();
           intad = "vungle";
          }    
        else
         {
         //prepareInterstitial();
         //intad = "false";    
         //alert(" Vungle  -- " + window.vungle.loadedRewardedVideoAd());
         if(window.vungle.loadedRewardedVideoAd())
           {
            window.vungle.showRewardedVideoAd();
            intad = "admob";
           }
         else
           {
		app.showAdmobInterstitial();
           //interstitial.showAd(onSuccess,onError);
           intad = "vungle";
           }      
        }    
}
	}catch(e){ prepareInterstitial(); intad = "admob";}
    }
        
    else // show vungle 
    {    
    try{        
       //alert(" Vungle 1111  -- " + window.vungle.loadedRewardedVideoAd());
       if(window.vungle.loadedRewardedVideoAd())   
         {
         window.vungle.showRewardedVideoAd();
         intad = "adcol";
         }    
       else
          { 
          //alert(" Adcol 11111  -- " + 						      window.adcolony.loadedInterstitialAd());
           if(window.adcolony.loadedInterstitialAd())
            {    
            window.adcolony.showInterstitialAd();
            intad = "admob";       
            }
           else
            {
            prepareInterstitial();    
            intad = "vungle";
            }      
         }   
     }catch(e){prepareInterstitial();  intad = "admob";}    
    }
 }
if( timeradoff == "yes"  ) 
{}
else if(packageid == "and_storyplay")

{
	setInterval(function(){aInterstitial();},30000); 
}
else{

	setInterval(function(){aInterstitial();},50000); 

}

}catch(ed){
setInterval(function(){aInterstitial();},50000);
try{
myVar = setInterval(function(){aInterstitial();},10000);
}
catch (e) {}
}