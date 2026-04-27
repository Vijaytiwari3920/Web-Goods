document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Project Search Functionality ---
    const searchInput = document.getElementById('projectSearch');
    const projectCards = document.querySelectorAll('.project-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            projectCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const fundingAgencyElement = Array.from(card.querySelectorAll('.detail-row')).find(row => 
                    row.querySelector('.detail-label').textContent.includes('Funding')
                );
                
                const fundingAgency = fundingAgencyElement ? fundingAgencyElement.querySelector('.detail-value').textContent.toLowerCase() : '';
                
                // Simple search logic: check if title or funding agency includes the search term
                if (title.includes(searchTerm) || fundingAgency.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
