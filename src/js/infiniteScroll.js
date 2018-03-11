import $ from 'jquery';
import shave from 'shave';
//import fetch from "isomorphic-fetch";


const infiniteScroll = () => {

    //let newsList = document.getElementsByClassName('js-gallery-video-list')[0];

    let infinityContainer = document.getElementsByClassName('js-infinity-content')[0];


    if (!infinityContainer) {
        return
    }

    let loader = document.getElementsByClassName('js-loader')[0];
    let loaderHiddenClass = 'loader--hidden';

    console.log(window.location.href );


   //let url = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=1aa994764e434bc991ceb52fa10cdf5d';
   //let url = 'http://dilaradautova.myjino.ru/articles/index.php?PAGEN_1=1';
    //let url = 'http://www.json-generator.com/api/json/get/cfpcTBMUrS?indent=2';
    //let req = new Request(url);



    let item = '';
    let itemLink = '';
    let itemImageContainer = '';
    let itemImage = '';
    let itemTitleContainer = '';
    let itemTitle = '';
    let itemMark = '';
    let itemText = '';


    /*const getData = () => {
        fetch(req)
            .then(
                (response) => {

                    response.json().then(data => {


                        for (let i = 0; i < data.articles.length; i++) {
                            //console.log(data.articles[i]);

                            switch (newsList.id) {

                                case 'gallery-video-list':

                                    item = document.createElement('li');
                                    itemLink = document.createElement('a');
                                    itemImage = document.createElement('img');
                                    itemTitleContainer = document.createElement('div');
                                    itemTitle = document.createElement('h3');
                                    itemMark = document.createElement('mark');
                                    item.classList.add('gallery__item');
                                    item.classList.add('gel-layout__item');
                                    item.classList.add('gel-5-10-xl');
                                    itemLink.classList.add('gallery__large-card');
                                    itemLink.classList.add('large-card');
                                    itemImage.classList.add('large-card__image');
                                    itemTitleContainer.classList.add('large-card__title-container');
                                    itemTitle.classList.add('large-card__title');
                                    itemMark.classList.add('large-card__highlight');

                                    itemTitle.appendChild(itemMark);
                                    itemTitleContainer.appendChild(itemTitle);

                                    itemLink.appendChild(itemImage);
                                    itemLink.appendChild(itemTitleContainer);

                                    itemMark.innerText = data.articles[i].author + [i];

                                    itemLink.setAttribute('href', data.articles[i].url);
                                    itemImage.setAttribute('src', data.articles[i].urlToImage);

                                    item.appendChild(itemLink);
                                    newsList.appendChild(item);

                                    loader.classList.add(loaderHiddenClass);
                                    break;

                                case 'gallery-list':

                                    item = document.createElement('li');
                                    itemLink = document.createElement('a');
                                    itemImage = document.createElement('img');
                                    itemTitleContainer = document.createElement('div');
                                    itemTitle = document.createElement('h3');
                                    itemMark = document.createElement('mark');
                                    item.classList.add('gallery__item');
                                    item.classList.add('gel-layout__item');
                                    item.classList.add('gel-5-10-xl');
                                    itemLink.classList.add('gallery__large-card');
                                    itemLink.classList.add('large-card');
                                    itemImage.classList.add('large-card__image');
                                    itemTitleContainer.classList.add('large-card__title-container');
                                    itemTitle.classList.add('large-card__title');
                                    itemMark.classList.add('large-card__highlight');

                                    itemTitle.appendChild(itemMark);
                                    itemTitleContainer.appendChild(itemTitle);

                                    itemLink.appendChild(itemImage);
                                    itemLink.appendChild(itemTitleContainer);

                                    itemMark.innerText = data.articles[i].author + [i];

                                    itemLink.setAttribute('href', data.articles[i].url);
                                    itemImage.setAttribute('src', data.articles[i].urlToImage);

                                    item.appendChild(itemLink);
                                    newsList.appendChild(item);

                                    loader.classList.add(loaderHiddenClass);
                                    break;

                                case 'materials-articles-list':
                                    item = document.createElement('li');
                                    itemLink = document.createElement('a');
                                    itemImageContainer = document.createElement('div');
                                    itemImage = document.createElement('img');
                                    itemTitleContainer = document.createElement('article');
                                    itemTitle = document.createElement('h3');
                                    itemMark = document.createElement('mark');
                                    item.classList.add('articles__item');
                                    item.classList.add('gel-layout__item');
                                    item.classList.add('gel-2-10-xl');
                                    itemLink.classList.add('articles__card');
                                    itemLink.classList.add('card');
                                    itemImageContainer.classList.add('card__image-container');
                                    itemImage.classList.add('card__image');
                                    itemTitleContainer.classList.add('card__description');
                                    itemTitle.classList.add('card__title');
                                    itemMark.classList.add('card__highlight');

                                    itemTitle.appendChild(itemMark);
                                    itemTitleContainer.appendChild(itemTitle);

                                    itemImageContainer.appendChild(itemImage);


                                    itemLink.appendChild(itemImageContainer);
                                    itemLink.appendChild(itemTitleContainer);

                                    itemMark.innerText = data.articles[i].author + [i];

                                    itemLink.setAttribute('href', data.articles[i].url);
                                    itemImage.setAttribute('src', data.articles[i].urlToImage);

                                    item.appendChild(itemLink);
                                    newsList.appendChild(item);

                                    loader.classList.add(loaderHiddenClass);
                                    break;

                                case 'gallery-detailed-list':
                                    item = document.createElement('li');
                                    itemLink = document.createElement('a');
                                    itemImageContainer = document.createElement('div');
                                    itemImage = document.createElement('img');
                                    itemTitleContainer = document.createElement('article');
                                    itemTitle = document.createElement('h3');
                                    itemMark = document.createElement('mark');
                                    item.classList.add('gallery-detailed__item');
                                    item.classList.add('gel-layout__item');
                                    item.classList.add('gel-2-10-xl');
                                    itemLink.classList.add('gallery-detailed__card');
                                    itemLink.classList.add('card');
                                    itemImageContainer.classList.add('card__image-container');
                                    itemImage.classList.add('card__image');
                                    itemTitleContainer.classList.add('card__description');
                                    itemTitle.classList.add('card__title');
                                    itemMark.classList.add('card__highlight');

                                    itemTitle.appendChild(itemMark);
                                    itemTitleContainer.appendChild(itemTitle);

                                    itemImageContainer.appendChild(itemImage);


                                    itemLink.appendChild(itemImageContainer);
                                    itemLink.appendChild(itemTitleContainer);

                                    itemMark.innerText = data.articles[i].author + [i];

                                    itemLink.setAttribute('href', data.articles[i].url);
                                    itemImage.setAttribute('src', data.articles[i].urlToImage);

                                    item.appendChild(itemLink);
                                    newsList.appendChild(item);

                                    loader.classList.add(loaderHiddenClass);
                                    break;

                                case 'video-detailed-list':
                                    item = document.createElement('li');
                                    itemLink = document.createElement('a');
                                    itemImageContainer = document.createElement('div');
                                    itemImage = document.createElement('img');
                                    itemTitleContainer = document.createElement('article');
                                    itemTitle = document.createElement('h3');
                                    itemMark = document.createElement('mark');
                                    item.classList.add('video-detailed__item');
                                    item.classList.add('gel-layout__item');
                                    item.classList.add('gel-2-10-xl');
                                    itemLink.classList.add('video-detailed__card');
                                    itemLink.classList.add('card');
                                    itemImageContainer.classList.add('card__image-container');
                                    itemImage.classList.add('card__image');
                                    itemTitleContainer.classList.add('card__description');
                                    itemTitle.classList.add('card__title');
                                    itemMark.classList.add('card__highlight');

                                    itemTitle.appendChild(itemMark);
                                    itemTitleContainer.appendChild(itemTitle);

                                    itemImageContainer.appendChild(itemImage);


                                    itemLink.appendChild(itemImageContainer);
                                    itemLink.appendChild(itemTitleContainer);

                                    itemMark.innerText = data.articles[i].author + [i];

                                    itemLink.setAttribute('href', data.articles[i].url);
                                    itemImage.setAttribute('src', data.articles[i].urlToImage);

                                    item.appendChild(itemLink);
                                    newsList.appendChild(item);

                                    loader.classList.add(loaderHiddenClass);
                                    break;

                                case 'library-list':
                                    item = document.createElement('li');
                                    itemLink = document.createElement('a');
                                    itemImageContainer = document.createElement('div');
                                    itemImage = document.createElement('img');
                                    itemTitleContainer = document.createElement('article');
                                    itemTitle = document.createElement('h3');
                                    itemMark = document.createElement('mark');
                                    itemText = document.createElement('span');
                                    item.classList.add('library__item');
                                    item.classList.add('gel-layout__item');
                                    item.classList.add('gel-2-10-xl');
                                    itemLink.classList.add('card--with-border');
                                    itemLink.classList.add('card--book');
                                    itemLink.classList.add('card');
                                    itemImageContainer.classList.add('card__image-container');
                                    itemImage.classList.add('card__image');
                                    itemTitleContainer.classList.add('card__description');
                                    itemTitle.classList.add('card__title');
                                    itemTitle.classList.add('card__title--dark');
                                    itemMark.classList.add('card__highlight');
                                    itemText.classList.add('card__text');
                                    itemText.classList.add('card-text-shave');

                                    itemTitle.appendChild(itemMark);
                                    itemTitleContainer.appendChild(itemTitle);
                                    itemTitleContainer.appendChild(itemText);

                                    itemImageContainer.appendChild(itemImage);


                                    itemLink.appendChild(itemImageContainer);
                                    itemLink.appendChild(itemTitleContainer);

                                    itemMark.innerText = data.articles[i].author + [i];
                                    itemText.innerText = 'Masonry. Cascading grid layout library. Masonry works by placing elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall. You\'ve probably seen it in use all over the Internet. See masonry.desandro.com Masonry. Cascading grid layout library. Masonry works by placing elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall. You\'ve probably seen it in use all over the Internet. See masonry.desandro.com for complete docs and demos. for complete docs and demos.'

                                    itemLink.setAttribute('href', data.articles[i].url);
                                    itemImage.setAttribute('src', data.articles[i].urlToImage);

                                    item.appendChild(itemLink);
                                    newsList.appendChild(item);

                                    loader.classList.add(loaderHiddenClass);

                                    shave('.card-text-shave', 200);
                                    break;
                            }
                        }
                    })

                }
            )
    };*/



    const getData = () => {
        let data = new FormData();
        data.append("AJAX", "Y");

        let xhr = new XMLHttpRequest();
        xhr.crossDomain = true;
        xhr.withCredentials = true;


        xhr.open("POST", "http://dilaradautova.myjino.ru/articles/index.php?PAGEN_1=1");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log(xhr.responseText);

                let result = xhr.responseText;
                infinityContainer.insertAdjacentHTML('beforeend', result);
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