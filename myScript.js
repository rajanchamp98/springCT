const Name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const feedback=document.getElementById("feedback");
const gender=document.getElementById("gender");
const form=document.getElementById("form");

const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    localStorage.setItem("Name",Name.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    localStorage.setItem("feedback",feedback.value)
    localStorage.setItem("gender",gender.value)
    alert("Data Saved Sucessfully")
    
})
