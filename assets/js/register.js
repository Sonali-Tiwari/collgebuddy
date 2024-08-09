// const { name } = require("ejs")

const rejisterFirstPageSubmitBtn = document.querySelector("#submit-btn")

const firstPageForm = document.querySelector("form")
const SecondPageForm = document.querySelector("#form2")

const goToPreviousPage = document.querySelector("#form2 p")

const processBarContent = document.querySelector(".process-content")

const name = document.querySelector("#name-id-field")
const email = document.querySelector("#email-id-field")
const password = document.querySelector("#password-id-field")
const phoneNo = document.querySelector("#phone-id-field")


rejisterFirstPageSubmitBtn.addEventListener("click", () => {


    const register = {
        name: name.value,
        email: email.value,
        password: password.value,
        phoneNo: phoneNo.value

    }
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                success.style.display = "none";
                error.style.display = "block";
                error.innerText = data.error;
            } else {
                error.style.display = "none";
                success.style.display = "block";
                success.innerText = data.success;


                firstPageForm.style.display = "none"
                SecondPageForm.style.display = "flex"
                processBarContent.style.width = "100%"
            }
        })









    //   firstPageForm.style.display = "none"
    //   SecondPageForm.style.display = "flex"
    //   processBarContent.style.width ="100%"
})

goToPreviousPage.addEventListener("click", () => {
    firstPageForm.style.display = "flex"
    SecondPageForm.style.display = "none"
    processBarContent.style.width = "50%"
})
college = document.getElementById("#college");
course = document.getElementById("#course");
sem = document.getElementById("#sem");

const rejisterSecondPageSubmitBtn = document.querySelector("#submit-btn");


rejisterSecondPageSubmitBtn.addEventListener("submit", () => {

    const Submitt = {
        college: college.value,
        course: course.value,
        sem: sem.value

    }
    fetch("/api/Submitt", {
        method: "POST",
        body: JSON.stringify(Submitt),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "eror") {
                sucess.style.display = "none";
                eror.style.display = "block";
                eror.innerText = data.error;
            } else {
                eror.style.display = "none";
                sucess.style.display = "block";
                sucess.innerText = data.success;
                window.open('/login', '_blank')
            }





        })
})



