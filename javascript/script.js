document.getElementById("Welcome").innerHTML = "Selamat Datang";
document.getElementById("Nama").innerHTML = "<b>Ahmad</b>";
document.getElementById("Email").innerText = "ahmad@test.com";

console.log("Hanya bisa dilihat di console");
document.body.style.backgroundColor = "Green";

// variabel
let nama ="";
let email="";
let data = []; //Array / larik

// function
function tampil() {
    console.log("Button ditekan");
    // simpan value txtNama ke dalam variabel 'nama'
    nama = document.getElementById("txtNama").value;
    email = document.getElementById("txtEmail").value;
    console.log(nama);
    // ubah konten <p id="nama"
    document.getElementById("Nama").innerHTML = nama;
    document.getElementById("Email").innerHTML = email;
    // simpan ke dalam array data
    data.push(nama);
    data.push(email);
    console.log(data);

}