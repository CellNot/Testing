
async function loadProduk() {
  try {
    const res = await fetch("produk.json");
    const produkList = await res.json();
    const container = document.getElementById("produk-container");
    container.innerHTML = "";

    produkList.forEach(p => {
      const div = document.createElement("div");
      div.className = "produk";
      div.innerHTML = `
        <h3>${p.nama}</h3>
        <p>${p.deskripsi}</p>
        <p><strong>Rp${p.harga}</strong></p>
        <img src="${p.foto}">
        <button class="beli" onclick="beliProduk('${p.nama}', '${p.harga}')">Beli</button>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Gagal load produk:", err);
  }
}

function beliProduk(nama, harga) {
  const nomor = "08xxxxxxxx"; // Ganti nomor WA kamu
  const pesan = `Halo, saya ingin membeli:\n\nNama: ${nama}\nHarga: Rp${harga}`;
  window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`, "_blank");
}

window.onload = loadProduk;
