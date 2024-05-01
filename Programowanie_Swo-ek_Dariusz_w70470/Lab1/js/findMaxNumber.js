function findMaxNumber() {
    var num1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
    var num2 = parseFloat(prompt("Podaj drugą liczbę:"));
    var num3 = parseFloat(prompt("Podaj trzecią liczbę:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Podano nieprawidłową wartość. Wprowadź liczby.");
        document.getElementById('result1').textContent = "Podano nieprawidłową wartość. Wprowadź liczby.";
        return;
    }

    var maxNumber = Math.max(num1, num2, num3);
    console.log("Największa liczba to:", maxNumber);
    document.getElementById('result1').textContent = "Największa liczba to: " + maxNumber;
}
