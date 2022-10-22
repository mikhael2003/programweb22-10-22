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

let data = []







function simpan(){
    console.log("button simpan ditekan")

console.log(txtNpm.value)
console.log(txtnama.value)
// simpan ke array data
data.push
(
    {"npm" : txtNpm.value,
     "nama" : txtnama.value}
)
//panggil function tampil
tampil()
}


function tampil(){
    // clear elemen listMahasiswa
    listMhs.innerHTML = ""
    data.forEach(listData)
}

function listData(item, index) {
    listMhs.innerHTML = item.npm
    + "-" + item.npm
}
