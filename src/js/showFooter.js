import disableScroll from './disableScroll';

import _ from 'lodash';

function scrollTo(element, to, duration) {
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    let animateScroll = function(){
        currentTime += increment;
        let val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

const showFooter = () => {
    let showFooterButtonContainer = document.getElementsByClassName('js-show-footer-button-container')[0];
    let showFooterButton = showFooterButtonContainer.getElementsByClassName('js-show-footer-button')[0];
    let clientHeight = document.body.clientHeight;
    let windowInnerHeight = window.innerHeight;
    let footer = document.getElementsByClassName('js-footer')[0];

    let isEdge = !isIE && !!window.StyleMedia;
    let isIE = /*@cc_on!@*/false || !!document.documentMode;

    let documentElement;

    if (isEdge || isIE) {
        documentElement = document.body;
    } else {
        documentElement = document.documentElement;
    }

    let marginTop = windowInnerHeight - clientHeight + footer.offsetHeight;
    console.log(marginTop);
    showFooterButtonContainer.setAttribute("style", `margin-top: ${marginTop}px`);

    showFooterButton.addEventListener('mouseover', function(event) {
        console.log("VNIZ");
        scrollTo(documentElement, documentElement.scrollHeight, 500);
    });

    showFooterButtonContainer.addEventListener('mouseleave',function(event)  {
        console.log("VVERH");
        scrollTo(documentElement, 0, 500);
    });


    document.addEventListener('mousemove', (event) => {
      if(event.pageY > 670) {
          showFooterButtonContainer.classList.remove('show-footer-button-container--hidden');
      } else {
          showFooterButtonContainer.classList.add('show-footer-button-container--hidden');
          disableScroll(true)
      }
    });

};

export default showFooter;