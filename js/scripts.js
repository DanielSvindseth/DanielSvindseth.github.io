//much java such script
function switchTheme(){
  if (localStorage.theme==1) {
    localStorage.setItem("theme", "2");
    document.getElementById('wow-theme').setAttribute('href', 'css/thm2.css');
    return(0);
  }
  if (localStorage.theme==2) {
    localStorage.setItem("theme", "3");
    document.getElementById('wow-theme').setAttribute('href', 'css/thm3.css');
    return(0);
  }
  if (localStorage.theme==3) {
    localStorage.setItem("theme", "4");
    document.getElementById('wow-theme').setAttribute('href', 'css/thm4.css');
    return(0);
  }
  else {
    localStorage.setItem("theme", "1");
    document.getElementById('wow-theme').setAttribute('href', 'css/thm1.css');
  }
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

function loadTheme(){
  if (localStorage.theme==1) {
    document.getElementById('wow-theme').setAttribute('href', 'css/thm1.css');
  }
  if (localStorage.theme==2) {
    document.getElementById('wow-theme').setAttribute('href', 'css/thm2.css');
  }
  if (localStorage.theme==3) {
    document.getElementById('wow-theme').setAttribute('href', 'css/thm3.css');
  }
  if (localStorage.theme==4) {
    document.getElementById('wow-theme').setAttribute('href', 'css/thm4.css');
  }
  else {
    return(0);
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
    document.getElementById('wow-theme').setAttribute('href', 'css/thm1.css');
    localStorage.setItem("theme", "1");
    alert("This site uses cookies! By using this site you agree to saving a few bits in localStorage");
    localStorage.setItem("prevVisit", "1")
  }
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
