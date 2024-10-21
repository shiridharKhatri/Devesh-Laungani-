// Function to toggle mobile menu
const toggleMobileMenu = () => {
  const menuIco = document.getElementById("menuIco");
  const menuUlMobile = document.getElementById("menuUlMobile");
  menuIco.addEventListener("click", () => {
    menuIco.classList.toggle("menuOpen");
    if (menuIco.classList.contains("menuOpen")) {
      menuUlMobile.style.display = "flex";
      menuIco.innerHTML = ` <h1><i class="fa-solid fa-xmark"></i></h1>`;
    } else {
      menuUlMobile.style.display = "none";
      menuIco.innerHTML = ` <h1><i class="fa-solid fa-bars"></i></h1>`;
    }
  });
};

toggleMobileMenu();
