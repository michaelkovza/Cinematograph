const notifcation = () => {
    if (!('serviceWorker' in navigator)) {
        // Браузер не поддерживает сервис-воркеры.
        return;
    }

    if (!('PushManager' in window)) {
        // Браузер не поддерживает push-уведомления.
        return;
    }



    let key = btoa('BOTjgA6ekOZ_DQHOe88M_NsS5DqRg17IYmPdvXPqFw0Oe027vu0UuVXeUBXGjlOQ2N-2OF9ZL2gSDWy0cSuwbgY');

    console.log(key);

    console.log(urlBase64ToUint8Array(key));

    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/')
        ;
        const rawData = window.atob(base64);
        return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
    }

    function requestPermission() {
        return new Promise(function(resolve, reject) {
            const permissionResult = Notification.requestPermission(function(result) {
                // Поддержка устаревшей версии с функцией обратного вызова.
                resolve(result);
            });

            if (permissionResult) {
                permissionResult.then(resolve, reject);
            }
        })
            .then(function(permissionResult) {
                if (permissionResult !== 'granted') {
                    throw new Error('Permission not granted.');
                }
            });
    }

    requestPermission();

    function subscribeUserToPush() {
        return navigator.serviceWorker.register('secondIndex.js')
            .then(function(registration) {
                let subscribeOptions = {
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(key)
                };

                return registration.pushManager.subscribe(subscribeOptions);
            })
            .then(function(pushSubscription) {
                console.log('PushSubscription: ', JSON.stringify(pushSubscription));
                return pushSubscription;
            });
    }

    subscribeUserToPush();


};

export default notifcation;