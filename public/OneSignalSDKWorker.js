if ('function' === typeof importScripts) {
  importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

  function onMessage(e) {
    console.log(e);
    // do some work here
  }

  addEventListener('message', onMessage);
}
