function greetUser() {
    var userName = prompt("Podaj swoje imię:");
    if (userName) {
        alert("Witaj, " + userName + "!");
    } else {
        alert("Nie podano imienia.");
    }
}

window.onload = function() {
    greetUser();
};