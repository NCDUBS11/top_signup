const menuIcon = document.querySelector(".fa-bars");

const nav = document.querySelector(".nav");

const txtChange = document.querySelector(".newUser>p");

const legend = document.querySelector("legend");

const upBtn = document.querySelector(".signUp");

const inBtn = document.querySelector(".signIn");

const password1 = document.getElementById("password1");

const password2 = document.getElementById("password2");

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

        legend.innerText="Sign-Up"
        
        upBtn.style.display="none";
        inBtn.style.display="inline-block";
    }
    
function existUser(){
        extraInfo.forEach((item)=>{
            item.style.display="none";
        })   
        
        txtChange.innerText="New user?"

        legend.innerText="Login"
        
        upBtn.style.display="inline-block";
        inBtn.style.display="none";
}
