if ('function' === typeof importScripts) {
  importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
  function onMessage(e) {
    console.log(e);
    // do some work here
  }

  addEventListener('message', onMessage);
}
