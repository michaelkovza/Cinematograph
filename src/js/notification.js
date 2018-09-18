// var firebase = require("firebase/app");
// require("firebase/messaging");

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

const notifyApiUrl  = `${window.location.origin}/api/subscribeToNotify`;

const notifcation = () => {

  messaging.requestPermission().then(function () {
    console.log('Notification permission granted.');
    return messaging.getToken();

  })
    .then(function (token) {

      let data = new FormData();

      data.append("pushSubscription", token);

      let xhr = new XMLHttpRequest();
      xhr.open("POST", notifyApiUrl);
      xhr.send(data);

    })
    .catch(function (err) {
      console.log('Unable to get permission to notify.', err);
    });

  messaging.onMessage(function (payload) {
    console.log('onMessage', payload);

    let notification = new Notification(
      payload.notification.title, {
        body: payload.notification.body,
        click_action: payload.notification.click_action,
        icon: require('../images/notify-logo.png')
      }
    );

    notification.onclick = function (e) {
      e.preventDefault();
      window.open(payload.notification.click_action, '_blank')
    }
    /*new Notification('hello', {body: payload.notification.body})*/
  });
};

export default notifcation;