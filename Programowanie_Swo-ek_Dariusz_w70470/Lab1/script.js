//alert("Hello");
//console.log("Info do konsoli");

//Zad3
let a = 10;
let b = 20;
let c = 23.3;

console.log("Wynik dodawania to: ", a+b+c);

document.getElementById("Zad3d").innerHTML="Wynik dodawania to: "+ (a+b+c);
document.getElementById("Zad3o").innerHTML="Wynik odejmowania to: "+ (a-b-c);
document.getElementById("Zad3m").innerHTML="Wynik mnożenia to: "+ (a*b*c);
document.getElementById("Zad3dz").innerHTML="Wynik dzielenia to: "+ (a/b/c);

//Zad4

// for(let i = 0; i < 101; i+=2){
//     //if(i % 2 == 0){
//         console.log(i)
//     //}
// }

//Zad6

// n = prompt("Jak sie nazywasz? ");
// console.log(a);
// alert("Cześć "+a);

//Zad5


let a = parseFloat(prompt("Podaj długość boku 1: "));
let b = parseFloat(prompt("Podaj długość boku 2: "));
let c = parseFloat(prompt("Podaj długość boku 3: "));
let wynikElement = document.getElementById('wynik');


if (a + b > c && a + c > b && b + c > a) {
    let p = (a + b + c) / 2;
    let P = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    
    wynikElement.innerHTML = "<p>Można utworzyć trójkąt.</p>";
    wynikElement.innerHTML += "<p>Małe p wynosi: " + p + "</p>";
    wynikElement.innerHTML += "<p>Duże P wynosi: " + P + "</p>";
} else {
    wynikElement.innerHTML = "<p>Nie można utworzyć trójkąta.</p>";
}



