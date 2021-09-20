const form = document.querySelector('form');
const input = document.querySelector('.input')
const error = document.querySelectorAll('.error-text');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputCheck();
})

function inputCheck() {
    const inputValue = input.value.trim();

    if(inputValue === "" || !validateEmail(inputValue)) {
        error.forEach(function(element) {
            element.classList.add('show');
        });
    }
    else {
        error.forEach(function(element) {
            element.classList.remove('show');
        });
    }
}

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}