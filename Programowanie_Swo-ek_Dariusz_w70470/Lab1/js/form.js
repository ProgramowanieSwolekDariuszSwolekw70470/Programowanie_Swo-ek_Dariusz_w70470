document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Formularz został poprawnie wypełniony!');
    }
});

document.getElementById('country').addEventListener('change', function() {
    const countryValue = this.value.trim();
    const provinceText = document.getElementById('provinceText');
    const provinceSelect = document.getElementById('provinceSelect');
    
    if (countryValue.toLowerCase() === 'polska') {
        provinceText.classList.add('hidden');
        provinceText.disabled = true;
        provinceSelect.classList.remove('hidden');
        provinceSelect.disabled = false;
    } else {
        provinceText.classList.remove('hidden');
        provinceText.disabled = false;
        provinceSelect.classList.add('hidden');
        provinceSelect.disabled = true;
    }
});

document.getElementById('provinceSelect').addEventListener('change', function() {
    const provinceValue = this.value.trim();
    const address = document.getElementById('address');
    const correspondenceAddress = document.getElementById('correspondenceAddress');
    if (provinceValue) {
        address.classList.remove('hidden');
        address.disabled = false;
        correspondenceAddress.disabled = false;
    } else {
        address.classList.add('hidden');
        address.disabled = true;
        correspondenceAddress.disabled = true;
    }
});

document.getElementById('provinceText').addEventListener('input', function() {
    const provinceValue = this.value.trim();
    const address = document.getElementById('address');
    const correspondenceAddress = document.getElementById('correspondenceAddress');
    if (provinceValue) {
        address.classList.remove('hidden');
        address.disabled = false;
        correspondenceAddress.disabled = false;
    } else {
        address.classList.add('hidden');
        address.disabled = true;
        correspondenceAddress.disabled = true;
    }
});

document.getElementById('sameAddress').addEventListener('change', function() {
    const isChecked = this.checked;
    const correspondenceAddressRow = document.getElementById('correspondenceAddressRow');
    const correspondenceAddress = document.getElementById('correspondenceAddress');
    if (isChecked) {
        correspondenceAddressRow.classList.add('hidden');
        correspondenceAddress.disabled = true;
    } else {
        correspondenceAddressRow.classList.remove('hidden');
        correspondenceAddress.disabled = false;
    }
});

function hasValue(input) {
    return input.value.trim() !== '';
}

function hasMinLength(input, minLength) {
    return input.value.length >= minLength;
}

function isValidEmail(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input.value);
}

function isStrongPassword(input) {
    return input.value.length >= 8;
}

function isAdult(input) {
    const birthDate = new Date(input.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
    }
    return age >= 18;
}

function passwordsMatch(password, confirmPassword) {
    return password.value === confirmPassword.value;
}

function validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const gender = document.getElementById('gender');
    const phone = document.getElementById('phone');
    const birthDate = document.getElementById('birthDate');
    const country = document.getElementById('country');
    const provinceText = document.getElementById('provinceText');
    const provinceSelect = document.getElementById('provinceSelect');
    const address = document.getElementById('address');

    if (!hasValue(firstName)) {
        alert('Proszę podać imię.');
        firstName.focus();
        return false;
    }
    if (!hasValue(lastName)) {
        alert('Proszę podać nazwisko.');
        lastName.focus();
        return false;
    }
    if (!isValidEmail(email)) {
        alert('Proszę podać poprawny adres email.');
        email.focus();
        return false;
    }
    if (!isStrongPassword(password)) {
        alert('Hasło musi zawierać co najmniej 8 znaków.');
        password.focus();
        return false;
    }
    if (!passwordsMatch(password, confirmPassword)) {
        alert('Hasła nie są zgodne.');
        confirmPassword.focus();
        return false;
    }
    if (!hasValue(gender)) {
        alert('Proszę wybrać płeć.');
        gender.focus();
        return false;
    }
    if (!hasValue(phone)) {
        alert('Proszę podać numer telefonu.');
        phone.focus();
        return false;
    }
    if (!hasValue(birthDate)) {
        alert('Proszę podać datę urodzenia.');
        birthDate.focus();
        return false;
    }
    if (!isAdult(birthDate)) {
        alert('Musisz być pełnoletni, aby się zarejestrować.');
        birthDate.focus();
        return false;
    }
    if (!hasValue(country)) {
        alert('Proszę podać kraj.');
        country.focus();
        return false;
    }
    if (country.value.toLowerCase() === 'polska') {
        if (!hasValue(provinceSelect)) {
            alert('Proszę wybrać województwo.');
            provinceSelect.focus();
            return false;
        }
    } else {
        if (!hasValue(provinceText)) {
            alert('Proszę podać województwo.');
            provinceText.focus();
            return false;
        }
    }
    if (!hasValue(address)) {
        alert('Proszę podać adres zamieszkania.');
        address.focus();
        return false;
    }

    return true;
}
