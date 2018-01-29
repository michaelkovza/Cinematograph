const showAlbumModalOverlay = ({albumPhotosSelector, albumModalOverlaySelector, albumModalOverlayImageSelector, albumModalOverlaySelectorClosedClass, prevButton, nextButton}) => {

    if(albumModalOverlaySelector === undefined) {
        return
    }



    const albumPhotosSelectorArr = Array.prototype.slice.call(albumPhotosSelector);

    const changePhotosByuButtons = (photoIndex, photosArr) => {


        nextButton.addEventListener('click', () => {

            if(photoIndex < photosArr.length-1) {

                let photoSrc = photosArr[++photoIndex].getAttribute('src');
                console.log(photoIndex, "NEXT");
                albumModalOverlayImageSelector.setAttribute('src', photoSrc);

                prevButton.removeAttribute('style');
            }

            if(photoIndex === photosArr.length-1) {
                console.log("sooqa");
                nextButton.style.visibility = 'hidden'
            }


        });

        prevButton.addEventListener('click', () => {

            if(photoIndex > 0) {

                let photoSrc = photosArr[--photoIndex].getAttribute('src');
                console.log(photoIndex, "PREV");
                albumModalOverlayImageSelector.setAttribute('src', photoSrc);

                nextButton.removeAttribute('style');
            }

            if(photoIndex === 0) {
                prevButton.style.visibility = 'hidden'
            }
        })

    };

    albumPhotosSelectorArr.forEach((item, index) => {
        item.addEventListener('click', () => {

            console.log(index);

            let albumPhotoSrc = item.getAttribute('src');
            albumModalOverlayImageSelector.setAttribute('src', albumPhotoSrc);
            albumModalOverlaySelector.classList.remove(albumModalOverlaySelectorClosedClass);

            changePhotosByuButtons(index, albumPhotosSelectorArr);

            if(index === 0) {
                prevButton.style.visibility = 'hidden';
                nextButton.removeAttribute('style');
            }

            if (index === (albumPhotosSelectorArr.length -1)) {
                nextButton.style.visibility = 'hidden';
                prevButton.removeAttribute('style');
            }
        })
    });

    albumModalOverlaySelector.addEventListener('click', (e) => {
        let target = e.target;

        if( target.className === 'album-modal-overlay js-album-modal-overlay') {
            albumModalOverlaySelector.classList.add(albumModalOverlaySelectorClosedClass);
        }

    });
};

export default showAlbumModalOverlay;