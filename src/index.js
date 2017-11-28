import './css/index.pcss';
import objectFitImages from 'object-fit-images';
import ShareToSocialNetworks from './js/ShareToSocialNetworks';


window.addEventListener('load', () => {
    objectFitImages();

    let  ShareToSocialNetworksOptions = {
        'buttonSelector': document.getElementsByClassName('share')
    };
    ShareToSocialNetworks(ShareToSocialNetworksOptions);

});

