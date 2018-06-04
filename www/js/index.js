function onDeviceReady() {

   // this is the complete list of currently supported params you can pass to the plugin (all optional)
var options = {
  message: 'share this', // not supported on some apps (Facebook, Instagram)
  subject: 'the subject', // fi. for email
  files: ['', ''], // an array of filenames either locally or remotely
  url: 'https://www.website.com/foo/#bar?a=b',
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title,
  appPackageName: 'com.apple.social.facebook' // Android only, you can provide id of the App you want to share with
};

var onSuccess = function(result) {
  alert("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  alert("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
};

var onError = function(msg) {
  alert("Sharing failed with message: " + msg);
};

window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
}

document.addEventListener("deviceready", onDeviceReady, false);
