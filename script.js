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

  window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});


  document.getElementById("currentYear").textContent = new Date().getFullYear();