
// Scroll Effects
AOS.init({
    duration: 1250,
  })

// Small script for the menu bar
// It shows a border bottom line when the button is active
function activateButton(clickedElement) {

    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      link.classList.remove('active');
    });


    clickedElement.classList.add('active');
  }




  document.getElementById("currentYear").textContent = new Date().getFullYear();