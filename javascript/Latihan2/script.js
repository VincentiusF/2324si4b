let data = ['Alfredo', 'David', 'Felix'];
let listMhs = document.getElementById("ListMhs");
data.forEach(showMahasiswa);

function showMahasiswa(value, index)
{
    console.log(value);
    listMhs.innerHTML += "<li>" + value + "</li>";
}