
window.onscroll = function() {
  document.getElementById("scrollTopBtn").style.display =
    document.documentElement.scrollTop > 100 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
