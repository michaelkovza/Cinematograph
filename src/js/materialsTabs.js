const materialsTabs = ({articlesTitle, reviewsTitle, articlesButton, reviewsButton, activeClass}) => {
    if(articlesTitle === undefined) {
        return;
    }

    articlesButton.addEventListener('click', () => {
       reviewsTitle.classList.add(activeClass);
       articlesTitle.classList.remove(activeClass);
    });

    reviewsButton.addEventListener('click', () => {
        articlesTitle.classList.add(activeClass);
        reviewsTitle.classList.remove(activeClass);
    });
};

export default materialsTabs;