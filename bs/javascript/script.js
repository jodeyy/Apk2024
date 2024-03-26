document.getElementById("welcome").innerHTML="Selamat datang";
document.getElementById("nama").innerHTML = "<b>Ahmad</b>";
document.getElementById("email").innerHTML= "ahmad@test.com";

 console.log("Hanya bisa dilihat di console");

 //variabel
 let nama ="";
 let email="";
 let data = []; //array / larik

 // function
 function tampil() {
    console.log("Button ditekan");
    //simpan value txtNama ke dalam variabel "nama"
    nama = document.getElementById("txtNama").value;
    email = document.getElementById("txtEmail").value;
    console.log(nama);
    // ubah konten <p id="nama>"
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("email").innerHTML= email;
    // simpan ke dalam array data
    data.push(nama);
    console.log(data);
  
 }
 
