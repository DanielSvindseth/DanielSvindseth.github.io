function pad(color) {
  console.log(color);
  if (color.length == 1) {
    color = '0' + color;
    console.log(color);
  }
  return color;
}

function createRandomColor() {
  var r = Math.floor((Math.random() * 127) + 1);
  var g = Math.floor((Math.random() * 95) + 1);
  var b = Math.floor((Math.random() * 127) + 1);
  var a = '7f';
  var color = '#' + pad(r.toString(16)) + pad(g.toString(16)) + pad(b.toString(16)) + a;
  console.log('Generated random color: ' + color);
  return color;
}

function applyHeaderColor(color) {
  var header = document.getElementById('header');
  var settingsPanel = document.getElementById('settings-panel');
  header.style.backgroundColor = color;
  settingsPanel.style.backgroundColor = color;
}

function applyBackgroundColor(color) {
  var body = document.getElementById('body');

  body.style.backgroundColor = color;
}

function createCustomColor(color) {
  localStorage.setItem("customColor", color);
}

function applyCustomColor() {
  var customColor = localStorage.getItem("customColor") + '7f';
  var header = document.getElementById('header');
  var settingsPanel = document.getElementById('settings-panel');
  header.style.backgroundColor = customColor;
  settingsPanel.style.backgroundColor = customColor;
  console.log('Setting custom color: ' + customColor);
}

function applyColor() {
  if (localStorage.getItem("theme") === '4') {
    color = createRandomColor();
    applyHeaderColor(color);
    applyBackgroundColor(color);
  } else if (localStorage.getItem("theme") === '5') {
    applyCustomColor();
  }
}
