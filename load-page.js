const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

fetch(`pages/${slug}.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('hero-title').textContent = data.hero.title;
    document.getElementById('hero-subtitle').textContent = data.hero.subtitle;
    document.getElementById('page-body').textContent = data.body;
  })
  .catch(() => {
    document.getElementById('page-body').textContent = 'Page not found.';
  });