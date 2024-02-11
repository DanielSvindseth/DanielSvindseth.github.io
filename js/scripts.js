//much java such script
// Set variables here
var settingsPanelShowing = false;

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.getElementById('wow-theme').setAttribute('href', 'css/thm' + theme + '.css');
}

function loadTheme(){
  var storedTheme = localStorage.getItem('theme');
  document.getElementById('wow-theme').setAttribute('href', 'css/thm' + storedTheme + '.css');
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


function toggleSettingsPanel() {
  if (settingsPanelShowing == false) {
    showSettingsPanel();
    settingsPanelShowing = true;
  } else {
    hideSettingsPanel();
    settingsPanelShowing = false;
  }
}

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
//
// localStorage.setItem('Cookies', )
// function addCookie() {
//
// }
