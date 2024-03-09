AOS.init({
    duration: 1250,
  })


function activateButton(clickedElement) {
    // Remove 'active' class from all links
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    clickedElement.classList.add('active');
  }


  document.getElementById("currentYear").textContent = new Date().getFullYear();