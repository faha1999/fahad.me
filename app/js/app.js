// start nav
const nav = `
<a href="index.html"> <i class="fas fa-home"></i> <span>home</span> </a>
<a href="about.html"> <i class="fas fa-user"></i> <span>about</span> </a>
<a href="portfolio.html"> <i class="fas fa-briefcase"></i> <span>portfolio</span> </a>
<a href="blogs.html"> <i class="fas fa-blog"></i> <span>blogs</span> </a>
<a href="contact.html"> <i class="fas fa-address-book"></i> <span>contact</span> </a>
`;

//  nav function
window.addEventListener('DOMContentLoaded', () => {
  let barnav = document.querySelector('nav[role="navigation"]');
  barnav.innerHTML = nav;
});
