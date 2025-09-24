// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Headphone", harga: 1500000 },
    { id: 4, nama: "Keyboard", harga: 700000 },
    { id: 5, nama: "Monitor", harga: 3000000 }
];

// **Event Handler**
const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (...id) => hapusProduk(...id),
    tampil: () => tampilkanProduk()
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    produkList = [...produkList, produkBaru];
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...id) {
    produkList = produkList.filter(produk => !id.includes(produk.id));
    console.log(`Produk dengan id ${id} berhasil dihapus.`);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
}

// -----------------------------
// **Contoh penggunaan**
eventHandler.tampil();

// tambah produk
eventHandler.tambah(6, "Tablet", 7000000);
eventHandler.tampil();

// hapus produk
eventHandler.hapus(2, 4);
eventHandler.tampil();