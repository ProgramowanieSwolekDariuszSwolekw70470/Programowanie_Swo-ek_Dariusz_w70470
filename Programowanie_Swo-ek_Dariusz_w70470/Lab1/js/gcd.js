function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function findGCD() {
    var num1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
    var num2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result2').textContent = "Podano nieprawidłowe wartości. Wprowadź liczby całkowite.";
        return;
    }

    var result = gcd(num1, num2);

    document.getElementById('result2').textContent = "Największy wspólny dzielnik: " + result;
}
