const menuIcon = document.querySelector(".fa-bars");

const nav = document.querySelector(".nav");

const menuItems = document.querySelector(".menuItems");


function menuAction(){
    
    if (menuIcon.classList.contains("open")){    
        menuIcon.classList.remove("open");

        nav.classList.remove("open");
    }
    else{
        menuIcon.classList.add("open");

        nav.classList.add("open");
    }
}