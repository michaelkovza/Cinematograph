const browserDetection = ({ bodySelector }) => {
    let isFirefox = typeof InstallTrigger !== 'undefined';
    let isIE = !!document.documentMode;
    let isEdge = !isIE && !!window.StyleMedia;

    if (isFirefox) {
        bodySelector.classList.add('firefox');
    }

    if (isEdge) {
        bodySelector.classList.add('edge');
    }
};

export default browserDetection;
