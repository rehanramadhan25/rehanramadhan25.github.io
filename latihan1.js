/* ===================================================
   1. FITUR SAKLAR TEMA GELAP / TERANG (DARK MODE)
   =================================================== */
// 1. Tangkap elemen tombol tema berdasarkan ID
const themeToggleBtn = document.getElementById('theme-toggle');

// 2. Pasang event listener 'click' pada tombol tema
themeToggleBtn.addEventListener('click', () => {
  // Tambah/hapus kelas 'dark-theme' pada elemen 
  document.body.classList.toggle('dark-theme');

  // Periksa apakah dark mode sedang aktif setelah di-toggle
  if (document.body.classList.contains('dark-theme')) {
    themeToggleBtn.textContent = 'Mode Terang';
    localStorage.setItem('portfolio_theme', 'dark');
  } else {
    themeToggleBtn.textContent = 'Mode Gelap';
    localStorage.setItem('portfolio_theme', 'light');
  }
});

// 3. Cek tema yang tersimpan di LocalStorage saat web pertama dimuat
const savedTheme = localStorage.getItem('portfolio_theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggleBtn.textContent = 'Mode Terang';
}

/* ===================================================
   2. FITUR FILTER KATEGORI PROYEK REAL-TIME
   =================================================== */
// 1. Tangkap semua tombol filter dan semua kartu proyek
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// 2. Berikan event listener pada setiap tombol filter menggunakan forEach
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // a. Hapus kelas 'active' dari semua tombol, lalu aktifkan tombol yang diklik
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    // b. Ambil kategori filter yang dipilih dari atribut data-filter (all, web, atau ui)
    const selectedFilter = btn.getAttribute('data-filter');

    // c. Cocokkan dengan data-category pada setiap kartu proyek
    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');

      if (selectedFilter === 'all' || selectedFilter === cardCategory) {
        card.style.display = 'block'; // Tampilkan kartu yang sesuai
      } else {
        card.style.display = 'none';  // Sembunyikan kartu yang tidak sesuai
      }
    });
  });
});

/* ===================================================
   3. FITUR SUBMIT FORMULIR KONTAK & FEEDBACK
   =================================================== */
// 1. Tangkap elemen formulir, input nama, dan kotak feedback
const contactForm = document.getElementById('contact-form');
const senderName = document.getElementById('sender-name');
const formFeedback = document.getElementById('form-feedback');

// 2. Tangani event submit formulir
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Mencegah reload halaman bawaan peramban

  const name = senderName.value.trim();

  // 3. Tampilkan pesan konfirmasi sukses interaktif
  formFeedback.style.display = 'block';
  formFeedback.innerHTML = `Terima kasih, <strong>${name}</strong>! Pesan Anda telah berhasil dikirim. Saya akan segera membalas email Anda.`;

  // 4. Bersihkan kolom input formulir
  contactForm.reset();

  // 5. Sembunyikan pesan feedback secara otomatis setelah 6 detik
  setTimeout(() => {
    formFeedback.style.display = 'none';
  }, 6000);
});