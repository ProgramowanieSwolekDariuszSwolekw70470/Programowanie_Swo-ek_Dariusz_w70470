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
  


  // const buttons = document.querySelectorAll('button');
  
  // buttons.forEach(button => {
  //   button.addEventListener('click', function() {
  //     // Resetuj kolor tła wszystkich przycisków
  //     buttons.forEach(btn => {
  //       btn.style.backgroundColor = ''; // Reset do domyślnego koloru
  //     });
  //     // Zmień kolor tła klikniętego przycisku
  //     this.style.backgroundColor = 'green';
  //   });
  // });


  function hideButton1() {
    var button1 = document.getElementById('button1');
    button1.style.display = 'none';
}

function addItem() {
  var input = document.getElementById('textInput');
  var value = input.value;

  if (value.trim() !== "") {
      var list = document.getElementById('itemList');
      var listItem = document.createElement('li');
      listItem.textContent = value;
      list.appendChild(listItem);

      input.value = ""; // Wyczyszczenie pola tekstowego po dodaniu elementu
  }
}

function addToTable() {
  var firstName = document.getElementById('firstNameInput').value;
  var lastName = document.getElementById('lastNameInput').value;

  if (firstName.trim() !== "" && lastName.trim() !== "") {
      var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
      var newRow = table.insertRow();

      var firstNameCell = newRow.insertCell(0);
      var lastNameCell = newRow.insertCell(1);

      firstNameCell.textContent = firstName;
      lastNameCell.textContent = lastName;

      document.getElementById('firstNameInput').value = "";
      document.getElementById('lastNameInput').value = "";
  }
}

function convertToFahrenheit() {
  var celsius = parseFloat(document.getElementById('temperatureInput').value);
  if (!isNaN(celsius)) {
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById('resul').textContent = celsius + " °C to " + fahrenheit.toFixed(2) + " °F";
  } else {
      document.getElementById('resul').textContent = "Proszę wpisać poprawną wartość.";
  }
}

function convertToCelsius() {
  var fahrenheit = parseFloat(document.getElementById('temperatureInput').value);
  if (!isNaN(fahrenheit)) {
      var celsius = (fahrenheit - 32) * 5/9;
      document.getElementById('resul').textContent = fahrenheit + " °F to " + celsius.toFixed(2) + " °C";
  } else {
      document.getElementById('resul').textContent = "Proszę wpisać poprawną wartość.";
  }
}