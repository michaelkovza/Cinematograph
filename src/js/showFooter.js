const showFooter = ({bodySelector, footerButtonContainerSelector, footerButtonSelector, footerSelector,footerButtonContainerHiddenClass }) => {

    if(!footerButtonContainerSelector) {
        return
    }

    let windowInnerHeight = window.innerHeight;


    if(windowInnerHeight <= 930) {
        footerButtonContainerSelector.classList.add(footerButtonContainerHiddenClass);
        return
    }

    let clientHeight = document.body.clientHeight;

    let marginTop = windowInnerHeight - clientHeight + footerSelector.offsetHeight;

    let bodyHeight = bodySelector.offsetHeight;
    let headerHeight = document.getElementsByClassName('header')[0].offsetHeight;
    let navigateContainerHeight = document.getElementsByClassName('navigate-container')[0].offsetHeight;
    let showFooterButtonHeight = footerButtonSelector.offsetHeight;

    let bodyDisableScroll = 'body--disable-scroll';

    if(navigateContainerHeight) {
        bodySelector.classList.add(bodyDisableScroll)
    }

    let translateNumber = bodyHeight - headerHeight - navigateContainerHeight - showFooterButtonHeight;

    let isFooterShown = false;

    footerButtonContainerSelector.setAttribute("style", `margin-top: ${marginTop}px`);

    footerButtonSelector.addEventListener('mouseenter', () => {
        isFooterShown = true;
        bodySelector.style.transform = `translateY(-${translateNumber}px)`;

    });

    footerButtonContainerSelector.addEventListener('mouseleave', () => {
        isFooterShown = false;
        bodySelector.style.transform = 'translateY(0)';

    });

    const toggleFooterClass = (footerButtonContainerSelector,mouseCords,event) => {
        if( event.pageY > mouseCords )  {
            footerButtonContainerSelector.classList.remove('show-footer-button-container--hidden')
        } else if (isFooterShown === false) {
            footerButtonContainerSelector.classList.add('show-footer-button-container--hidden')
        }
    };

    document.addEventListener('mousemove', (event) => {
      toggleFooterClass(footerButtonContainerSelector, 670, event);
    });

};

export default showFooter;