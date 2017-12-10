import './css/index.pcss';
import objectFitImages from 'object-fit-images';
import ShareToSocialNetworks from './js/ShareToSocialNetworks';
import createTerm from './js/createTerm';


window.addEventListener('load', () => {
    objectFitImages();

    let  ShareToSocialNetworksOptions = {
        'buttonSelector': document.getElementsByClassName('share')
    };
    ShareToSocialNetworks(ShareToSocialNetworksOptions);

    const createTermOptions = {
        'terms': document.getElementsByClassName('js-term'),
        'termContainer': document.getElementsByClassName('js-clarification-container')[0]

    };
    createTerm(createTermOptions);

});

