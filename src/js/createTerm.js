const createTerm = ({terms,termContainer}) => {

    for ( let i = 0; i < terms.length; i++) {
        let termTopCoords = terms[i].getBoundingClientRect().top + 'px';
        console.log(termTopCoords);
        let termTitle = terms[i].getAttribute('data-term-title');
        let termDescription = terms[i].getAttribute('data-term-description');

        let fragment = document.createDocumentFragment();
        let fragmentClarification = document.createElement('article');
        fragmentClarification.classList.add('clarification');
        fragmentClarification.style = `position:absolute;  top: ${termTopCoords}`;

        let fragmentClarificationTitle = document.createElement('h4');
        fragmentClarificationTitle.classList.add('clarification__title');
        fragmentClarificationTitle.innerHTML = termTitle;

        let fragmentClarificationDescription = document.createElement('p');
        fragmentClarificationDescription.classList.add('clarification__description');
        fragmentClarificationDescription.innerHTML = termDescription;

        fragmentClarification.appendChild(fragmentClarificationTitle);
        fragmentClarification.appendChild(fragmentClarificationDescription);


        fragment.appendChild(fragmentClarification);

        termContainer.appendChild(fragment);


    }

};

export default createTerm;