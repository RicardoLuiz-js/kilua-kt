// Menu Mobile Functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMobileMenu() {
  const isActive = mobileMenu.classList.contains('active');
  
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  
  // Prevenir scroll do body quando menu aberto
  document.body.style.overflow = isActive ? '' : 'hidden';
}

// Event Listeners
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
menuOverlay.addEventListener('click', toggleMobileMenu);

// Fechar menu ao clicar em um link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', toggleMobileMenu);
});

// Fechar menu com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
    toggleMobileMenu();
  }
});

// Fechar menu ao redimensionar para desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
    toggleMobileMenu();
  }
});