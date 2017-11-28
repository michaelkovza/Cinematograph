import './css/index.pcss';
import objectFitImages from 'object-fit-images';


window.addEventListener('load', () => {
    objectFitImages();


    let button = document.getElementsByClassName('share')[0];

    button.addEventListener('click', () => {
            share();
        }
    );

    const openWindow = (url) => {
        window.open(
            `http://twitter.com/share?text&url=${url}`,
            'Поделиться',
            'left=100,top=100,width=920,height=500,resizable=yes'
        )
    };

    const share = () => {
        const url = window.location.href;
        openWindow(url);
    };


});

