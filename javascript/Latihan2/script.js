let data = ['Alfredo', 'David', 'Felix'];
let listMhs = document.getElementById("ListMhs");
data.forEach(showMahasiswa);

function showMahasiswa(value, index)
{
    console.log(value);
    listMhs.innerHTML += "<li>" + value + "</li>";
}

let npm = document.getElementById("npm");
// tampilkan data localstorage ke dalam elemen <p id="npm">
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke localstorage
localStorage.setItem("email", "felix@test.com");
// data array
let hobi = ["baca", "game", "code"];
localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify(hobi));

// data object
let mhs = { npm : 2226240002, nama : "Andri" };
// cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
    {"kode_mk" : "SI0001", "nama_mk" : "Pemograman Web"},
    {"kode_mk" : "SI0002", "nama_mk" : "PAB"},
];

// tampilkan nama_mk pemograman web
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);

// simpan nilai ke dalam localstorage
localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan for atau forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for (const [index, data] of lsNilai.entries()){
    console.log(data.kode_mk);
    console.log(data.nama_mk);

    // tampilkan data mk ke dalam <ul id="listMK">
    document.getElementById("listMK").innerHTML += `
    <li>${data.kode_mk} ${data.nama_mk}</li>
    `;
}

let inputnama= document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnsimpan = document.getElementById("btnSimpan");
let list =  document.getElementById("list");

let data1 = [];

btnsimpan.addEventListener("click", function() {
    if(localStorage.getItem("testimoni")) {
        data1 = JSON.parse(localStorage.getItem("testimoni"));
        data1.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    }
        else{
            data1.push({
                nama: inputnama.value,
                testimoni: inputtestimoni.value,
            });
        }
        localStorage.setItem("testimoni", JSON.stringify(data1));
    }
    
);

