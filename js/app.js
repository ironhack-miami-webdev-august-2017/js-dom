// app.js

// alert('IS IT WORKING?');

var myButton = document.querySelector('#cray');

myButton.onclick = function () {
  // Use "document.querySelector()" for selecting a SINGLE tag
  var catDiv = document.querySelector('#cat');

  catDiv.innerHTML = 'Cat Div';

  // catDiv.style.transition = '2s';
  catDiv.style.fontSize = '30px';
  catDiv.style.fontFamily = '"Comic Sans MS", san-serif';
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

  imgTag.setAttribute('src', 'https://media.giphy.com/media/Y9HyFb67xvpqo/giphy.gif');
}; // end myButton.onclick



// Create a new <a> tag object
var aTag = document.createElement('a');
aTag.setAttribute('href', 'http://example.com');
aTag.setAttribute('target', '_blank');
aTag.innerHTML = 'Visit Example.com';

// <a href="http://example.com" target="_blank"> Visit Example.com </a>

// Attach the new <a> tag to the body
var container = document.querySelector('#empty-container');
container.appendChild(aTag);

var body = document.querySelector('body');
var h1Tag = document.querySelector('h1');

body.removeChild(h1Tag);


// -----------------------------------------------------------------------

var imgTag = document.querySelector('img');

imgTag.onclick = function () {
  alert('Do you need a good dentist?');
};


// ------------------------------------------------------------------------

var btnTag = document.querySelector('#get-input');

btnTag.onclick = function () {
  var foodInput = document.querySelector('input');
  var h3Tag = document.querySelector('h3');

  if (foodInput.value === 'pizza') {
    h3Tag.innerHTML = 'I LOVE pizza!';
  }
  else if (foodInput.value === 'mayo') {
    h3Tag.innerHTML = 'Mayo is NOT a food, friend.';
  }
  else {
    h3Tag.innerHTML = foodInput.value + ' is fine, I guess.';
  }
};
