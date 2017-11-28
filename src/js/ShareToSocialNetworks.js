const ShareToSocialNetworks = ({buttonSelector}) => {

    for (let i = 0; i < buttonSelector.length; i++) {
        buttonSelector[i].addEventListener('click', () => {
                let id = buttonSelector[i].getAttribute('id');
                share(id);
            }
        );
    }


    const openWindow = (url,id) => {

        let socialUrl = '';

        switch (id) {
            case 'twitter':
                socialUrl = `http://twitter.com/share?text&url=${url}`;
                break;
            case 'vk':
                socialUrl = `http://vk.com/share.php?url=${url}`;
                break;
            case 'facebook':
                socialUrl = `https://www.facebook.com/sharer.php?u=${url}`;
                break;
        }


        window.open(
            socialUrl,
            'Поделиться',
            'left=100,top=100,width=920,height=500,resizable=yes'
        )
    };

    const share = (id) => {
        const url = window.location.href;
        openWindow(url,id);
    };
};

export default ShareToSocialNetworks;