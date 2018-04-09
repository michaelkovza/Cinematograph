import $ from 'jquery';

let reviewsButton = document.getElementsByClassName('js-reviews-button')[0];
let articlesButton = document.getElementsByClassName('js-articles-button')[0];

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


const infiniteScroll = () => {

    let currentUrl = window.location.href;

    if (!window.scrollData) {
        return
    }

    let dataPagination = {
        [types.default]: {
            navNum: window.scrollData.default.loadSett.navNum,
            endPage: window.scrollData.default.endPage,
            count: 1
        },
        [types.articles]: {
            navNum: window.scrollData.articles.loadSett.navNum,
            endPage: window.scrollData.articles.endPage,
            count: 1
        },
        [types.reviews]: {
            navNum: window.scrollData.reviews.loadSett.navNum,
            endPage: window.scrollData.reviews.endPage,
            count: 1
        }
    };

    let infinityContainer = document.getElementsByClassName('js-infinity-content')[0];

    if (!infinityContainer) {
        return
    }

    let loader = document.getElementsByClassName('js-loader')[0];
    let loaderHiddenClass = 'loader--hidden';

    const getData = () => {

            let data = new FormData();
            data.append("AJAX", "Y");

            data.append("type", type);

            let xhr = new XMLHttpRequest();

            /*if (type === 'reviews' ) {
                let count = ++countReviews;

                if (count >= window.scrollData.reviews.endPage) {
                    loader.classList.add(loaderHiddenClass);
                    return
                }

                navNumReviews = window.scrollData.reviews.loadSett.navNum;
                loadUrl = `${currentUrl}/index.php?PAGEN_${navNumReviews}=${count}`;
                xhr.open("POST", loadUrl);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        let result = xhr.responseText;
                        infinityContainer.insertAdjacentHTML('beforeend', result);
                        loader.classList.add(loaderHiddenClass);
                    }
                };

                xhr.send(data);

            }*/

            /*if (type === 'articles') {
                let count = ++countArticles;

                if (count <= window.scrollData.articles.endPage) {
                    loader.classList.remove(loaderHiddenClass);

                    loadUrl = `${currentUrl}/index.php?PAGEN_${navNumArticles}=${count}`;

                }

            }*/

            const getUrl = (type) => {

                dataPagination[type].count = ++dataPagination[type].count;

                if(dataPagination[type].count <= dataPagination[type].endPage) {
                    loader.classList.remove(loaderHiddenClass);
                    return `${currentUrl}/index.php?PAGEN_${dataPagination[type].navNum}=${dataPagination[type].count}`;
                }
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

    $(window).scroll(() => {
            if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                getData();
            }

        }
    )
};

export default infiniteScroll;
