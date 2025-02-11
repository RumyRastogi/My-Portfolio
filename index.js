function toggleMenu() {
  var menu = document.getElementById("navbar");

  if (menu.style.display == "block") {
    menu.style.display = "none";
} else {
    menu.style.display = "block";
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



