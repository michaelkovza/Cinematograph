const disableScroll = (bool) => {
    bool ? window.onwheel = function (e) {
        e.preventDefault()
    } : window.onwheel = false;
};

export default disableScroll;