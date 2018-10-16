const truncateTitles = ({ titles }) => {

    const noBreakSpace = '&nbsp;';
    const maxLength = 36;
    const maxHeight = 60;

    const quotesOpen = '«';
    const quotesClose = '»';

    const defaultOpenQuotes = '„';
    const defaultCloseQuotes = '“';

    const dots = '...';

    const truncate = (title, titleHeight, maxLength, maxHeight) => {

        let titleWithoutNoBreakSpaces = title.replace(noBreakSpace, ' ');


        if (titleHeight >= maxHeight && titleWithoutNoBreakSpaces.length > maxLength) {

            console.log(titleWithoutNoBreakSpaces);

            if(~titleWithoutNoBreakSpaces.indexOf(quotesOpen) && ~titleWithoutNoBreakSpaces.indexOf(defaultOpenQuotes)) {
                return titleWithoutNoBreakSpaces.slice(0, maxLength - 5) + dots + defaultCloseQuotes + quotesClose;
            }

            if(~titleWithoutNoBreakSpaces.indexOf(quotesOpen)) {
                return titleWithoutNoBreakSpaces.slice(0, maxLength - 4) + dots + quotesClose;
            }

            if(~titleWithoutNoBreakSpaces.indexOf(defaultOpenQuotes)) {
                return titleWithoutNoBreakSpaces.slice(0, maxLength - 4) + dots + defaultCloseQuotes;
            }

            return titleWithoutNoBreakSpaces.slice(0, maxLength - 3) + dots;
        }


        return titleWithoutNoBreakSpaces;
    };

    for(let i = 0; i < titles.length; i++) {
        let title = titles[i].innerHTML;
        let titleHeight = titles[i].getBoundingClientRect().height;
        titles[i].innerHTML = truncate(title, titleHeight, maxLength, maxHeight);
    }
};

export default truncateTitles;
