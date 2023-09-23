// Animation Css

/* === Animation Part Home === */


window.addEventListener("load" , () => {

    const animation_Dp_Home = document.querySelectorAll(".animation-Dp-Home");
    const animation_Op_Home = document.querySelectorAll(".animation-Op-Home");
    const animation_Sc_Home = document.querySelector(".animation-Sc-Home");

     setTimeout(() => {

        for(let i = 0 ; i < animation_Dp_Home.length ; i++)
        {
            animation_Dp_Home[i].classList.remove("Downup");
        }
    
        for(let i = 0 ; i < animation_Op_Home.length ; i++)
        {
            animation_Op_Home[i].classList.remove("Opacity");
        }
    
        animation_Sc_Home.classList.remove("Scale");

    }, 5000);

});

// console.log(window);




function animation_home(){
   
    const animation_Dp_Home = document.querySelectorAll(".animation-Dp-Home");
    const animation_Op_Home = document.querySelectorAll(".animation-Op-Home");
    const animation_Sc_Home = document.querySelector(".animation-Sc-Home")

    // console.log(animation_Dp_Home);
    // console.log(animation_Op_Home);
    // console.log(animation_Sc_Home);

    for(let i = 0 ; i < animation_Dp_Home.length ; i++)
    {
        animation_Dp_Home[i].classList.add("Downup");
    }

    for(let i = 0 ; i < animation_Op_Home.length ; i++)
    {
        animation_Op_Home[i].classList.add("Opacity");
    }

    animation_Sc_Home.classList.add("Scale");

    setTimeout(() => {

        for(let i = 0 ; i < animation_Dp_Home.length ; i++)
        {
            animation_Dp_Home[i].classList.remove("Downup");
        }
    
        for(let i = 0 ; i < animation_Op_Home.length ; i++)
        {
            animation_Op_Home[i].classList.remove("Opacity");
        }
    
        animation_Sc_Home.classList.remove("Scale");

    }, 5000);
}


/* === Animation Part Home === */












/* ==== Animation Part About ===== */


function animation_about() {

    const animation_Df_About = document.querySelector(".animation-Df-About");
    const animation_Op_About = document.querySelectorAll(".animation-Op-About");
    const animation_Dp_About = document.querySelectorAll(".animation-Dp-About");
    const animation_Sc_About = document.querySelectorAll(".animation-Sc-About");
    const animation_progress_About = document.querySelectorAll(".animation-progress-About");

    // console.log(animation_Dp_About);
    // console.log(animation_Df_About);
    // console.log(animation_Op_About);
    // console.log(animation_Sc_About);
    // console.log(animation_progress_About);

    for (let i = 0; i < animation_Dp_About.length; i++) {
        animation_Dp_About[i].classList.add("Downup");
    }

    for (let i = 0; i < animation_Op_About.length; i++) {
        animation_Op_About[i].classList.add("Opacity");
    }

    for (let i = 0; i < animation_Sc_About.length; i++) {
        animation_Sc_About[i].classList.add("Scale")
    }

    for (let i = 0; i < animation_progress_About.length; i++) {
        animation_progress_About[i].classList.add("progress-bar")
    }

    animation_Df_About.classList.add("Downflip");

    progressbar();

    setTimeout(() => {

        for (let i = 0; i < animation_Dp_About.length; i++) {
            animation_Dp_About[i].classList.remove("Downup");
        }
    
        for (let i = 0; i < animation_Op_About.length; i++) {
            animation_Op_About[i].classList.remove("Opacity");
        }
    
        for (let i = 0; i < animation_Sc_About.length; i++) {
            animation_Sc_About[i].classList.remove("Scale")
        }
    
        for (let i = 0; i < animation_progress_About.length; i++) {
            animation_progress_About[i].classList.remove("progress-bar")
        }
    
        animation_Df_About.classList.remove("Downflip");

    },3000)
}

/* ==== Animation Part About ===== */






/* progress Loader */

let id_1 = document.getElementById("1");
let id_2 = document.getElementById("2");
let id_3 = document.getElementById("3");
let id_4 = document.getElementById("4");
let id_5 = document.getElementById("5");
let id_6 = document.getElementById("6");
let id_7 = document.getElementById("7");
let id_8 = document.getElementById("8");


