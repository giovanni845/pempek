// GANTI dengan nomor WhatsApp bisnis kamu.
// Gunakan format internasional tanpa tanda +, spasi, atau angka 0 di depan.
// Contoh: 6281234567890
const nomorWhatsApp = "6281234567890";

function pesanWhatsApp(namaMenu, harga) {
  const hargaTeks = Number(harga) > 0
    ? `Rp${Number(harga).toLocaleString("id-ID")}`
    : "Menyesuaikan menu";

  const pesan = `Halo Pempek Palembang Kita! 👋

Saya ingin memesan:
Menu: ${namaMenu}
Harga: ${hargaTeks}

Mohon informasi cara pemesanan dan pengirimannya.
Terima kasih!`;

  const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Tombol order pada setiap produk
document.querySelectorAll(".order-btn").forEach((button) => {
  button.addEventListener("click", () => {
    pesanWhatsApp(button.dataset.menu, button.dataset.price);
  });
});

// Tombol WhatsApp pada bagian CTA
document.getElementById("ctaWhatsapp").addEventListener("click", (event) => {
  event.preventDefault();
  pesanWhatsApp("Pesanan Pempek", 0);
});

// Tombol WhatsApp pada footer
document.getElementById("footerWhatsapp").addEventListener("click", (event) => {
  event.preventDefault();
  pesanWhatsApp("Pesanan Pempek", 0);
});

// Tampilkan nomor WhatsApp di footer
const phoneDisplay = document.getElementById("phoneDisplay");
if (phoneDisplay) {
  phoneDisplay.textContent = nomorWhatsApp;
}

// Tahun otomatis pada copyright
document.getElementById("year").textContent = new Date().getFullYear();
