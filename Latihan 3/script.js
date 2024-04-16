let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", function () {
  if (localStorage.getItem("testimoni")) {
    // ada localstorage dengan key testimoni
    data = JSON.parse(localStorage.getItem("testimoni"));
    data.push({
      nama: inputnama.value,
      testimoni: inputtestimoni.value,
    });
  } else {
    // belum ada localStorage dengan key testimoni
    data.push({
      nama: inputnama.value,
      testimoni: inputtestimoni.value,
    });
  }
  //simpan ke dalam localstorage
  localStorage.setItem("testimoni", JSON.stringify(data));
  //panggil getdata()
  getData();
});

// tampilkan data localStorage
function getData() {
    // clear element list
    list.innerHTML = "";
  if (localStorage.getItem("testimoni")) {
    // ada local storage dengan key testimoni
    data = JSON.parse(localStorage.getItem("testimoni"));
    for (const [index, row] of data.entries()) {
      list.innerHTML += `<tr><td>${row.nama}</td><td> ${row.testimoni}</td></tr>`;
    }
  }
}
// panggil getdata()
getData();
