let data = ["Alfredo","David","Felix"]
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index){
     console.log(value);
     //listMhs.innerHTML = "<li>" + value + "<li>"  
     // atau
     listMhs.innerHTML += `<li>${value}</li>`;
}