const showAlbumModalOverlay = ({albumPhotosSelector, albumModalOverlaySelector, albumModalOverlayImageSelector, albumModalOverlaySelectorClosedClass, prevButton, nextButton}) => {

    if(albumModalOverlaySelector === undefined) {
        return
    }

    const albumPhotosSelectorArr = Array.prototype.slice.call(albumPhotosSelector);


    const changePhotosByuButtons = (photoIndex, photosArr) => {
        let currentImageIndex = photoIndex;

        nextButton.addEventListener('click', () => {
            if(currentImageIndex >= photosArr.length-1) return;

            let photoSrc = photosArr[++currentImageIndex].getAttribute('src');
            albumModalOverlayImageSelector.setAttribute('src', photoSrc);
        });

        prevButton.addEventListener('click', () => {
            if(currentImageIndex <= 0) return;
            let photoSrc = photosArr[--currentImageIndex].getAttribute('src');
            albumModalOverlayImageSelector.setAttribute('src', photoSrc);
        })

    };

    albumPhotosSelectorArr.forEach((item, index) => {
        item.addEventListener('click', () => {
            let albumPhotoSrc = item.getAttribute('src');
            albumModalOverlayImageSelector.setAttribute('src', albumPhotoSrc);
            albumModalOverlaySelector.classList.remove(albumModalOverlaySelectorClosedClass);
            changePhotosByuButtons(index, albumPhotosSelectorArr);
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