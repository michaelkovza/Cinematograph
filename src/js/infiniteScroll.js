const infiniteScroll = () => {


    let newsList = document.getElementsByClassName('js-news-list')[0];
    let preloader = document.getElementsByClassName('js-preloader')[0];

    let url = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=1aa994764e434bc991ceb52fa10cdf5d';

    let req = new Request(url);

    const getData = () => {
        fetch(req)
            .then(
                (response) => {

                   response.json().then(data => {


                       for(let i = 0; i < data.articles.length; i++) {
                           console.log(data.articles[i]);
                           let item = document.createElement('li');
                           let itemArticle = document.createElement('h1');
                           itemArticle.classList.add('itemArticle');
                           itemArticle.innerText = data.articles[i].author + [i];
                           item.appendChild(itemArticle);
                           newsList.appendChild(item);
                           preloader.style.display = 'none';
                       }
                   })



                }
            )
    };
    

    getData();
    
    newsList.addEventListener('scroll',  () =>  {
        if (newsList.scrollTop + newsList.clientHeight >= newsList.scrollHeight) {
            preloader.style.display = 'block';
            getData()
        }
    })


};

export default infiniteScroll;