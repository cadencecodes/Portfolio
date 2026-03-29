document.addEventListener('DOMContentLoaded', () => {

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.TopNav a').forEach(link => {
        if (link.getAttribute('href').replace('./', '') === currentPage) {
            link.classList.add('active');
        }
    });

    // Lightbox
    document.body.insertAdjacentHTML('beforeend', '<div id="lightbox"><img id="lightbox-img" src="" alt=""></div>');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    document.querySelectorAll('.image-wrapper img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') lightbox.classList.remove('active');
    });

    // Footer
    document.body.insertAdjacentHTML('beforeend', `
        <footer class="site-footer">
            <p class="footer-name">Cadence Ross</p>
            <div class="footer-links">
                <a href="https://www.linkedin.com/in/cadence-r-6a7a8b280/" target="_blank">LinkedIn</a>
                <a href="https://www.instagram.com/_cadenceross/" target="_blank">Instagram</a>
            </div>
            <p class="footer-copy">&copy; 2026 Cadence Ross</p>
        </footer>
    `);

    // Decorative suns
    const sunSVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx="50" cy="50" r="18" fill="currentColor"/>
        <line x1="50" y1="4"  x2="50" y2="20" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        <line x1="50" y1="80" x2="50" y2="96" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        <line x1="4"  y1="50" x2="20" y2="50" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        <line x1="80" y1="50" x2="96" y2="50" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        <line x1="16" y1="16" x2="28" y2="28" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        <line x1="72" y1="72" x2="84" y2="84" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        <line x1="84" y1="16" x2="72" y2="28" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        <line x1="28" y1="72" x2="16" y2="84" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
    </svg>`;

    document.body.insertAdjacentHTML('afterbegin',
        `<div class="sun-deco sun-deco--lg" aria-hidden="true">${sunSVG}</div>`
    );

});
