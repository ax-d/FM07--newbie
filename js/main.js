const form = document.querySelector('.content__form');
const formInput = document.querySelector('.form__input');
const formError = document.querySelector('.form-error');

form.setAttribute('novalidate', '');

formInput.addEventListener('blur', function (event) {
    if (formInput.validity.valid) {
        console.log("input is niet leeg");
        formError.textContent = '';
        formInput.style.backgroundImage = '';
        formInput.style.borderColor = 'hsl(0, 36%, 70%)';
        formInput.style.backgroundImage = 'none';
    } else
        showError();
});

form.addEventListener('submit', function(event) {
if (!formInput.validity.valid) {
    showError();
    event.preventDefault();
}
});

function showError() {
    formInput.style.borderColor = 'hsl(0, 93%, 68%)';
    formInput.style.backgroundImage = "url('../img/icon-error.svg')";
    
    if (formInput.validity.valueMissing) 
        formError.textContent = "Whoops! It looks like you forgot to add your email";
    else if (formInput.validity.patternMismatch)
        formError.textContent = "Please provide a valid email address";
}
