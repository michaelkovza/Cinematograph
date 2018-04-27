const setImageArticleDescription = ({imageArticleArr}) => {

    for(let i = 0; i < imageArticleArr.length; i++) {
        let imageDescription = imageArticleArr[i].getAttribute('alt');

        imageArticleArr[i].insertAdjacentHTML('afterend',
            `<h3 class="photo-title">
                ${imageDescription}
             </h3>`
        );
    }
};

export default setImageArticleDescription;