function addTwoNumbers() {
    var number1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
    var number2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

    if (isNaN(number1) || isNaN(number2)) {
        alert("Podano nieprawidłowe wartości. Upewnij się, że wprowadzasz liczby całkowite.");
        return;
    }

    var sum = number1 + number2;
    alert("Wynik dodawania: " + sum);

    document.getElementById('sumResult').textContent = "Wynik dodawania: " + sum;
}
