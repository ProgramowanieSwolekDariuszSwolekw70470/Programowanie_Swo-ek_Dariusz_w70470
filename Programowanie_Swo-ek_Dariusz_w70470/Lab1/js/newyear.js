// function countdown() {
//     for (let i = 10; i >= 0; i--) {
//       setTimeout(function() {
//         console.log(i === 0 ? "Happy New Year!" : i);
//       }, (10 - i) * 1000);
//     }
//   }
  
//   countdown();
  
// function countdown() {
//     let i = 10;
//     let intervalId = setInterval(function() {
//       if (i === 0) {
//         console.log("Happy New Year!");
//         clearInterval(intervalId);
//       } else {
//         console.log(i);
//         i--;
//       }
//     }, 1000);
//   }
  
//   countdown();

// function factorial(n) {
//     if (n < 0) {
//       return 'Silnia nie istnieje dla liczb ujemnych';
//     }
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     return n * factorial(n - 1);
    
//   }
  
// console.log(factorial(5));

// Funkcja, która uruchamia się przy otwarciu strony
// window.onload = function() {
//     checkAgeAndRedirect();
//   };
  
//   function checkAgeAndRedirect() {
//     var age = prompt("Proszę podać swój wiek:");
  
//     if (!age || isNaN(age)) {
//       alert("Proszę podać prawidłowy wiek.");
//       return;
//     }
  
//     age = parseInt(age, 10); 
  
//     if (age < 18) {
//       window.location.href = "https://www.google.pl/"; 
//     } else {
//       alert("Witamy na stronie dla dorosłych!");
//     }
//   }
  
// <!DOCTYPE html>
// <html lang="pl">
// <head>
// <meta charset="UTF-8">
// <title>Przyciski zmieniające kolor</title>
// <style>
//   button {
//     width: 100px;
//     height: 50px;
//     margin: 10px;
//   }
// </style>
// </head>
// <body>

// <button id="button1">Przycisk 1</button>
// <button id="button2">Przycisk 2</button>
// <button id="button3">Przycisk 3</button>

  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Resetuj kolor tła wszystkich przycisków
      buttons.forEach(btn => {
        btn.style.backgroundColor = ''; // Reset do domyślnego koloru
      });
      // Zmień kolor tła klikniętego przycisku
      this.style.backgroundColor = 'green';
    });
  });


