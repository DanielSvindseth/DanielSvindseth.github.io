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

function cookieCheck(){
  var cookieBox = document.getElementById('cookies-warning');
  if (localStorage.getItem("accepted-cookies") !== "yes") {
    cookieBox.style.display = 'block';
  } else {
    cookieBox.style.display = 'none';
  }
}

function acceptCookies(){
  var cookieBox = document.getElementById('cookies-warning');
  localStorage.setItem("accepted-cookies", "yes");
  cookieCheck();
}

/*
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
