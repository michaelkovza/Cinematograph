importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

let config = {
    apiKey: "AIzaSyCaP3DNqjHDcHBOlaQkQW1klPDE9PdcZOo",
    authDomain: "cinematograph-2c5b2.firebaseapp.com",
    databaseURL: "https://cinematograph-2c5b2.firebaseio.com/",
    projectId: "cinematograph-2c5b2",
    storageBucket: "cinematograph-2c5b2.appspot.com",
    messagingSenderId: "854998265633"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const options = {
      title: payload.notification.title,
      body: payload.notification.body
  };
  return self.registration.showNotification(options)
});