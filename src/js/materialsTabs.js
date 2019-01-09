const materialsTabs = (
    {
        articlesTitle,
        reviewsTitle,
        interviewsTitle,
        articlesButton,
        reviewsButton,
        interviewsButton,
        activeClass,
        materialsArticles,
        materialsReviews,
        materialsInterviews,
        materialsActiveClass
    }) => {
    if (articlesTitle === undefined) {
        return;
    }

    articlesButton.addEventListener('click', () => {
        reviewsTitle.classList.add(activeClass);
        interviewsTitle.classList.add(activeClass);
        materialsArticles.classList.add(materialsActiveClass);
        articlesTitle.classList.remove(activeClass);
        materialsReviews.classList.remove(materialsActiveClass);
        materialsInterviews.classList.remove(materialsActiveClass);
    });

    reviewsButton.addEventListener('click', () => {
        articlesTitle.classList.add(activeClass);
        interviewsTitle.classList.add(activeClass);
        materialsReviews.classList.add(materialsActiveClass);
        reviewsTitle.classList.remove(activeClass);
        materialsArticles.classList.remove(materialsActiveClass);
        materialsInterviews.classList.remove(materialsActiveClass);
    });

    interviewsButton.addEventListener('click', () => {
        reviewsTitle.classList.add(activeClass);
        articlesTitle.classList.add(activeClass);
        materialsInterviews.classList.add(materialsActiveClass);
        interviewsTitle.classList.remove(activeClass);
        materialsReviews.classList.remove(materialsActiveClass);
        materialsArticles.classList.remove(materialsActiveClass);
    });
};

export default materialsTabs;