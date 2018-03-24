const showFooter = () => {

    let body = document.getElementsByClassName('js-body')[0];
    let showFooterButtonContainer = document.getElementsByClassName('js-show-footer-button-container')[0];
    let showFooterButton = showFooterButtonContainer.getElementsByClassName('js-show-footer-button')[0];
    let clientHeight = document.body.clientHeight;
    let windowInnerHeight = window.innerHeight;
    let footer = document.getElementsByClassName('js-footer')[0];

    let marginTop = windowInnerHeight - clientHeight + footer.offsetHeight;

    let bodyHeight = body.offsetHeight;
    let headerHeight = document.getElementsByClassName('header')[0].offsetHeight;
    let navigateContainerHeight = document.getElementsByClassName('navigate-container')[0].offsetHeight;
    let showFooterButtonHeight = showFooterButton.offsetHeight;

    let bodyDisableScroll = 'body--disable-scroll';

    if(navigateContainerHeight) {
        body.classList.add(bodyDisableScroll)
    }

    let translateNumber = bodyHeight - headerHeight - navigateContainerHeight - showFooterButtonHeight;


    let isFooterShown = false;


    showFooterButtonContainer.setAttribute("style", `margin-top: ${marginTop}px`);

    showFooterButton.addEventListener('mouseenter', () => {
        isFooterShown = true;
        body.style.transform = `translateY(-${translateNumber}px)`;

    });

    showFooterButtonContainer.addEventListener('mouseleave', () => {
        isFooterShown = false;
        body.style.transform = 'translateY(0)';

    });

    document.addEventListener('mousemove', (event) => {

      if(event.pageY > 670) {
          showFooterButtonContainer.classList.remove('show-footer-button-container--hidden');
      } else if(isFooterShown === false) {
          showFooterButtonContainer.classList.add('show-footer-button-container--hidden');
      }
    });

};

export default showFooter;