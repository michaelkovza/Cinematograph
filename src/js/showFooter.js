const showFooter = ({bodySelector, footerButtonContainerSelector, footerButtonSelector, footerSelector }) => {

    if(!footerButtonContainerSelector) {
        return
    }

    let clientHeight = document.body.clientHeight;
    let windowInnerHeight = window.innerHeight;

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

    document.addEventListener('mousemove', (event) => {

      if(event.pageY > 670 ) {
          footerButtonContainerSelector.classList.remove('show-footer-button-container--hidden');
      } else if (isFooterShown === false){
          footerButtonContainerSelector.classList.add('show-footer-button-container--hidden');
      }
    });

};

export default showFooter;