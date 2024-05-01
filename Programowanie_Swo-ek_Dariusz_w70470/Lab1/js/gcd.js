function gcd(a, b) {
    // Główny algorytm Euklidesa wykorzystujący rekurencję
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function findGCD() {
    // Pobranie liczb od użytkownika
    var num1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
    var num2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

    // Walidacja, czy podane wartości są liczbami
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result2').textContent = "Podano nieprawidłowe wartości. Wprowadź liczby całkowite.";
        return;
    }

    // Obliczenie NWD przy użyciu algorytmu Euklidesa
    var result = gcd(num1, num2);

    // Wyświetlenie wyniku
    document.getElementById('result2').textContent = "Największy wspólny dzielnik: " + result;
}

// Funkcja gcd jest zdefiniowana jako pomocnicza i używana w funkcji findGCD.
