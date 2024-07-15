const menuIcon = document.querySelector(".fa-bars");

const nav = document.querySelector(".nav");

const txtChange = document.querySelector(".newUser>p");

const legend = document.querySelector("legend");

const upBtn = document.querySelector(".signUp");

const inBtn = document.querySelector(".signIn");

const name1 = document.getElementById("name1");

const name2 = document.getElementById("name2");

const email = document.getElementById("email");

const password1 = document.getElementById("password1");

const password2 = document.getElementById("password2");

const extraInfo = document.querySelectorAll(".extraInfo");

const form = document.querySelector(".loginArea");

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    email.reportValidity();

    password1.reportValidity();

    if (legend.innerText==="Sign-Up"){
        name1.reportValidity();
        name2.reportValidity();
        password2.reportValidity();
        if (password1.value!==password2.value){
            password2.setCustomValidity("Passwords do not match.");
        }
        else{
            password2.setCustomValidity("");
        }
    }
    form.submit();
})

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

        name1.required=true;
        name2.required=true;
        password2.required=true;

    }
    
function existUser(){
        extraInfo.forEach((item)=>{
            item.style.display="none";
        })   
        
        txtChange.innerText="New user?"

        legend.innerText="Login"
        
        upBtn.style.display="inline-block";
        inBtn.style.display="none";

        name1.required=false;
        name2.required=false;
        password2.required=false;
}
