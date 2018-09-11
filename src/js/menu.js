const menu = ({menuOpenButton, menuCloseButton, menuSelector, hiddenClass, bgOverlaySelector, bgOverlayHiddenClass}) => {
  menuOpenButton.addEventListener('click', function () {
    menuSelector.classList.remove(hiddenClass);
    bgOverlaySelector.classList.remove(bgOverlayHiddenClass);
  });

  menuCloseButton.addEventListener('click', function () {
    menuSelector.classList.add(hiddenClass);
    bgOverlaySelector.classList.add(bgOverlayHiddenClass);
  });
}

export default menu;