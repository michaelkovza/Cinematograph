import isMobile from './isMobile';

const createTermCard = ({ termCard, terms, termCardDisableClass }) => {

    if(!isMobile()) {
        return
    }

    if(!termCard) {
        return
    }

    const termCardTitle = termCard.getElementsByClassName('term-card__title')[0];
    const termCardDescription = termCard.getElementsByClassName('term-card__description')[0];
    const termCardCloseButton = termCard.getElementsByClassName('term-card__close-button')[0];

    for(let i = 0; i < terms.length; i++) {
        terms[i].addEventListener('click', (e) => {
            let dataTermTitle = e.target.getAttribute('data-term-title');
            let dataTermDescription = e.target.getAttribute('data-term-description');
            termCardTitle.innerHTML = dataTermTitle;
            termCardDescription.innerHTML = dataTermDescription;
            termCard.classList.remove(termCardDisableClass);
        })
    }

    termCardCloseButton.addEventListener('click', () => {
        termCard.classList.add(termCardDisableClass);
    })

};

export default createTermCard;
