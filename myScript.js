
let namee=document.getElementById("name");
let email=document.getElementById("email");
let password=document.getElementById("password");
let feedback=document.getElementById("feedback");
let gender=document.getElementById("gender");
const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    var dataList=[];
    if(localStorage.getItem("dataList") == null){
        dataList=[];
    }
    else{
        dataList=JSON.parse(localStorage.getItem("dataList"));
    }
    dataList.push({
        Name:namee.value,
        email:email.value,
        password:password.value,
        feedback:feedback.value,
        gender:gender.value
    })
    localStorage.setItem("dataList",JSON.stringify(dataList));
    alert("data Saved Successfully")
    namee.value="";
    email.value="";
    password.value="";
    feedback.value="";
    gender.value="";
})
