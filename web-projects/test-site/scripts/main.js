let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/houston rockets 2.png') {
      myImage.setAttribute('src','images/houston rockets 3.png');
    } else {
      myImage.setAttribute('src','images/houston rockets 2.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('Hao', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  if(!localStorage.getItem('Hao')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('Hao');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }