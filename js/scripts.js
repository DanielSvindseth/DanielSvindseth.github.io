//much java such script
function thm(){
  if (localStorage.theme==2) {
    localStorage.setItem("theme", "1");
    document.getElementById('wow-theme').setAttribute('href', 'css/thm1.css');
  }
  else {
    localStorage.setItem("theme", "2");
    document.getElementById('wow-theme').setAttribute('href', 'css/thm2.css');
  }
}

function loadTheme(){
  if (localStorage.theme==1) {
    document.getElementById('wow-theme').setAttribute('href', 'css/thm1.css');
  }
  else {
    document.getElementById('wow-theme').setAttribute('href', 'css/thm2.css');
  }
}

function firstVisit(){
  if (localStorage.prevVisit!=1) {
    alert("This site uses cookies! By using this site you agree to saving a few bits in localStorage");
    localStorage.setItem("prevVisit", "1")
  }
}
