let loginButton = document.querySelector('.login-button');
let popupOpen = document.querySelector('.popup');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    evt.preventDefault();
    popupOpen.classList.toggle('popup-open');
};