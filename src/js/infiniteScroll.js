import $ from 'jquery';

const infiniteScroll = () => {

    let newsList = document.getElementsByClassName('js-gallery-video-list')[0];

    if (newsList === undefined) {
        return
    }

    let loader = document.getElementsByClassName('js-loader')[0];
    let loaderHiddenClass = 'loader--hidden';




    let url = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=1aa994764e434bc991ceb52fa10cdf5d';
    let req = new Request(url);



    const getData = () => {
        fetch(req)
            .then(
                (response) => {

                    response.json().then(data => {


                        for (let i = 0; i < data.articles.length; i++) {
                            //console.log(data.articles[i]);
                            let item = document.createElement('li');
                            let itemLink = document.createElement('a');
                            let itemImage = document.createElement('img');
                            let itemTitleContainer = document.createElement('div');
                            let itemTitle = document.createElement('h3');
                            let itemMark = document.createElement('mark');
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

                        }
                    })


                }
            )
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