let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_4 = 0;
let counter_5 = 0;

// console.log(id_1);
// console.log(id_2);
// console.log(id_3);
// console.log(id_4);
// console.log(id_5);
// console.log(id_6);
// console.log(id_7);
// console.log(id_8);

function progressbar() {

    setInterval(() => {

        if (counter_1 === 95) {
            clearInterval();
        }
        else {
            counter_1 = counter_1 + 1;
            id_1.innerHTML = counter_1 + "%";
        }

        if (counter_2 === 85) {
            clearInterval();
        }
        else {
            counter_2 = counter_2 + 1;
            id_2.innerHTML = counter_2 + "%";
            id_3.innerHTML = counter_2 + "%";
        }

        if (counter_3 === 80) {
            clearInterval();
        }
        else {
            counter_3 = counter_3 + 1;
            id_4.innerHTML = counter_3 + "%";
            id_8.innerHTML = counter_3 + "%";
        }

        if (counter_4 === 65) {
            clearInterval();
        }
        else {
            counter_4 = counter_4 + 1;
            id_5.innerHTML = counter_4 + "%";
        }

        if (counter_5 === 75) {
            clearInterval();
        }
        else {
            counter_5 = counter_5 + 1;
            id_6.innerHTML = counter_5 + "%";
            id_7.innerHTML = counter_5 + "%";
        }
    }, 40)
}

/* progress Loader */







/* ==== Animation Part Service ===== */

function animation_service() {

    const animation_Dp_Service = document.querySelectorAll(".animation-Dp-Service");

    // console.log(animation_Dp_Service);


    for (let i = 0; i < animation_Dp_Service.length; i++) {
        animation_Dp_Service[i].classList.add("Downup");
    }

    setTimeout(() => {

        for (let i = 0; i < animation_Dp_Service.length; i++) {
            animation_Dp_Service[i].classList.remove("Downup");
        }

    },3000)

}

/* ==== Animation Part Service ===== */










/* ==== Animation Part Portfolio ==== */

function animation_portfolio() {

    const animation_Op_Portfolio = document.querySelectorAll(".animation-Op-Portfolio");
    const animation_Dp_Portfolio = document.querySelectorAll(".animation-Dp-Portfolio");

    // console.log(animation_Dp_Portfolio);
    // console.log(animation_Op_Portfolio);


    for (let i = 0; i < animation_Dp_Portfolio.length; i++) {
        animation_Dp_Portfolio[i].classList.add("Downup");
    }

    for (let i = 0; i < animation_Op_Portfolio.length; i++) {
        animation_Op_Portfolio[i].classList.add("Opacity");
    }

    setTimeout(() => {

        for (let i = 0; i < animation_Dp_Portfolio.length; i++) {
            animation_Dp_Portfolio[i].classList.remove("Downup");
        }
    
        for (let i = 0; i < animation_Op_Portfolio.length; i++) {
            animation_Op_Portfolio[i].classList.remove("Opacity");
        }

    },4000)

}

/* ==== Animation Part Portfolio ==== */







/* === Animation Part Contact */

function animation_contact() {

    const animation_Df_Contact = document.querySelectorAll(".animation-Dp-Contact");
    const animation_Op_Contact = document.querySelectorAll(".animation-Op-Contact");

    // console.log(animation_Df_Contact);
    // console.log(animation_Op_Contact)

    for (let i = 0; i < animation_Df_Contact.length; i++) {
        animation_Df_Contact[i].classList.add("Downup");
    }

    for (let i = 0; i < animation_Op_Contact.length; i++) {
        animation_Op_Contact[i].classList.add("Opacity");
    }

    setTimeout(() => {

        for (let i = 0; i < animation_Df_Contact.length; i++) {
            animation_Df_Contact[i].classList.remove("Downup");
        }
    
        for (let i = 0; i < animation_Op_Contact.length; i++) {
            animation_Op_Contact[i].classList.remove("Opacity");
        }

    },4000)
}




/* === Animation Part Contact */