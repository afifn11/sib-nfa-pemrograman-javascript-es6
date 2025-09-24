import users from "./data.mjs";

// Melihat data (pakai map)
const index = () => {
  console.log("📌 Daftar Users:");
  users.map((user, i) => {
    console.log(`${i + 1}. ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
  });
  console.log("---------------------------------------------------");
};

// Menambahkan data (pakai push)
const store = (user) => {
  users.push(user);
  console.log(`✅ Data ${user.nama} berhasil ditambahkan!`);
};

// Menghapus data terakhir
const destroy = () => {
  const deleted = users.pop();
  console.log(`🗑️ Data ${deleted.nama} berhasil dihapus!`);
};

export { index, store, destroy };