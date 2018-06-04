import _ from 'lodash';
import isMobile from './isMobile';

const reviewsButton = document.getElementsByClassName('js-reviews-button')[0];
const articlesButton = document.getElementsByClassName('js-articles-button')[0];

// везде тип default, если это не страница журнал

const types = {
  default: 'default',
  articles: 'articles',
  reviews: 'reviews'
};


let type = types.default;

if (reviewsButton !== undefined && articlesButton !== undefined) {
    type = types.articles;

    reviewsButton.addEventListener('click', () => {
        type = types.reviews;
    });

    articlesButton.addEventListener('click', () => {
        type = types.articles;
    });
}


const initDataPagination = (type, dataObj, scrollDataProp) => {
    if(!window.scrollData && !window.scrollData[scrollDataProp]) {
        return
    }

    dataObj[type] = {
        navNum: _.get(window.scrollData ,`${scrollDataProp}.loadSet.navNum`, null),
        endPage: _.get(window.scrollData ,`${scrollDataProp}.loadSet.endPage`, null),
        count: 1
    };

};

const infiniteScroll = () => {

    let currentUrl = window.location.href;

    let infinityContainer = document.getElementsByClassName('js-infinity-content')[0];

    if (!infinityContainer) {
        return
    }

    const showMoreButton = document.getElementsByClassName('js-show-more')[0];
    const showMoreButtonHiddenClass = 'show-more--hidden';

    let dataPagination = {};

    initDataPagination(types.default, dataPagination, 'default');
    initDataPagination(types.articles, dataPagination, 'articles');
    initDataPagination(types.reviews, dataPagination, 'reviews');

    let loader = document.getElementsByClassName('js-loader')[0];
    let loaderHiddenClass = 'loader--hidden';

    const getData = () => {

            let data = new FormData();
            data.append("AJAX", "Y");

            data.append("type", type);

            let xhr = new XMLHttpRequest();

            const getUrl = (type) => {

                dataPagination[type].count = ++dataPagination[type].count;


                if(dataPagination[type].count <= dataPagination[type].endPage) {
                    loader.classList.remove(loaderHiddenClass);
                    return `${currentUrl}/index.php?PAGEN_${dataPagination[type].navNum}=${dataPagination[type].count}`;
                } else {
                    showMoreButton.classList.add(showMoreButtonHiddenClass);
                }
                
                return null;
            };

            let loadUrl = null;

            switch (type) {
                case types.default:
                    loadUrl = getUrl(type);
                    break;
                case types.articles:
                    loadUrl = getUrl(type);
                    break;
                case types.reviews:
                    loadUrl = getUrl(type);
                    break;
                default: break;
            }

            if(loadUrl === null) {
                return
            }

        xhr.open("POST", loadUrl);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                let result = xhr.responseText;
                infinityContainer.insertAdjacentHTML('beforeend', result);
                loader.classList.add(loaderHiddenClass);
            }
        };

        xhr.send(data);
    };

    if(isMobile()) {
        showMoreButton.addEventListener('click', function () {
            getData();
        })
    }

    if(!isMobile()) {
        window.onscroll = function () {
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                getData();
            }
        }
    }
};

export default infiniteScroll;
