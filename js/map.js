window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let linkMap = document.querySelector('.contacts-button-map'),
        popupMap = document.querySelector('.modal-map'),
        overlay = document.querySelector('.modal-overlay'),
        close = popupMap.querySelector('.modal-close');

    linkMap.addEventListener('click', (event) => {
        event.preventDefault();
        popupMap.classList.add('modal-show');
        overlay.classList.add('modal-show-overlay');
    });

    close.addEventListener('click', (event) => {
        event.preventDefault();
        popupMap.classList.remove('modal-show');
        overlay.classList.remove('modal-show-overlay');
    });
    
    window.addEventListener('keydown', (event) => {
        if(event.keyCode === 27){
            if(popupMap.classList.contains('modal-show')) {
            event.preventDefault();
            popupMap.classList.remove('modal-show');
            overlay.classList.remove('modal-show-overlay');
            }
        }
    });

    overlay.addEventListener('click', () => {
        popupMap.classList.remove('modal-show');
        overlay.classList.remove('modal-show-overlay');
    });
});