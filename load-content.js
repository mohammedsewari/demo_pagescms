fetch('content.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('hero-title').textContent = data.hero.title;
    document.getElementById('hero-subtitle').textContent = data.hero.subtitle;
    document.getElementById('about-text').textContent = data.about.text;
  });