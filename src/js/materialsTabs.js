const materialsTabs = ({articlesTitle, reviewsTitle, articlesButton, reviewsButton, activeClass, materialsArticles, materialsReviews, materialsActiveClass}) => {

    if(articlesTitle === undefined) {
        return;
    }

    articlesButton.addEventListener('click', () => {
       reviewsTitle.classList.add(activeClass);
       articlesTitle.classList.remove(activeClass);
       materialsArticles.classList.add(materialsActiveClass);
       materialsReviews.classList.remove(materialsActiveClass);
    });

    reviewsButton.addEventListener('click', () => {
        articlesTitle.classList.add(activeClass);
        reviewsTitle.classList.remove(activeClass);
        materialsArticles.classList.remove(materialsActiveClass);
        materialsReviews.classList.add(materialsActiveClass);
    });
};

export default materialsTabs;