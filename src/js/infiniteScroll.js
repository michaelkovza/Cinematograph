import _ from 'lodash';
import isMobile from './isMobile';
//
// window.scrollData = {
//     articles: {
//         loadSet: {
//             endPage: 2,
//             navNum: 2
//         }
//     },
//     interviews: {
//         loadSet: {
//             endPage: 1,
//             navNum: 4
//         }
//     },
//     reviews: {
//         loadSet: {
//             endPage: 4,
//             navNum: 3
//         }
//     }
// };

const middleOfWindow = window.innerHeight / 2;

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
let isFetching = false;

const showShowMoreButton = (
    type,
    currentCount,
    endPageCount,
    showMoreButton,
    showMoreButtonShownClass) => {
    if (currentCount < endPageCount) {
        showMoreButton.classList.add(showMoreButtonShownClass);
    } else {
        showMoreButton.classList.remove(showMoreButtonShownClass);
    }
};

const initDataPagination = (type, dataObj, scrollDataProp) => {
    if (!window.scrollData && !window.scrollData[scrollDataProp]) {
        return;
    }

    dataObj[type] = {
        navNum: _.get(window.scrollData, `${scrollDataProp}.loadSet.navNum`, null),
        endPage: _.get(window.scrollData, `${scrollDataProp}.loadSet.endPage`, null),
        count: 1
    };
};

const insertResult = (
    type,
    result,
    infinityContainerArticles,
    infinityContainerReviews,
    infinityContainerInterviews,
    infinityContainer
) => {
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
};

const infiniteScroll = () => {
    const currentUrl = window.location.href;

    const infinityContainer = document.getElementsByClassName('js-infinity-content')[0];
    const infinityContainerArticles = document.getElementById('materials-articles-list');
    const infinityContainerReviews = document.getElementById('materials-reviews-list');
    const infinityContainerInterviews = document.getElementById('materials-interviews-list');

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
        type,
        dataPagination[type].count,
        dataPagination[type].endPage,
        showMoreButton,
        showMoreButtonShownClass
    );

    if (reviewsButton && articlesButton && interviewsButton) {
        type = types.articles;

        showShowMoreButton(
            type,
            dataPagination[type].count,
            dataPagination[type].endPage,
            showMoreButton,
            showMoreButtonShownClass
        );

        reviewsButton.addEventListener('click', () => {
            type = types.reviews;
            isFetching = false;

            showShowMoreButton(
                type,
                dataPagination[type].count,
                dataPagination[type].endPage,
                showMoreButton,
                showMoreButtonShownClass
            );
        });

        articlesButton.addEventListener('click', () => {
            type = types.articles;
            isFetching = false;

            showShowMoreButton(
                type,
                dataPagination[type].count,
                dataPagination[type].endPage,
                showMoreButton,
                showMoreButtonShownClass
            );
        });

        interviewsButton.addEventListener('click', () => {
            type = types.interviews;
            isFetching = false;

            showShowMoreButton(
                type,
                dataPagination[type].count,
                dataPagination[type].endPage,
                showMoreButton,
                showMoreButtonShownClass
            );
        });
    }

    const getData = () => {
        isFetching = true;
        let data = new FormData();
        data.append('AJAX', 'Y');
        data.append('type', type);

        let xhr = new XMLHttpRequest();

        const getUrl = (type) => {

            dataPagination[type].count = ++dataPagination[type].count;

            if (isMobile()) {
                showShowMoreButton(
                    type,
                    dataPagination[type].count,
                    dataPagination[type].endPage,
                    showMoreButton,
                    showMoreButtonShownClass
                );
            }

            if (dataPagination[type].count <= dataPagination[type].endPage) {
                loader.classList.remove(loaderHiddenClass);
                return `${currentUrl}/index.php?PAGEN_${dataPagination[type].navNum}=${dataPagination[type].count}`;
                // return 'https://cinematograph.media/journal//index.php?PAGEN_' + dataPagination[type].navNum + '=' + dataPagination[type].count;
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
            default:
                break;
        }

        if (!loadUrl) {
            return;
        }

        xhr.open('POST', loadUrl);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                let result = xhr.responseText;

                insertResult(
                    type,
                    result,
                    infinityContainerArticles,
                    infinityContainerReviews,
                    infinityContainerInterviews,
                    infinityContainer
                );

                isFetching = false;
                loader.classList.add(loaderHiddenClass);
            }
        };

        xhr.send(data);
    };

    if (isMobile()) {
        showMoreButton.addEventListener('click', function () {
            getData();
        });

        return;
    }

    function requestOnScroll(infinityContainer, middleOfWindow) {
        if (infinityContainer.getBoundingClientRect().bottom <= middleOfWindow) {

            if (isFetching) {
                return null;
            }

            getData();
        }

        return null;
    }

    window.onscroll = function () {
        switch (type) {
            case types.articles: {
                requestOnScroll(infinityContainerArticles, middleOfWindow);
                break;
            }
            case types.reviews: {
                requestOnScroll(infinityContainerReviews, middleOfWindow);
                break;
            }
            case types.interviews: {
                requestOnScroll(infinityContainerInterviews, middleOfWindow);
                break;
            }
            default: {
                requestOnScroll(infinityContainer, middleOfWindow);
            }
        }
    };
};

export default infiniteScroll;
