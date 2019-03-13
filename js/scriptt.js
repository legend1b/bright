function adSetter(){
// alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-7673728758769923/3431069587',
        interstitial: 'ca-app-pub-7673728758769923/5019483424'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-7673728758769923/3431069587',
        interstitial: 'ca-app-pub-7673728758769923/5019483424'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-7673728758769923/3431069587',
        interstitial: 'ca-app-pub-7673728758769923/5019483424'
    };
}

if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.TOP_LEFT, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.TOP_CENTER, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.TOP_RIGHT, 
    autoShow:true} );

if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.MIDDLE_LEFT, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.MIDDLE_CENTER, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.MIDDLE_RIGHT, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.BOTTOM_LEFT, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.BOTTOM_RIGHT, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.TOP_APP, 
    autoShow:true} );
	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.BOTTOM_APP, 
    autoShow:true} );

  if(window.AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );


}
  function onDeviceReady(){
  StatusBar.backgroundColorByHexString("#820035");
   alert("device ready");
      adSetter();
  }
function intershoo(){
	if(AdMob) AdMob.showInterstitial();
}

function intershow(){
	alert("device ready");
      adSetter();
}

function domLoaded(){
 document.addEventListener("deviceready", onDeviceReady, false);
}
