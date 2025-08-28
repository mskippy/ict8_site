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

// Always point "Course Home" in the left sidebar to the course root.
(function setCourseHomeLink() {
  // Set this to your real course-home path (change if your site lives in a subfolder)
  var COURSE_HOME = '/index.html'; // e.g. '/ict8/index.html'

  // If your main JS isn't loaded with `defer`, wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setCourseHomeLink);
    return;
  }

  var sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  var links = sidebar.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    // ignore the house emoji and excess spaces
    var txt = links[i].textContent.replace('🏠','').replace(/\s+/g,' ').trim();
    if (txt.indexOf('Course Home') !== -1) {
      links[i].href = COURSE_HOME;
      break;
    }
  }
})();
