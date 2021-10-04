let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sexyBoy.jpg') {
        myImage.setAttribute ('src','images/hotBoy.png');
    } else {
        myImage.setAttribute ('src','images/sexyBoy.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Как звать, пидрила?');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Зацени, как я горяч, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Зацени, как я горяч, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
  