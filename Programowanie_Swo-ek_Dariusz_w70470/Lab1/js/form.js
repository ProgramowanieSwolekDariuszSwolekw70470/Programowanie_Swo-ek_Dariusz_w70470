<script>
        document.getElementById('registrationForm').addEventListener('input', function(event) {
            validateField(event.target);
            handleFieldVisibility();
        });

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            var formIsValid = true;
            var elements = event.target.elements;

            for (var i = 0; i < elements.length; i++) {
                if (!validateField(elements[i])) {
                    formIsValid = false;
                }
            }

            if (formIsValid) {
                alert('Formularz został poprawnie wypełniony.');
            } else {
                event.preventDefault();
            }
        });

        document.getElementById('adresKorespondencyjnyCheckbox').addEventListener('change', function() {
            handleFieldVisibility();
        });

        function handleFieldVisibility() {
            var countryField = document.getElementById('country');
            var wojewodztwoTextField = document.getElementById('wojewodztwoText');
            var wojewodztwoSelectField = document.getElementById('wojewodztwoSelect');
            var adresZamieszkaniaField = document.getElementById('adresZamieszkania');
            var adresKorespondencyjnyCheckbox = document.getElementById('adresKorespondencyjnyCheckbox');
            var adresKorespondencyjnyField = document.getElementById('adresKorespondencyjny');

            if (countryField.value.trim().toLowerCase() === 'polska') {
                wojewodztwoTextField.classList.add('hidden');
                wojewodztwoTextField.removeAttribute('name');
                wojewodztwoSelectField.classList.remove('hidden');
                wojewodztwoSelectField.setAttribute('name', 'wojewodztwo');
                wojewodztwoSelectField.required = true;
            } else {
                wojewodztwoSelectField.classList.add('hidden');
                wojewodztwoSelectField.removeAttribute('name');
                wojewodztwoSelectField.required = false;
                wojewodztwoTextField.classList.remove('hidden');
                wojewodztwoTextField.setAttribute('name', 'wojewodztwo');
                wojewodztwoTextField.required = true;
            }

            if (countryField.value.trim() !== '') {
                document.querySelector('label[for="wojewodztwo"]').classList.remove('hidden');
            } else {
                document.querySelector('label[for="wojewodztwo"]').classList.add('hidden');
                if (wojewodztwoTextField) wojewodztwoTextField.classList.add('hidden');
                if (wojewodztwoSelectField) wojewodztwoSelectField.classList.add('hidden');
            }

            if (wojewodztwoTextField.value.trim() !== '' || wojewodztwoSelectField.value.trim() !== '') {
                adresZamieszkaniaField.classList.remove('hidden');
                document.querySelector('label[for="adresZamieszkania"]').classList.remove('hidden');
            } else {
                adresZamieszkaniaField.classList.add('hidden');
                document.querySelector('label[for="adresZamieszkania"]').classList.add('hidden');
            }

            if (adresKorespondencyjnyCheckbox.checked) {
                adresKorespondencyjnyField.classList.add('hidden');
                document.querySelector('label[for="adresKorespondencyjny"]').classList.add('hidden');
            } else {
                adresKorespondencyjnyField.classList.remove('hidden');
                document.querySelector('label[for="adresKorespondencyjny"]').classList.remove('hidden');
            }
        }

        function validateField(field) {
            var valid = true;
            var errorSpan = document.getElementById(field.id + 'Error');

            if (field.id === 'password' || field.id === 'confirmPassword') {
                valid = validatePassword(field, errorSpan);
                if (field.id === 'confirmPassword') {
                    valid = validateConfirmPassword(field, errorSpan);
                }
            } else if (field.id === 'email') {
                valid = validateEmail(field, errorSpan);
            } else if (field.id === 'fname' || field.id === 'lname' || field.id === 'country' || field.id === 'phone' || field.id === 'birthdate' || field.id === 'gender' || field.id === 'wojewodztwoText' || field.id === 'adresZamieszkania' || field.id === 'adresKorespondencyjny' || field.id === 'wojewodztwoSelect') {
                valid = checkValue(field, errorSpan);
            }

            if (field.id === 'birthdate') {
                valid = validateBirthdate(field, errorSpan);
            }

            return valid;
        }

        function checkValue(field, errorSpan) {
            if (!field.value.trim()) {
                errorSpan.textContent = 'To pole jest wymagane.';
                errorSpan.style.display = 'block';
                field.setCustomValidity('To pole jest wymagane.');
                return false;
            } else {
                errorSpan.style.display = 'none';
                field.setCustomValidity('');
                return true;
            }
        }

        function checkLength(field, minLength, errorSpan) {
            if (field.value.length < minLength) {
                errorSpan.textContent = 'To pole musi mieć co najmniej ' + minLength + ' znaków.';
                errorSpan.style.display = 'block';
                field.setCustomValidity('To pole musi mieć co najmniej ' + minLength + ' znaków.');
                return false;
            } else {
                errorSpan.style.display = 'none';
                field.setCustomValidity('');
                return true;
            }
        }

        function validateEmail(field, errorSpan) {
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(field.value)) {
                errorSpan.textContent = 'Wprowadź poprawny adres email.';
                errorSpan.style.display = 'block';
                field.setCustomValidity('Wprowadź poprawny adres email.');
                return false;
            } else {
                errorSpan.style.display = 'none';
                field.setCustomValidity('');
                return true;
            }
        }

        function validatePassword(field, errorSpan) {
            if (!checkLength(field, 8, errorSpan)) {
                return false;
            }
            var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(field.value)) {
                errorSpan.textContent = 'Hasło musi zawierać co najmniej jedną małą literę, jedną wielką literę, jedną cyfrę i jeden znak specjalny.';
                errorSpan.style.display = 'block';
                field.setCustomValidity('Hasło musi zawierać co najmniej jedną małą literę, jedną wielką literę, jedną cyfrę i jeden znak specjalny.');
                return false;
            } else {
                errorSpan.style.display = 'none';
                field.setCustomValidity('');
                return true;
            }
        }

        function validateConfirmPassword(field, errorSpan) {
            var password = document.getElementById('password').value;
            if (field.value !== password) {
                errorSpan.textContent = 'Hasła muszą być takie same.';
                errorSpan.style.display = 'block';
                field.setCustomValidity('Hasła muszą być takie same.');
                return false;
            } else {
                errorSpan.style.display = 'none';
                field.setCustomValidity('');
                return true;
            }
        }

        function validateBirthdate(field, errorSpan) {
            var birthdate = new Date(field.value);
            var today = new Date();
            var age = today.getFullYear() - birthdate.getFullYear();
            var monthDiff = today.getMonth() - birthdate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
                age--;
            }

            if (age < 18) {
                errorSpan.textContent = 'Musisz mieć ukończone 18 lat.';
                errorSpan.style.display = 'block';
                field.setCustomValidity('Musisz mieć ukończone 18 lat.');
                return false;
            } else {
                errorSpan.style.display = 'none';
                field.setCustomValidity('');
                return true;
            }
        }

        document.getElementById('phone').addEventListener('input', function(event) {
            var input = event.target;
            input.value = input.value.replace(/\D/g, '');
        });
    </script>
</body>
</html>
Wyjaśnienia:
Pole "Województwo": Zmieniamy atrybuty name i class elementów input i select, aby tylko jeden z nich był widoczny i aktywny w danym momencie.
Skrypt JavaScript: handleFieldVisibility zmienia widoczność i wymagane atrybuty pól w zależności od wartości pola "Kraj". Dodane zostało dynamiczne zarządzanie atrybutami name i required.
Ten kod powinien poprawnie zarządzać widocznością i typem pola "Województwo" oraz ograniczać wpisywanie wartości w polu "Telefon" do cyfr.

co musi byc wpisane w kraj zeby wyswietlily sie wojewodztwa?
ChatGPT
Aby wyświetliły się województwa, w polu "Kraj" musi być wpisane "Polska" (niezależnie od wielkości liter). Skrypt JavaScript sprawdza wartość tego pola i wyświetla pole "Województwo" tylko wtedy, gdy wartość to "Polska".

Skrypt JavaScript:
javascript
Skopiuj kod
document.getElementById('registrationForm').addEventListener('input', function(event) {
    validateField(event.target);
    handleFieldVisibility();
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var formIsValid = true;
    var elements = event.target.elements;

    for (var i = 0; i < elements.length; i++) {
        if (!validateField(elements[i])) {
            formIsValid = false;
        }
    }

    if (formIsValid) {
        alert('Formularz został poprawnie wypełniony.');
    } else {
        event.preventDefault();
    }
});

document.getElementById('adresKorespondencyjnyCheckbox').addEventListener('change', function() {
    handleFieldVisibility();
});

