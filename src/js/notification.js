const notifcation = () => {
    if (!('serviceWorker' in navigator)) {
        // Браузер не поддерживает сервис-воркеры.
        return;
    }

    if (!('PushManager' in window)) {
        // Браузер не поддерживает push-уведомления.
        return;
    }

    let key = 'BP5xy530cEfpf1lqLLRg5IToSZu5or9K9yx6tkpjTlTN-UCebqxQdYIma0npq1GPB4pp-2wTPLpNJTD88UkJxrc';

    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
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

    function subscribeUserToPush() {
        return navigator.serviceWorker.register('sw.js', { scope: '/testnotifications/'} )
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

    const notifyApiUrl  = `${window.location.origin}/api/subscribeToNotify`;

    requestPermission()
        .then(() => subscribeUserToPush())
        .then(pushSubscription => fetch(notifyApiUrl, { method: 'post', body: {endpoint: pushSubscription}}))



};

export default notifcation;