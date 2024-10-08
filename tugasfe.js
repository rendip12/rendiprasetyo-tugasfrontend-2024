const dataGaji = [
  {
    nama: "Data 1",
    golongan: "A",
    status: "NIKAH",
    gajiPokok: 10000000,
    tunjangan: 2000000,
    totalGaji: 12000000,
  },
  {
    nama: "Data 2",
    golongan: "B",
    status: "BELUM",
    gajiPokok: 8000000,
    tunjangan: 0,
    totalGaji: 8000000,
  },
  {
    nama: "Data 3",
    golongan: "C",
    status: "NIKAH",
    gajiPokok: 5000000,
    tunjangan: 1000000,
    totalGaji: 6000000,
  },
  {
    nama: "Data 4",
    golongan: "B",
    status: "BELUM",
    gajiPokok: 8000000,
    tunjangan: 0,
    totalGaji: 8000000,
  },
  {
    nama: "Data 5",
    golongan: "C",
    status: "NIKAH",
    gajiPokok: 5000000,
    tunjangan: 1000000,
    totalGaji: 6000000,
  },
  {
    nama: "Data 6",
    golongan: "B",
    status: "BELUM",
    gajiPokok: 8000000,
    tunjangan: 0,
    totalGaji: 8000000,
  },
  {
    nama: "Data 7",
    golongan: "C",
    status: "NIKAH",
    gajiPokok: 5000000,
    tunjangan: 1000000,
    totalGaji: 6000000,
  },
  {
    nama: "Data 8",
    golongan: "A",
    status: "BELUM",
    gajiPokok: 10000000,
    tunjangan: 0,
    totalGaji: 10000000,
  },
  {
    nama: "Data 9",
    golongan: "A",
    status: "NIKAH",
    gajiPokok: 10000000,
    tunjangan: 2000000,
    totalGaji: 12000000,
  },
  {
    nama: "Data 10",
    golongan: "A",
    status: "NIKAH",
    gajiPokok: 10000000,
    tunjangan: 2000000,
    totalGaji: 12000000,
  },

];

console.log("Data Gaji Karyawan:");
dataGaji.forEach((data) => {
  console.log(`
    Nama: ${data.nama}
    Golongan: ${data.golongan}
    Status: ${data.status}
    Gaji Pokok: Rp ${data.gajiPokok.toLocaleString()}
    Tunjangan: Rp ${data.tunjangan.toLocaleString()}
    Total Gaji: Rp ${data.totalGaji.toLocaleString()}
  `);
});