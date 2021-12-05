//much java such script

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.getElementById('wow-theme').setAttribute('href', 'css/thm' + theme + '.css');
}

function loadTheme(){
  var storedTheme = localStorage.getItem('theme');
  document.getElementById('wow-theme').setAttribute('href', 'css/thm' + storedTheme + '.css');
}

function switchSet(){
  if (localStorage.flashcardset==1) {
    localStorage.setItem("flashcardset", "2");
    document.getElementById('currentSet').setAttribute('src', 'flashcards/set2.js');
    location.reload();
    return(0);
  }
  if (localStorage.flashcardset==2) {
    localStorage.setItem("flashcardset", "3");
    document.getElementById('currentSet').setAttribute('src', 'flashcards/set3.js');
    location.reload();
    return(0);
  }
  if (localStorage.flashcardset==3) {
    localStorage.setItem("flashcardset", "4");
    document.getElementById('currentSet').setAttribute('src', 'flashcards/set4.js');
    location.reload();
    return(0);
  }
  else {
    localStorage.setItem("flashcardset", "1");
    document.getElementById('currentSet').setAttribute('src', 'flashcards/set1.js');
    location.reload();
  }
}

function loadSet(){
  if (localStorage.flashcardset==1) {
    document.getElementById('currentSet').setAttribute('src', 'flashcards/set1.js');

  }
  if (localStorage.flashcardset==2) {
    document.getElementById('currentSet').setAttribute('src', 'flashcards/set2.js');

  }
  if (localStorage.flashcardset==3) {
    document.getElementById('currentSet').setAttribute('src', 'flashcards/set3.js');

  }
  if (localStorage.flashcardset==4) {
    document.getElementById('currentSet').setAttribute('src', 'flashcards/set4.js');

  }
  else {
    return(0);
  }
}

function firstVisit(){
  if (localStorage.prevVisit!=1) {
    document.getElementById('wow-theme').setAttribute('href', 'css/thm4.css');
    localStorage.setItem("theme", "4");
    localStorage.setItem("prevVisit", "1")
  }
}

function cookieCheck() {
  var cookie = document.getElementById('cookie');
  if (localStorage.getItem("accepted-cookies") !== "yes") {
    cookie.style.display = 'block';
  } else {
    cookie.style.display = 'none';
  }
}

function acceptCookies() {
  localStorage.setItem("accepted-cookies", "yes");
  setTimeout(() => { cookieCheck(); }, 3000);
}

function dismissCookie() {
  var cookie = document.getElementById('cookie');
  cookie.style.animationName="roll-2";
}

/*  var cookieBox = document.getElementById('cookie');
var flashcardset = "1";

function initSet(){
  if (flashcardset=="1"){
    document.write('<script type="text/javascript" src="flashcards/set1.js" id="currentSet"></script>')
  }
  if (flashcardset=="2"){
    document.write('<script type="text/javascript" src="flashcards/set2.js" id="currentSet"></script>')
  }
  if (flashcardset=="3"){
    document.write('<script type="text/javascript" src="flashcards/set3.js" id="currentSet"></script>')
  }
  if (flashcardset=="4"){
    document.write('<script type="text/javascript" src="flashcards/set4.js" id="currentSet"></script>')
  }
  else {
    document.write('<script type="text/javascript" src="flashcards/set1.js" id="currentSet"></script>')
  }
}
*/

function showSettingsPanel() {
  var settingsPanel = document.getElementById('settings-panel');
  var cover = document.getElementById('cover');
  settingsPanel.style.display='block';
  cover.style.display='block';
}

function hideSettingsPanel() {
  var settingsPanel = document.getElementById('settings-panel');
  var cover = document.getElementById('cover');
  settingsPanel.style.display='none';
  cover.style.display='none';
}

function showColorPicker() {
  var colorPicker = document.getElementById('color-picker');
  colorPicker.style.display="block";
}

function hideColorPicker() {
  var colorPicker = document.getElementById('color-picker');
  colorPicker.style.display="none";
}

function loadAttributes() {
  var theme = localStorage.getItem('theme');
  if (theme !== '5') {
    document.getElementById('color-picker').style.display="none";
  }
}

localStorage.setItem('Cookies', )
function addCookie() {

}
