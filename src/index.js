import $ from 'jquery';
import './css/index.pcss';
import objectFitImages from 'object-fit-images';
// import ShareToSocialNetworks from './js/ShareToSocialNetworks';
import createTerm from './js/createTerm';
import infiniteScroll from './js/infiniteScroll';
import scrollToTop from './js/scrollToTop';
import showAlbumModalOverlay from './js/showAlbumModalOverlay';
import formValidation from "./js/formValidation";
import materialsTabs from "./js/materialsTabs";
import setMaterials from "./js/setMaterials";
import notification from "./js/notification";
import showFooter from "./js/showFooter";
import browserDetection from "./js/browserDetection";
import setImageArticleDescription from './js/setImageArticleDescription';
import createTermCard from './js/createTermCard';
import {TrackPagePart} from "./js/track-page";
import createSlider from "./js/slider";
import menu from "./js/menu";

const counters = new TrackPagePart();

window.addEventListener('load', () => {
  counters.init();

  objectFitImages();

  const sliderSelector = $('.js-slider');
  createSlider(sliderSelector);

  window.addEventListener('resize', (e) => {
    if (e.target.innerWidth >= 1024) {
      createSlider(sliderSelector);
    }
  });

  // const ShareToSocialNetworksOptions = {
  //   'buttonSelector': document.getElementsByClassName('share')
  // };

  // ShareToSocialNetworks(ShareToSocialNetworksOptions);
  //
  const showAlbumModalOverlayOptions = {
    albumPhotosSelector: document.getElementsByClassName('js-album-photo'),
    albumModalOverlaySelector: document.getElementsByClassName('js-album-modal-overlay')[0],
    albumModalOverlayImageSelector: document.getElementsByClassName('js-album-modal-overlay-image')[0],
    albumModalOverlaySelectorClosedClass: 'album-modal-overlay--closed',
    albumModalOverlayHorizontalClass: 'album-modal-overlay--horizontal',
    albumModalOverlayImageHorizontalClass: 'album-modal-overlay__image--horizontal',
    prevButton: document.getElementsByClassName('js-prev-button')[0],
    nextButton: document.getElementsByClassName('js-next-button')[0]
  };

  showAlbumModalOverlay(showAlbumModalOverlayOptions);

  const formValidationOptions = {
    formEmailSelector: document.getElementsByClassName('js-input-email')[0],
    formStatusSelector: document.getElementsByClassName('js-form-status')[0],
    formSendButton: document.getElementsByClassName('js-form-button')[0],
    formStatusSelectorHiddenClass: 'form__status--hidden'
  };

  formValidation(formValidationOptions);

  const formValidationMobileOptions = {
    formEmailSelector: document.getElementsByClassName('js-input-email-mobile')[0],
    formStatusSelector: document.getElementsByClassName('js-form-status-mobile')[0],
    formSendButton: document.getElementsByClassName('js-form-button-mobile')[0],
    formStatusSelectorHiddenClass: 'form__status--hidden'
  };

  formValidation(formValidationMobileOptions);

  const materialsTabsOptions = {
    articlesTitle: document.getElementsByClassName('js-articles-title')[0],
    reviewsTitle: document.getElementsByClassName('js-reviews-title')[0],
    articlesButton: document.getElementsByClassName('js-articles-button')[0],
    reviewsButton: document.getElementsByClassName('js-reviews-button')[0],
    activeClass: 'block-title--inversion',
    materialsArticles: document.getElementsByClassName('js-materials-articles-list')[0],
    materialsReviews: document.getElementsByClassName('js-materials-reviews-list')[0],
    materialsActiveClass: 'articles__list--active'
  };

  materialsTabs(materialsTabsOptions);

  const setMaterialsOptions = {
    materialsVideoArr: document.getElementsByClassName('js-article-materials-video'),
    materialsContentList: document.getElementsByClassName('js-article-materials-content-list')[0],
    materialsVideoList: document.getElementsByClassName('js-article-materials-video-list')[0],
    materials: document.getElementsByClassName('js-article-materials')[0],
    materialsHiddenClass: 'article-materials--hidden'
  };

  setMaterials(setMaterialsOptions);

  const setImageArticleDescriptionOptions = {
    imageArticleArr: document.querySelectorAll('.js-article img')
  };

  setImageArticleDescription(setImageArticleDescriptionOptions);

   const createTermOptions = {
     terms: document.getElementsByClassName('js-term'),
     termContainer: document.getElementsByClassName('js-clarification-container')[0]
   };

   createTerm(createTermOptions);

  const showFooterOptions = {
    bodySelector: document.getElementsByClassName('js-body')[0],
    footerButtonContainerSelector: document.getElementsByClassName('js-show-footer-button-container')[0],
    footerButtonSelector: document.getElementsByClassName('js-show-footer-button')[0],
    footerSelector: document.getElementsByClassName('js-footer')[0],
    footerButtonContainerHiddenClass: 'show-footer-button-container--disable'
  };

  showFooter(showFooterOptions);


  const browserDetectionOptions = {
    bodySelector: document.getElementsByClassName('js-body')[0]
  };

  browserDetection(browserDetectionOptions);

  const createTermCardOptions = {
    termCard: document.getElementsByClassName('js-term-card')[0],
    terms: document.getElementsByClassName('js-term'),
    termCardDisableClass: 'term-card--disable'
  };

  createTermCard(createTermCardOptions);

  const menuOptions = {
    menuOpenButton: document.getElementsByClassName('js-open-menu-button')[0],
    menuCloseButton: document.getElementsByClassName('js-close-menu-button')[0],
    menuSelector: document.getElementsByClassName('js-mobile-navigate')[0],
    hiddenClass: 'mobile-navigate--hidden',
    bgOverlaySelector: document.getElementsByClassName('js-mobile-bg-overlay')[0],
    bgOverlayHiddenClass: 'mobile-bg-overlay--hidden'
  };

  menu(menuOptions);
  infiniteScroll();
  scrollToTop();

  if ('https://cinematograph.media/' === window.location.href) {
    notification();
  }
});