function handleFieldVisibility() {
    var countryField = document.getElementById('country');
    var wojewodztwoTextField = document.getElementById('wojewodztwoText');
    var wojewodztwoSelectField = document.getElementById('wojewodztwoSelect');
    var adresZamieszkaniaField = document.getElementById('adresZamieszkania');
    var adresKorespondencyjnyCheckbox = document.getElementById('adresKorespondencyjnyCheckbox');
    var adresKorespondencyjnyField = document.getElementById('adresKorespondencyjny');

    if (countryField.value.trim().toLowerCase() === 'polska') {
        wojewodztwoTextField.classList.add('hidden');
        wojewodztwoTextField.removeAttribute('name');
        wojewodztwoSelectField.classList.remove('hidden');
        wojewodztwoSelectField.setAttribute('name', 'wojewodztwo');
        wojewodztwoSelectField.required = true;
    } else {
        wojewodztwoSelectField.classList.add('hidden');
        wojewodztwoSelectField.removeAttribute('name');
        wojewodztwoSelectField.required = false;
        wojewodztwoTextField.classList.remove('hidden');
        wojewodztwoTextField.setAttribute('name', 'wojewodztwo');
        wojewodztwoTextField.required = true;
    }

    if (countryField.value.trim() !== '') {
        document.querySelector('label[for="wojewodztwo"]').classList.remove('hidden');
    } else {
        document.querySelector('label[for="wojewodztwo"]').classList.add('hidden');
        if (wojewodztwoTextField) wojewodztwoTextField.classList.add('hidden');
        if (wojewodztwoSelectField) wojewodztwoSelectField.classList.add('hidden');
    }

    if (wojewodztwoTextField.value.trim() !== '' || wojewodztwoSelectField.value.trim() !== '') {
        adresZamieszkaniaField.classList.remove('hidden');
        document.querySelector('label[for="adresZamieszkania"]').classList.remove('hidden');
    } else {
        adresZamieszkaniaField.classList.add('hidden');
        document.querySelector('label[for="adresZamieszkania"]').classList.add('hidden');
    }

    if (adresKorespondencyjnyCheckbox.checked) {
        adresKorespondencyjnyField.classList.add('hidden');
        document.querySelector('label[for="adresKorespondencyjny"]').classList.add('hidden');
    } else {
        adresKorespondencyjnyField.classList.remove('hidden');
        document.querySelector('label[for="adresKorespondencyjny"]').classList.remove('hidden');
    }
}

function validateField(field) {
    var valid = true;
    var errorSpan = document.getElementById(field.id + 'Error');

    if (field.id === 'password' || field.id === 'confirmPassword') {
        valid = validatePassword(field, errorSpan);
        if (field.id === 'confirmPassword') {
            valid = validateConfirmPassword(field, errorSpan);
        }
    } else if (field.id === 'email') {
        valid = validateEmail(field, errorSpan);
    } else if (field.id === 'fname' || field.id === 'lname' || field.id === 'country' || field.id === 'phone' || field.id === 'birthdate' || field.id === 'gender' || field.id === 'wojewodztwoText' || field.id === 'adresZamieszkania' || field.id === 'adresKorespondencyjny' || field.id === 'wojewodztwoSelect') {
        valid = checkValue(field, errorSpan);
    }

    if (field.id === 'birthdate') {
        valid = validateBirthdate(field, errorSpan);
    }

    return valid;
}

function checkValue(field, errorSpan) {
    if (!field.value.trim()) {
        errorSpan.textContent = 'To pole jest wymagane.';
        errorSpan.style.display = 'block';
        field.setCustomValidity('To pole jest wymagane.');
        return false;
    } else {
        errorSpan.style.display = 'none';
        field.setCustomValidity('');
        return true;
    }
}

function checkLength(field, minLength, errorSpan) {
    if (field.value.length < minLength) {
        errorSpan.textContent = 'To pole musi mieć co najmniej ' + minLength + ' znaków.';
        errorSpan.style.display = 'block';
        field.setCustomValidity('To pole musi mieć co najmniej ' + minLength + ' znaków.');
        return false;
    } else {
        errorSpan.style.display = 'none';
        field.setCustomValidity('');
        return true;
    }
}

function validateEmail(field, errorSpan) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(field.value)) {
        errorSpan.textContent = 'Wprowadź poprawny adres email.';
        errorSpan.style.display = 'block';
        field.setCustomValidity('Wprowadź poprawny adres email.');
        return false;
    } else {
        errorSpan.style.display = 'none';
        field.setCustomValidity('');
        return true;
    }
}

function validatePassword(field, errorSpan) {
    if (!checkLength(field, 8, errorSpan)) {
        return false;
    }
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(field.value)) {
        errorSpan.textContent = 'Hasło musi zawierać co najmniej jedną małą literę, jedną wielką literę, jedną cyfrę i jeden znak specjalny.';
        errorSpan.style.display = 'block';
        field.setCustomValidity('Hasło musi zawierać co najmniej jedną małą literę, jedną wielką literę, jedną cyfrę i jeden znak specjalny.');
        return false;
    } else {
        errorSpan.style.display = 'none';
        field.setCustomValidity('');
        return true;
    }
}

function validateConfirmPassword(field, errorSpan) {
    var password = document.getElementById('password').value;
    if (field.value !== password) {
        errorSpan.textContent = 'Hasła muszą być takie same.';
        errorSpan.style.display = 'block';
        field.setCustomValidity('Hasła muszą być takie same.');
        return false;
    } else {
        errorSpan.style.display = 'none';
        field.setCustomValidity('');
        return true;
    }
}

function validateBirthdate(field, errorSpan) {
    var birthdate = new Date(field.value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    if (age < 18) {
        errorSpan.textContent = 'Musisz mieć ukończone 18 lat.';
        errorSpan.style.display = 'block';
        field.setCustomValidity('Musisz mieć ukończone 18 lat.');
        return false;
    } else {
        errorSpan.style.display = 'none';
        field.setCustomValidity('');
        return true;
    }
}

document.getElementById('phone').addEventListener('input', function(event) {
    var input = event.target;
    input.value = input.value.replace(/\D/g, '');
});