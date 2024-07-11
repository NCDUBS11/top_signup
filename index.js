const menuIcon = document.querySelector(".fa-bars");

const nav = document.querySelector(".nav");

const txtChange = document.querySelector(".newUser>p");

const upBtn = document.querySelector(".signUp");

const inBtn = document.querySelector(".signIn");


const extraInfo = document.querySelectorAll(".extraInfo");

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

function newUser(){
        extraInfo.forEach((item)=>{
            item.style.display="block";
        })   
        
        txtChange.innerText="Existing user?"

        upBtn.style.display="none";
        inBtn.style.display="inline-block";
}

function existUser(){
    extraInfo.forEach((item)=>{
        item.style.display="none";
    })   
    
    txtChange.innerText="New user?"

    upBtn.style.display="inline-block";
    inBtn.style.display="none";
}
