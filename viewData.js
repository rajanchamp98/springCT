let target=document.getElementById("target");
const Name=JSON.parse(localStorage.getItem("Name"));
const Email=JSON.parse(localStorage.getItem("email"));
const feedback=JSON.parse(localStorage.getItem("feedback"));
const gender=JSON.parse(localStorage.getItem("gender"));
const password=JSON.parse(localStorage.getItem("password"));

function show(){

   for(let i=0;i<Name.length;i++){


let trElem=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');
    let td5=document.createElement('td');
    
    var data1=document.createTextNode(Name[i])
    var data2=document.createTextNode(Email[i])
    var data3=document.createTextNode(password[i])
    var data4=document.createTextNode(feedback[i])
    var data5=document.createTextNode(gender[i])

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
}

const btn=document.getElementById("btn");
btn.addEventListener("click",show);
