const btn=document.getElementById("btn");
const target=document.getElementById("target");

function showData(){
    let dataList;
    if(localStorage.getItem('dataList')=== null){
        dataList=[];
    }
    else{
        dataList=JSON.parse(localStorage.getItem('dataList'))
    }

    let elements="";
    dataList.forEach((elem,index)=>{
        elements+=`<tr>
        <td>${elem.Name}</td>
        <td>${elem.email}</td>
        <td>${elem.password}</td>
        <td>${elem.feedback}</td>
        <td>${elem.gender}</td>
        </tr>`

    })

    target.innerHTML+=elements
    

}
document.onload=showData();
