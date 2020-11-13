var interval;
var interval2;
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
window.onscroll = function () {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('colored-header');
    } else {
        header.classList.remove('colored-header');
    }
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }