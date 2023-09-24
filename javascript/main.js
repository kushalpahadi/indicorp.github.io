window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar-container");
    header.classList.toggle("sticky", window.scrollY > 0);
})


function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon--change");
//     const element = document.getElementById("menu__container");
// element.classList.toggle("home__lists--show")




// element.classList.remove("home__lists"); 
// element.classList.add("home__lists--show"); 


const x = document.getElementById("menu__container");
if (x.className === "home__lists") {
    x.className -="home__lists"
    x.className += " home__lists--show";

  } else {
    x.className = "home__lists";
  }
}

