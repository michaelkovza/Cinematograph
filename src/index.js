import './css/index.pcss';
import objectFitImages from 'object-fit-images';
import ShareToSocialNetworks from './js/ShareToSocialNetworks';
import createTerm from './js/createTerm';
import infiniteScroll from './js/infiniteScroll';
import scrollToTop from './js/scrollToTop';
import showAlbumModalOverlay from './js/showAlbumModalOverlay';


window.addEventListener('load', () => {
    objectFitImages();

    const ShareToSocialNetworksOptions = {
        'buttonSelector': document.getElementsByClassName('share')
    };

    ShareToSocialNetworks(ShareToSocialNetworksOptions);

    const createTermOptions = {
        'terms': document.getElementsByClassName('js-term'),
        'termContainer': document.getElementsByClassName('js-clarification-container')[0]

    };

    createTerm(createTermOptions);

    const showAlbumModalOverlayOptions = {
      'albumPhotosSelector': document.getElementsByClassName('js-album-photo'),
      'albumModalOverlaySelector': document.getElementsByClassName('js-album-modal-overlay')[0],
      'albumModalOverlayImageSelector': document.getElementsByClassName('js-album-modal-overlay-image')[0],
      'albumModalOverlaySelectorClosedClass': 'album-modal-overlay--closed',
      'prevButton': document.getElementsByClassName('js-prev-button')[0],
      'nextButton': document.getElementsByClassName('js-next-button')[0]
    };

    showAlbumModalOverlay(showAlbumModalOverlayOptions);

    infiniteScroll();
    scrollToTop();

});

