const data = require('./data.js');

// Fungsi untuk menampilkan data saat ini
function displayCurrentData() {
  console.log("Daftar Data yang Tersedia:");
  data.forEach((item, index) => {
    console.log(`${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
  });
}

// Fungsi untuk menambah data baru
function insertData(nama, umur, alamat, email) {
  data.push({ nama, umur, alamat, email });
  console.log(`Data ${nama} berhasil ditambahkan.`);
}

// Fungsi untuk menghapus data berdasarkan indeks
function removeData(index) {
  if (index >= 0 && index < data.length) {
    const removed = data.splice(index, 1);
    console.log(`Data ${removed[0].nama} berhasil dihapus.`);
  } else {
    console.log("Indeks tidak valid.");
  }
}

// Menampilkan data awal
displayCurrentData(); // Tampilkan data

// Menambahkan dua data baru
insertData("aku", 99, "depok", "aku@example.com");
insertData("kamu", 99, "depok", "kamu@example.com");

displayCurrentData(); // Tampilkan data setelah penambahan

// Menghapus data di indeks ke-2
removeData(2);

displayCurrentData(); // Tampilkan data setelah penghapusan
