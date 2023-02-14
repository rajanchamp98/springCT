let target=document.getElementById("target");
const Name=localStorage.getItem("Name");
const Email=localStorage.getItem("email");
const feedback=localStorage.getItem("feedback");
const gender=localStorage.getItem("gender");
const password=localStorage.getItem("password");

function show(){


let trElem=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');
    let td5=document.createElement('td');
    
    var data1=document.createTextNode(Name)
    var data2=document.createTextNode(Email)
    var data3=document.createTextNode(password)
    var data4=document.createTextNode(feedback)
    var data5=document.createTextNode(gender)

    td1.appendChild(data1)
    td2.appendChild(data2)
    td3.appendChild(data3)
    td4.appendChild(data4)
    td5.appendChild(data5)

    trElem.appendChild(td1)
    trElem.appendChild(td2)
    trElem.appendChild(td3)
    trElem.appendChild(td4)
    trElem.appendChild(td5)

    target.appendChild(trElem);
}

const btn=document.getElementById("btn");
btn.addEventListener("click",show);