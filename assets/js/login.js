// const { link } = require("../../routes/pages");
// import {account} from'./appwrite';

const email=document.getElementById('email-id-field')
const password=document.getElementById('password-field')
// const loginbtn=document.getElementById('login-button')
const form=document.getElementById("form")
form.addEventListener("submit",()=>{
    const login={
        email:email.value,
        password:password.value
    }
    fetch("/api/login",{
        method:"POST",
        body:JSON.stringify(login),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
         .then(data=>{
            if(data.status=="error"){
                success.style.display="none";
                error.style.display="block"
                error.innerText=data.error
            }else{
                error.style.display="none";
                success.style.display="block";
                success.innerText=data.success;
                window.open('/','_blank')

            }
         })
})

