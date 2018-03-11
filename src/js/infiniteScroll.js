import $ from 'jquery';

let reviewsButton = document.getElementsByClassName('js-reviews-button')[0];
let articlesButton = document.getElementsByClassName('js-articles-button')[0];

let reviewsData = false;

if(reviewsButton !== undefined && articlesButton !== undefined ) {


    reviewsButton.addEventListener('click', () => {
        reviewsData = true;
    });

    articlesButton.addEventListener('click', () => {
        reviewsData = false;
    });
}

const infiniteScroll = () => {

    let currentUrl = window.location.href;
    console.log(currentUrl );

    let count = 1;

    //let navNum = window.scrollData.loadSett.navNum;

    let infinityContainer = document.getElementsByClassName('js-infinity-content')[0];

    if (!infinityContainer) {
        return
    }

    let loader = document.getElementsByClassName('js-loader')[0];
    let loaderHiddenClass = 'loader--hidden';



    const getData = () => {

        let data = new FormData();
        data.append("AJAX", "Y");

        if(reviewsData === true) {
            data.append("REVIEWS", "Y")
        }

        let xhr = new XMLHttpRequest();
        let loadUrl = "http://dilaradautova.myjino.ru/articles/index.php?PAGEN_1=1";

       // let loadUrl = `${currentUrl}/index.php?PAGEN_${navNum}=${count++}`;


        xhr.open("POST",loadUrl);

        xhr.onreadystatechange = function() {
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