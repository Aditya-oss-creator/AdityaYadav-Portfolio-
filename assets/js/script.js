const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-links');

sidebarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    sidebar.classList.remove('show-sidebar');
    document.body.style.overflow = 'auto';
  });
});

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});
// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  document.body.style.overflow = 'auto';
});
