//console.log("Selamat Pagi")
// variabel
//let npm = 2125250075
//let nama = "mikhael"
// array
//let arrayMahasiswa = ["mikhael", "anrodin"]
//let arrayDosen = Array("AHmad", "Ali") 
// Object
//let Mahasiswa = { npm: 2125250075, nama: "mikhael", hobi: ["ngoding", "gaming", "reading"]}


//console.log(arrayMahasiswa[0])
//console.log(arrayDosen[1])
//console.log(Mahasiswa.nama) 
// console.log(Mahasiswa.hobi[0])

let txtNpm = document.getElementById("npm")
let txtnama = document.getElementById("nama")
let listMhs = document.getElementById("listmahasiswa")
let tblMhs = document.getElementById("tblMahasiswa")
let data = []
tampil()






function simpan(){
    console.log("button simpan ditekan")

console.log(txtNpm.value)
console.log(txtnama.value)

//cek apakah data di dalam localstorage//
if (localStorage.getItem("lsMahasiswa")===null){
//jika localstorage dengan key lsmahasiswa belum ada//
localStorage.setItem("lsMahasiwa", JSON.stringify(data))

// simpan ke array data
data.push
(
    {"npm" : txtNpm.value,"nama" : txtnama.value}
)
} 
else {
    //jika localstorage dengan key lsmahasiswa sudah ada/sudah disimpan sebelumnya//
    
    //ambil dulu data di localstorage dengan key lsmahasiswa//
    let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"))
    console.log(dataLs)
    //simpan data baru ke dalam localstorage
    dataLs.push
(
    {"npm" : txtNpm.value,"nama" : txtnama.value}
)
    //simpan data baru ke dalam localstorage//
    localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs))
}
//panggil function tampil
tampil()
}



function tampil(){
    // clear elemen listMahasiswa
    listMhs.innerHTML = ""
    data.forEach(listData)
}

    //ambil data localstorage dengan key lsMahasiswa
    let dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"))
    dataTampil.forEach(listData)

function listData(item, index) {
    listMhs.innerHTML += "<li>"+item.npm+ "-" + item.nama + "</li>"
    
    tblMhs.innerHTML += `<tr>`
    tblMhs.innerHTML += `<td>${item.npm}</td>`
    tblMhs.innerHTML += `<td>${item.nama}</td>`
    tblMhs.innerHTML += `<tr>`
}
