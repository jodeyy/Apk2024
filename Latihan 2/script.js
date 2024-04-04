let data = ["Alfredo","David","Felix"]
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index){
     console.log(value);
     //listMhs.innerHTML = "<li>" + value + "<li>"  
     // atau
     listMhs.innerHTML += `<li>${value}</li>`;
}

let npm = document.getElementById("npm");
// tampilkan data localStorage ke dalam elemen <p id='npm'>
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke localstorage
localStorage.setItem("email", "ahmad@test.com");
// data array
let hobi = ["baca", "game", "code"];
localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify(hobi));

// data object
let mhs = {"npm" : 2226240002, nama: "Andri" };
// cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
     {kode_mk : "SI0001", nama_mk: "Pemrograman Web"},
     {kode_mk: "SI0002", nama_mk : "PAB"},
];
// tampilkan nama_mk pemrograman
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);

// simpan nilai ke dalam local storage
localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan for atau foreach
let lsNilai = JSON.parse(localStorage.getItem("nilai"))

for (const [index, data] of lsNilai.entries()){
     console.log(data.kode_mk);
     console.log(data.nama_mk);
     // tampilkan data mk ke dalam <ul id="listMK"
     document.getElementById("listMk").innerHTML +=`<li>${data.kode_mk} ${data.nama_mk}</li>`;
};






































