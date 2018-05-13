const setImageArticleDescription = ({imageArticleArr}) => {

    for(let i = 0; i < imageArticleArr.length; i++) {
        let imageDescription = imageArticleArr[i].getAttribute('alt');
        let imageArea = imageArticleArr[i].getAttribute('data-area');
        let imageHref = imageArticleArr[i].getAttribute('data-href');

        imageArticleArr[i].insertAdjacentHTML('afterend',
            `<h3 class="photo-title">
                ${imageDescription}
             </h3>
            <a class="photo-area" href=${imageHref} target="_blank">
                ${imageArea}
             </a>
            `
        );
    }
};

export default setImageArticleDescription;