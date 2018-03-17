import './css/index.pcss';
import shave from 'shave';
import objectFitImages from 'object-fit-images';
import ShareToSocialNetworks from './js/ShareToSocialNetworks';
import createTerm from './js/createTerm';
import infiniteScroll from './js/infiniteScroll';
import scrollToTop from './js/scrollToTop';
import showAlbumModalOverlay from './js/showAlbumModalOverlay';
import formValidation from "./js/formValidation";
import materialsTabs from "./js/materialsTabs";
import setMaterials from "./js/setMaterials";
import notification from "./js/notification";


window.addEventListener('load', () => {
    objectFitImages();

    shave('.card-text-shave', 200);

    const ShareToSocialNetworksOptions = {
        'buttonSelector': document.getElementsByClassName('share')
    };

    ShareToSocialNetworks(ShareToSocialNetworksOptions);

    const showAlbumModalOverlayOptions = {
      'albumPhotosSelector': document.getElementsByClassName('js-album-photo'),
      'albumModalOverlaySelector': document.getElementsByClassName('js-album-modal-overlay')[0],
      'albumModalOverlayImageSelector': document.getElementsByClassName('js-album-modal-overlay-image')[0],
      'albumModalOverlaySelectorClosedClass': 'album-modal-overlay--closed',
      'prevButton': document.getElementsByClassName('js-prev-button')[0],
      'nextButton': document.getElementsByClassName('js-next-button')[0]
    };

    showAlbumModalOverlay(showAlbumModalOverlayOptions);

    const formValidationOptions = {
        formEmailSelector: document.getElementsByClassName('js-input-email')[0],
        formStatusSelector: document.getElementsByClassName('js-form-status')[0],
        formSendButton: document.getElementsByClassName('js-form-button')[0],
        formStatusSelectorHiddenClass: 'form__status--hidden'
    };

    formValidation(formValidationOptions);

    const materialsTabsOptions = {
      articlesTitle: document.getElementsByClassName('js-articles-title')[0],
      reviewsTitle: document.getElementsByClassName('js-reviews-title')[0],
      articlesButton: document.getElementsByClassName('js-articles-button')[0],
      reviewsButton: document.getElementsByClassName('js-reviews-button')[0],
      activeClass: 'block-title--inversion'
    };

    materialsTabs(materialsTabsOptions);

    const setMaterialsOptions = {
      materialsVideoArr: document.getElementsByClassName('js-article-materials-video'),
      materialsContentList: document.getElementsByClassName('js-article-materials-content-list')[0],
      materialsVideoList: document.getElementsByClassName('js-article-materials-video-list')[0]
    };

    setMaterials(setMaterialsOptions);

    const createTermOptions = {
      'terms': document.getElementsByClassName('js-term'),
      'termContainer': document.getElementsByClassName('js-clarification-container')[0]

    };

    createTerm(createTermOptions);

    infiniteScroll();
    scrollToTop();
    notification();

});

