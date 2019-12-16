//much java such script
function thm(){
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

function firstVisit(){
  if (localStorage.prevVisit!=1) {
    document.getElementById('wow-theme').setAttribute('href', 'css/thm1.css');
    localStorage.setItem("theme", "1");
    alert("This site uses cookies! By using this site you agree to saving a few bits in localStorage");
    localStorage.setItem("prevVisit", "1")
  }
}
