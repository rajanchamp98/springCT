const Name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const feedback=document.getElementById("feedback");
const gender=document.getElementById("gender");


let nameData=[]
let emailData=[]
let passwordData=[]
let feedbackData=[]
let genderData=[]



const submiting=()=>{
    nameData.push(Name.value);
    emailData.push(email.value);
    passwordData.push(password.value);
    feedbackData.push(feedback.value);
    genderData.push(gender.value);


    localStorage.setItem("Name",JSON.stringify(nameData));
    localStorage.setItem("email",JSON.stringify(emailData));
    localStorage.setItem("password",JSON.stringify(passwordData));
    localStorage.setItem("feedback",JSON.stringify(feedbackData));
    localStorage.setItem("gender",JSON.stringify(genderData));
  
    alert("Data Saved Sucessfully")
    
};
