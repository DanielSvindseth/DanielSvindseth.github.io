function chooseHeaderColor1() {
  var r = Math.floor((Math.random() * 255) + 1);
  var g = Math.floor((Math.random() * 255) + 1);
  var b = Math.floor((Math.random() * 255) + 1);
  var a = 1;
  var header = document.getElementById('header');
  header.style.backgroundColor='rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

//var r = Math.floor((Math.random() * 255) + 1);
//var g = Math.floor((Math.random() * 255) + 1);
//var b = Math.floor((Math.random() * 255) + 1);
//var a = 1;
