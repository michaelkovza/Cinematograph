const truncateTitles = ({ titles }) => {

    const quotesOpen = '«';
    const quotesClose = '»';
    const dots = '...';

    const truncate = (title, maxLength) => {

        let titleWithoutSpaces = title.replace(/\s+/g, '');
        console.log(titleWithoutSpaces);

        if(titleWithoutSpaces.length > maxLength) {
            if(~titleWithoutSpaces.indexOf(quotesOpen)) {
                return title.slice(0, maxLength - 4) + dots + quotesClose;
            }
            return title.slice(0, maxLength - 5) + dots;
        }

        return title;
    };

    for(let i = 0; i < titles.length; i++) {
        let title = titles[i].innerHTML;
        titles[i].innerHTML = truncate(title, 36);
    }
};

export default truncateTitles;
