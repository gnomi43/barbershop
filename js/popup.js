window.addEventListener('DOMContentLoaded', () => {


    let link = document.querySelector('.login-link'),
        popup = document.querySelector('.modal-login'),
        overlay = document.querySelector('.modal-overlay'),
        close = document.querySelector('.modal-close'),
        login = popup.querySelector('[name=login]'),
        form = popup.querySelector('form'),
        password = popup.querySelector('[name=password]'),
        storage = localStorage.getItem('login');

    link.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.add('modal-show');
        overlay.classList.add('modal-show-overlay');
        if(storage){
            login.value = storage;
        }
    });

    form.addEventListener('submit', function(event) {
        if(!login.value || !password.value){
            event.preventDefault();
            popup.classList.remove('modal-error');
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add('modal-error');
        } else{
            localStorage.setItem('login', login.value);
        }
    });

    close.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.remove('modal-show');
        overlay.classList.remove('modal-show-overlay');
        popup.classList.remove('modal-error');
    });

    window.addEventListener('keydown', (event) => {
        if(event.keyCode === 27){
            if(popup.classList.contains('modal-show')) {
            event.preventDefault();
            popup.classList.remove('modal-show');
            overlay.classList.remove('modal-show-overlay');
            popup.classList.remove('modal-error');
            }
        }
    });

    overlay.addEventListener('click', () => {
        popup.classList.remove('modal-show');
        overlay.classList.remove('modal-show-overlay');
        popup.classList.remove('modal-error');
    });

});