const browserDetection = ({bodySelector}) => {
    let isFirefox = typeof InstallTrigger !== 'undefined';

    if(isFirefox) {
        bodySelector.classList.add('firefox')
    }
};

export default browserDetection;