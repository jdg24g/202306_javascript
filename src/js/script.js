const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", () => {
	const navBar = document.querySelector(".nav-bar")
	navBar.classList.toggle("active")
})
const header = document.querySelector("header")

window.addEventListener("orientationchange", function () {
    if (window.orientation === 0 || window.orientation === 180) {
      console.log("El dispositivo está en posición vertical.");
      const navBarUl = document.querySelector(".nav-bar ul");
      header.style.transition = "all 0.5s"
      navBarUl.style.display = "block";
    } else if (window.orientation === 90 || window.orientation === -90) {
      console.log("El dispositivo está en posición horizontal.");
      const navBarUl = document.querySelector(".nav-bar ul");
      navBarUl.style.display = "flex";
      header.style.transition = "none"

    }
  });

window.addEventListener("scroll", () => {
	header.classList.toggle("sticky", window.scrollY > 0)
	
	if (window.scrollY > 0) {
		document.querySelector("meta[name='theme-color']").setAttribute("content", "#4c0079")
    header.style.background = "rgba(77, 0, 121, 0.80)"
    header.style.transition = "all 0.5s"

    console.log("giro")
	}
	else{
		header.style.background = "#4c0079"
    console.log("tenemos")
	}

})
  