//alert("Hello");
//console.log("Info do konsoli");

// //Zad3
// let a = 10;
// let b = 20;
// let c = 23.3;

// console.log("Wynik dodawania to: ", a+b+c);

// document.getElementById("Zad3d").innerHTML="Wynik dodawania to: "+ (a+b+c);
// document.getElementById("Zad3o").innerHTML="Wynik odejmowania to: "+ (a-b-c);
// document.getElementById("Zad3m").innerHTML="Wynik mnożenia to: "+ (a*b*c);
// document.getElementById("Zad3dz").innerHTML="Wynik dzielenia to: "+ (a/b/c);

//Zad4

// for(let i = 0; i < 101; i+=2){
//     //if(i % 2 == 0){
//         console.log(i)
//     //}
// }

//Zad6

// function greetUser() {
//     var userName = prompt("Podaj swoje imię:");
//     if (userName) {
//         alert("Witaj, " + userName + "!");
//     } else {
//         alert("Nie podano imienia.");
//     }
// }
// window.onload = function() {
//     greetUser();
// };


//Zad5

function canFormTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

function calculateTriangleArea(a, b, c) {
    if (canFormTriangle(a, b, c)) {
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        document.getElementById('result').textContent = `Pole trójkąta wynosi: ${area.toFixed(2)}`;
    } else {
        console.log("Podane długości nie tworzą trójkąta.");
        document.getElementById('result').textContent = "Podane długości nie tworzą trójkąta.";
    }
}

//zad 7

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

//zad 8 
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

//zad9

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
