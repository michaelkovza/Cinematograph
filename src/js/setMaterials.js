const setMaterials = ( {materialsVideoArr, materialsContentList, materialsVideoList}) => {

    for(let i = 0; i < materialsVideoArr.length; i++) {
        let materialsVideoTitle = materialsVideoArr[i].getAttribute('data-title');
        let materialsVideoDescription = materialsVideoArr[i].getAttribute('data-description');
        let materialsVideoArea = materialsVideoArr[i].getAttribute('data-area');
        let materailsVideoSrc = materialsVideoArr[i].getAttribute('src');

        materialsVideoArr[i].insertAdjacentHTML('afterEnd',
            `<h3 class="article-detailed__video-title"> 
                ${materialsVideoTitle}
             </h3>
             <span class="article-detailed__video-area">
                ${materialsVideoArea}
             </span>`
        );

        materialsContentList.insertAdjacentHTML('beforeend',
            `<li class="article-materials__content-item">
                <h5 class="article-materials__content-title">
                    ${materialsVideoTitle}
                </h5>
                <p class="article-materials__content-description">
                    ${materialsVideoDescription}
                </p>
            </li>`
        );

        materialsVideoList.insertAdjacentHTML('beforeend',
            `<li class="article-materials__video-item">
                <iframe src=${materailsVideoSrc}></iframe>
            </li>`
        );
    }
};

export default setMaterials;
