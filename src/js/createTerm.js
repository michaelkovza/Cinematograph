const createTerm = ({terms,termContainer}) => {

    for ( let i = 0; i < terms.length; i++) {

        let termTopCoords = terms[i].getBoundingClientRect().top + 'px';
        let termTitle = terms[i].getAttribute('data-term-title');
        let termDescription = terms[i].getAttribute('data-term-description');

        let fragment = document.createDocumentFragment();
        let fragmentClarification = document.createElement('article');
        fragmentClarification.classList.add('clarification');

        let fragmentClarificationTitle = document.createElement('h4');
        fragmentClarificationTitle.classList.add('clarification__title');
        fragmentClarificationTitle.innerHTML = termTitle;

        let fragmentClarificationDescription = document.createElement('p');
        fragmentClarificationDescription.classList.add('clarification__description');
        fragmentClarificationDescription.innerHTML = termDescription;

        fragmentClarification.appendChild(fragmentClarificationTitle);
        fragmentClarification.appendChild(fragmentClarificationDescription);

        terms[i].addEventListener('mouseover', () => {
            fragmentClarification.style  = `opacity: 1; position:absolute;  top: ${termTopCoords}`
        });

        terms[i].addEventListener('mouseout', () => {
            fragmentClarification.style  = `opacity: 0; position:absolute;  top: ${termTopCoords}`;
        });


        fragment.appendChild(fragmentClarification);

        termContainer.appendChild(fragment);




    }

};

export default createTerm;