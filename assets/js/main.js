// lightweight enhancements go here
console.info("ICT 8 loaded");

// highlight the current page in any sidebar or header nav
document.querySelectorAll('a[href]').forEach(a => {
    const here = new URL(a.getAttribute('href'), location.href).pathname;
    if (here === location.pathname) a.setAttribute('aria-current', 'page');
  });
  console.info("ICT 8 loaded with sidebar");

  // highlight the current page in the left nav (handles spaces in filenames)
(function () {
  const here = decodeURI(location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('#sidebar .navlist a').forEach(a => {
    const target = decodeURI(a.getAttribute('href').split('/').pop()).toLowerCase();
    if (target === here) a.classList.add('active');
  });
})();

