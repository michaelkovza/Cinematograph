import _ from 'lodash';
import isMobile from './isMobile';

const reviewsButton = document.getElementsByClassName('js-reviews-button')[0];
const articlesButton = document.getElementsByClassName('js-articles-button')[0];
const interviewsButton = document.getElementsByClassName('js-interviews-button')[0];

// везде тип default, если это не страница журнал

const types = {
    default: 'default',
    articles: 'articles',
    reviews: 'reviews',
    interviews: 'interviews',
};

let type = types.default;

if (reviewsButton !== undefined && articlesButton !== undefined && !interviewsButton !== undefined) {
    type = types.articles;

    reviewsButton.addEventListener('click', () => {
        type = types.reviews;
    });

    articlesButton.addEventListener('click', () => {
        type = types.articles;
    });

    interviewsButton.addEventListener('click', () => {
        type = types.interviews;
    });
}


const initDataPagination = (type, dataObj, scrollDataProp) => {
    if (!window.scrollData && !window.scrollData[scrollDataProp]) {
        return;
    }

    dataObj[type] = {
        navNum: _.get(window.scrollData ,`${scrollDataProp}.loadSet.navNum`, null),
        endPage: _.get(window.scrollData ,`${scrollDataProp}.loadSet.endPage`, null),
        count: 1
    };

};

const showShowMoreButton = (currentCount, endPageCount, showMoreButton, showMoreButtonShownClass) => {
    if (currentCount < endPageCount) {
        showMoreButton.classList.add(showMoreButtonShownClass);
    } else {
        showMoreButton.classList.remove(showMoreButtonShownClass);
    }
};

const infiniteScroll = () => {

    let currentUrl = window.location.href;

    let infinityContainer = document.getElementsByClassName('js-infinity-content')[0];
    let infinityContainerArticles = document.getElementById('materials-articles-list');
    let infinityContainerReviews = document.getElementById('materials-reviews-list');
    let infinityContainerInterviews = document.getElementById('materials-interviews-list');

    if (!infinityContainer) {
        return;
    }

    let dataPagination = {};

    initDataPagination(types.default, dataPagination, 'default');
    initDataPagination(types.articles, dataPagination, 'articles');
    initDataPagination(types.reviews, dataPagination, 'reviews');
    initDataPagination(types.interviews, dataPagination, 'interviews');

    const loader = document.getElementsByClassName('js-loader')[0];
    const loaderHiddenClass = 'loader--hidden';

    const showMoreButton = document.getElementsByClassName('js-show-more')[0];
    const showMoreButtonShownClass = 'show-more--shown';

    showShowMoreButton(
        dataPagination[type].count,
        dataPagination[type].endPage,
        showMoreButton,
        showMoreButtonShownClass
    );

    const getData = () => {
        let data = new FormData();
        data.append("AJAX", "Y");

        data.append("type", type);

        let xhr = new XMLHttpRequest();

        const getUrl = (type) => {
            dataPagination[type].count = ++dataPagination[type].count;

            showShowMoreButton(
                dataPagination[type].count,
                dataPagination[type].endPage,
                showMoreButton,
                showMoreButtonShownClass
            );

            if (dataPagination[type].count <= dataPagination[type].endPage) {
                loader.classList.remove(loaderHiddenClass);
                return `${currentUrl}/index.php?PAGEN_${dataPagination[type].navNum}=${dataPagination[type].count}`;
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
            case types.interviews:
                loadUrl = getUrl(type);
                break;
            default: break;
        }

        if (loadUrl === null) {
            return;
        }

        xhr.open("POST", loadUrl);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                let result = xhr.responseText;

                switch (type) {
                    case types.articles: {
                        infinityContainerArticles.insertAdjacentHTML('beforeend', result);
                        break;
                    }
                    case types.reviews: {
                        infinityContainerReviews.insertAdjacentHTML('beforeend', result);
                        break;
                    }
                    case types.interviews: {
                        infinityContainerInterviews.insertAdjacentHTML('beforeend', result);
                        break;
                    }
                    default: {
                        infinityContainer.insertAdjacentHTML('beforeend', result);
                    }
                }

                loader.classList.add(loaderHiddenClass);
            }
        };

        xhr.send(data);
    };

    if (isMobile()) {
        showMoreButton.addEventListener('click', function () {
            getData();
        });
    }

    if (!isMobile()) {
        window.onscroll = function () {
            const middleOfWindow = window.innerHeight / 2;

            switch (type) {
                case types.articles: {
                    if (infinityContainerArticles.getBoundingClientRect().bottom <= middleOfWindow) {
                        getData();
                    }

                    break;
                }
                case types.reviews: {
                    if (infinityContainerReviews.getBoundingClientRect().bottom <= middleOfWindow) {
                        getData();
                    }

                    break;
                }
                case types.interviews: {
                    if (infinityContainerInterviews.getBoundingClientRect().bottom <= middleOfWindow) {
                        getData();
                    }

                    break;
                }
                default: {
                    if (infinityContainer.getBoundingClientRect().bottom <= middleOfWindow) {
                        getData();
                    }
                }

            }
        };
    }
};

export default infiniteScroll;
