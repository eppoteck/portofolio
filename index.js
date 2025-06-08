// Menambahkan efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;

        // Scroll halus ke posisi target
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Highlight menu aktif
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Menampilkan tombol kembali ke atas saat menggulir
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block'; // Tampilkan tombol
    } else {
        scrollToTopButton.style.display = 'none'; // Sembunyikan tombol
    }
});

// Menangani klik pada tombol kembali ke atas
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
