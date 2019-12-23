
// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://github.com/Lucialado2020/hostingEvaLucia/blob/master/images/pexels-photo-2773597.jpeg?raw=true') {
    myImage.setAttribute ('src','https://github.com/Lucialado2020/hostingEvaLucia/blob/gh-pages/images/bandera.png?raw=true');
  } else {
    myImage.setAttribute ('src','https://github.com/Lucialado2020/hostingEvaLucia/blob/master/images/pexels-photo-2773597.jpeg?raw=true');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Inserta tu nombre, por favor.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Londres te espera, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Londres te espera, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

//Gato
var catEl = document.getElementById("cat");

var startTime = new Date().getTime();    
var walkTheCat = function(){
    var currTime = new Date().getTime();
    var newLeft = ((currTime - startTime) / 1000) * 100;
    var newTop = 0//((currTime - startTime) / 1000) * 100;
    if (newLeft > 850){ startTime = currTime};
    console.log(newLeft);
    catEl.style.left = newLeft + "px";
    catEl.style.top = newTop + "px";
    window.requestAnimationFrame(walkTheCat);
};
walkTheCat();
