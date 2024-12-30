document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuIcon = document.getElementById("menu-icon");
    const sidenav = document.getElementById("sidenav");
    const closeButton = document.getElementById("close-sidenav");
  
    let isMenuOpen = false;
  
    const toggleMenu = () => {
      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    };
  
    const openMenu = () => {
      sidenav.style.width = window.innerWidth <= 576 ? "60%" : "30%";
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
      isMenuOpen = true;
    };
  
    const closeMenu = () => {
      sidenav.style.width = "0";
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
      isMenuOpen = false;
    };
  
    menuToggle.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", closeMenu);
  
    // Close the menu if the user clicks outside of it
    document.addEventListener("click", (event) => {
      if (!sidenav.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });
  });
  