/* ======== Typing Animation ======= */


var typing = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "FrontEnd Developer"],
    loop: true,
    backSpeed: 90,
    typeSpeed: 100,
});

// console.log(typing)


/* ====== Typing Animation  */




/* ========= Aside ======== */

const nav = document.querySelector(".nav");

const navList = nav.querySelectorAll("li");

const totalNavList = navList.length;

const allSection = document.querySelectorAll(".section");

const totalSection = allSection.length;


// console.log(nav);
// console.log(navList);
// console.log(totalNavList);
// console.log(allSection)
// console.log(totalSection);


for (let i = 0; i < totalNavList; i++) {

    // console.log(navList[i]);

    const a = navList[i].querySelector("a");

    // console.log(a);

    a.addEventListener("click", () => {

        removeBackSection();

        for (let i = 0; i < totalNavList; i++) {
            if (navList[i].querySelector("a").classList.contains("active")) {

                addBackSection(i);
                // console.log("Back-Section" + navList[i].querySelector("a"))

                // allSection[i].classList.add("back-section");
            }

            navList[i].querySelector("a").classList.remove("active");
        }

        a.classList.add("active");

        showSection(a);

        // animation(a);

        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn()
        }
    });

}

function removeBackSection(){

    for (let i = 0; i < totalSection; i++) {

        allSection[i].classList.remove("back-section")
    }

}

function  addBackSection(n){
    allSection[n].classList.add("back-section");
}

function showSection(element) {

    // console.log(element.getAttribute("href").split("#"));

    for (let i = 0; i < totalSection; i++) {

        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];

    // const target = href[1];

    // console.log(target);

    document.querySelector("#" + target).classList.add("active");
}

/* ========= Aside ======== */




/* ======== Nav Bar Toggle  ====== */

const navTogglerBtn = document.querySelector(".nav-toggle");

const aside = document.querySelector(".aside");

// console.log(navTogglerBtn);
// console.log(aside);

navTogglerBtn.addEventListener("click", () => 
{
    asideSectionTogglerBtn()
});

function asideSectionTogglerBtn(){

    aside.classList.toggle("open");

    navTogglerBtn.classList.toggle("open");
    
    for(var i = 0 ; i < totalSection ; i++)
    {
        allSection[i].classList.toggle("open");
    }

    const img = document.querySelector("img");

    img.classList.toggle("size");

    let home_img = document.querySelector(".home-img");

    home_img.classList.toggle("close");

    home_img.classList.toggle("long");
}

/* ======== Nav Bar Toggle  ====== */



/* ======= Hire Me Click ======== */

function updateNav(element){

    for(let i = 0 ; i < totalNavList ; i++)
    {
        navList[i].querySelector("a").classList.remove("active");

        const target = element.getAttribute("href").split("#")[1];
        
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click" , function()
{
    showSection(this);

    updateNav(this);

    const sectionIndex = this.getAttribute("data-section-index");

    // console.log(sectionIndex)

    removeBackSection()
    addBackSection(sectionIndex)
})



/* ======= Hire Me Click ======== */