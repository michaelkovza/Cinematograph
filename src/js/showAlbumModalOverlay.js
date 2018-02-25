const showAlbumModalOverlay = ({albumPhotosSelector, albumModalOverlaySelector, albumModalOverlayImageSelector, albumModalOverlaySelectorClosedClass, prevButton, nextButton}) => {

    if(albumModalOverlaySelector === undefined) {
        return
    }

    let photoIndex = null;

    const albumPhotosSelectorArr = Array.prototype.slice.call(albumPhotosSelector);

    const changePhotosByuButtons = (photosArr) => {


        nextButton.addEventListener('click', () => {


            if(photoIndex < photosArr.length-1) {

                let photoSrc = photosArr[++photoIndex].getAttribute('src');
                albumModalOverlayImageSelector.setAttribute('src', photoSrc);

                prevButton.removeAttribute('style');
            }

            if(photoIndex === photosArr.length-1) {
                nextButton.style.visibility = 'hidden'
            }


        });

        prevButton.addEventListener('click', () => {

            if(photoIndex > 0) {

                let photoSrc = photosArr[--photoIndex].getAttribute('src');
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

            photoIndex = index;

            let albumPhotoSrc = item.getAttribute('src');
            albumModalOverlayImageSelector.setAttribute('src', albumPhotoSrc);
            albumModalOverlaySelector.classList.remove(albumModalOverlaySelectorClosedClass);



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

    changePhotosByuButtons(albumPhotosSelectorArr);

    albumModalOverlaySelector.addEventListener('click', (e) => {
        let target = e.target;

        if( target.className === 'album-modal-overlay js-album-modal-overlay') {
            albumModalOverlaySelector.classList.add(albumModalOverlaySelectorClosedClass);
            photoIndex = null;
        }



    });
};

export default showAlbumModalOverlay;