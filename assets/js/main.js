// lightweight enhancements go here
console.info("ICT 8 loaded");

document.querySelectorAll('header nav a').forEach(a => {
    const url = new URL(a.getAttribute('href'), location);
    if (url.pathname === location.pathname) a.setAttribute('aria-current', 'page');
  });
  