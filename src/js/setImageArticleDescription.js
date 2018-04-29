const setImageArticleDescription = ({imageArticleArr}) => {

    for(let i = 0; i < imageArticleArr.length; i++) {
        let imageDescription = imageArticleArr[i].getAttribute('alt');
        let imageArea = imageArticleArr[i].getAttribute('data-area');

        imageArticleArr[i].insertAdjacentHTML('afterend',
            `<h3 class="photo-title">
                ${imageDescription}
             </h3>
            <h4 class="photo-area">
                ${imageArea}
             </h4>
            `
        );
    }
};

export default setImageArticleDescription;