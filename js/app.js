// app.js

// alert('IS IT WORKING?');

// Use "document.querySelector()" for selecting a SINGLE tag
var catDiv = document.querySelector('#cat');

catDiv.innerHTML = 'Cat Div';

// catDiv.style.transition = '2s';
catDiv.style.fontSize = '30px';
catDiv.style.fontFamily = 'MS Comic Sans, san-serif';
catDiv.style.boxShadow = '5px 5px 5px black';
catDiv.style.marginBottom = '30px';

var dog = document.querySelector('h2');

// dog.style.transition = '2s';
dog.style.transform = 'rotate(135deg)';
dog.style.display = 'inline-block';


// Use "document.querySelectorAll()" for selecting MULTIPLE tags
var mice = document.querySelectorAll('.mouse');

mice.forEach(function (oneElement, i) {
  oneElement.innerHTML = 'Mouse #' + (i + 1);
  // oneElement.style.transition = '2s';
  oneElement.style.fontSize = '20px';
});
