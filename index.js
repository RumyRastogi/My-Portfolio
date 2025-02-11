function toggleMenu() {
  var menu = document.getElementsByClassName("navbar");

  if (menu[0].style.display == "block") {
    menu[0].style.display = "none";
} else {
    menu[0].style.display = "block";
}


  // Close the menu when clicking outside
  document.addEventListener("click", function(event) {
      var menuIcon = document.querySelector(".menu-toggle");
      if (event.target !== menu && event.target !== menuIcon && !menu.contains(event.target)) {
          menu.style.display = "none";
      }
  });
}

function downloadCV(){
  const link = document.createElement('a');
  link.href="resume.doc";
  link.download="yourcv.doc";
  document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      

}

$('.carousel').carousel({
  interval: 2000
})


