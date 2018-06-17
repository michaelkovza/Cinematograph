const setMaterials = ( {materialsVideoArr, materialsContentList, materialsVideoList, materials, materialsHiddenClass}) => {

    if(materials === undefined) {
        return
    }


    if(materialsVideoArr.length === 0) {
        materials.classList.add(materialsHiddenClass)
    }

    for(let i = 0; i < materialsVideoArr.length; i++) {
        let materialsVideoTitle = materialsVideoArr[i].getAttribute('data-title');
        let materialsVideoDescription = materialsVideoArr[i].getAttribute('data-description');
        let materialsVideoHref = materialsVideoArr[i].getAttribute('data-href');
        let materialsVideoArea = materialsVideoArr[i].getAttribute('data-area');
        let materailsVideoSrc = materialsVideoArr[i].getAttribute('src');

        materialsVideoArr[i].insertAdjacentHTML('afterEnd',
            `<h3 class="article-detailed__video-title"> 
                ${materialsVideoTitle}
             </h3>
             <a class="article-detailed__video-area" href=${materialsVideoHref} target="_blank">
                ${materialsVideoArea}
             </a>`
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
