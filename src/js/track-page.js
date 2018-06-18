import throttle from 'lodash.throttle';

const ga = function (eventType, eventName, amount = 1) {
    /* eslint no-underscore-dangle: 0 */  // --> OFF
    /* eslint dot-notation: 0 */
    let _gaq = window['_gaq'] || [];
    console.info(`Sending trackEvent: ${eventType}, ${eventName}, количество: ${amount}`);
    _gaq.push(['_trackEvent', eventType, eventName]);
};

class TrackPagePart {
    constructor() {
        this.screen = document.getElementsByClassName('js-counters-scroll');
        this.clickedElement = ('js-counters-click');
        this.elementClass = document.getElementsByClassName(this.clickedElement);
        this.dataArray = [];
    }

    static delegate(e, className, callback) {
        let target = e.target;
        let currentTarget = e.currentTarget;

        while (target !== currentTarget) {
            if (target.classList.contains(className)) {
                if (callback instanceof Function) {
                    callback(target, e.type);
                } else {
                    throw Error(`${callback} is not a function`);
                }
            }
            target = target.parentNode;
        }
    }

    bindEvents() {
        const setCountersByScroll = this.setScreenCounters();
        const self = this;
        const setCountersByClick = this.setClickedCounters();
        window.addEventListener('scroll', throttle(setCountersByScroll.bind(this), 200));
        if (this.elementClass) {
            document.documentElement.addEventListener('click', function (e) {
                TrackPagePart.delegate(e, self.clickedElement, setCountersByClick.bind(self));
            });
        }
        setCountersByScroll();
    }

    setClickedCounters() {
        const self = this;
        this.addClickedToArray();

        return function (clickedElement) {
            self.dataArray.forEach(function (index) {
                // если элемент еще не нажали и элементы совпадают
                if (clickedElement === index.selector) {
                    index.status = true;
                    index.amount += 1;
                    ga(index.eventType, index.attr, index.amount);
                }
            });
        };
    }

    addClickedToArray() {
        let i = 0;
        let screenLength = this.elementClass.length;

        for (i; i < screenLength; i += 1) {
            this.addDataToArray(this.elementClass[i], 'клик');
        }
    }

    addDataToArray(element, eventType, scrolled) {
        this.dataArray.push({
            attr: element.getAttribute('data-ga-event'),
            eventType,
            topPosition: element.getBoundingClientRect().top + scrolled || null,
            bottomPosition: element.getBoundingClientRect().bottom + scrolled || null,
            selector: element,
            status: false,
            amount: 0
        });
    }

    setScreenCounters() {
        const self = this;
        this.addScreensToArray();

        return function () {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            let i = 0;
            let arrayLength = self.dataArray.length;

            for (i; i < arrayLength; i += 1) {
                if (scrolled + 200 > self.dataArray[i].topPosition && scrolled < self.dataArray[i].bottomPosition &&
                    !self.dataArray[i].status) {  // если находимся между верхушкой и низом элемента
                    ga(self.dataArray[i].eventType, self.dataArray[i].attr);
                    self.dataArray[i].status = true;

                    if (!self.dataArray[i].attr) {
                        throw new Error(`Установите аттрибут data-ga-event элементу: 
                        ${self.dataArray[i].selector.tagName}`);
                    }
                }
            }
        };
    }

    addScreensToArray() {
        if (this.screen === undefined || this.screen === null) return;

        let i = 0;
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        let screenLength = this.screen.length;

        for (i; i < screenLength; i += 1) {
            this.addDataToArray(this.screen[i], 'экраны', scrolled);
        }
    }

    init() {
        this.bindEvents();
    }
}

export { ga, TrackPagePart };
