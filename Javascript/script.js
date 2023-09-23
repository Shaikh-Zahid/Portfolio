
/* ===== Toggle Style Switcher ===== */


const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

// console.log(styleSwitcherToggle);

styleSwitcherToggle.addEventListener("click" , () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});


// Hide Style - Switcher on Scroll


window.addEventListener("scroll" , () => {
  if(document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})


/* ===== Toggle Style Switcher ===== */





/* ===== Theme colors Change  ===== */

const alternatestyles = document.querySelectorAll(".alternate-style");

// console.log(alternatestyles)


function setActiveStyle(color) 
{
    alternatestyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled" , "true");
        }
    });
}


/* ===== Theme colors Change  ===== */





/* ===== Theme Dark Mode  ====== */

const dayNight = document.querySelector(".day-night") ;

// console.log(dayNight);

dayNight.addEventListener("click",() => {

  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {

  if(document.body.classList.contains("dark")){
  
    dayNight.querySelector("i").classList.add("fa-sun");

  }
  else{
    dayNight.querySelector("i").classList.add("fa-moon");
  }

});

// console.log(document.body.classList.contains("dark"));
// console.log(dayNight.querySelector("i"));

/* ===== Theme Dark Mode  ====== */