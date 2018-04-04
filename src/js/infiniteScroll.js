import $ from 'jquery';

let reviewsButton = document.getElementsByClassName('js-reviews-button')[0];
let articlesButton = document.getElementsByClassName('js-articles-button')[0];

let type = 'default';
let loadUrl;

if (reviewsButton !== undefined && articlesButton !== undefined) {
    type = 'articles';

    reviewsButton.addEventListener('click', () => {
        type = 'reviews';
    });

    articlesButton.addEventListener('click', () => {
        type = 'articles';
    });
}

const infiniteScroll = () => {


    let currentUrl = window.location.href;
    let countDefault = 1;
    let countReviews = 1;
    let countArticles = 1;

    if (!window.scrollData) {
        return
    }

    let navNumDefault;
    let navNumReviews;
    let navNumArticles;

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

        if(type === 'reviews') {
            navNumReviews = window.scrollData.reviews.loadSett.navNum;
            loadUrl = `${currentUrl}/index.php?PAGEN_${navNumReviews}=${countReviews++}`;
        }

        if(type === 'articles') {
            navNumArticles = window.scrollData.articles.loadSett.navNum;
            loadUrl = `${currentUrl}/index.php?PAGEN_${navNumArticles}=${countArticles++}`;
        }

        if (type === 'default') {
            navNumDefault = window.scrollData.default.loadSett.navNum;
            loadUrl = `${currentUrl}/index.php?PAGEN_${navNumDefault}=${countDefault++}`;
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

    getData();

    $(window).scroll(() => {
            if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                getData();
                loader.classList.remove(loaderHiddenClass);
            }

        }
    )
};

export default infiniteScroll;