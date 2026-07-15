const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

fetch(`posts/${slug}.json`)
  .then(res => res.json())
  .then(post => {
    document.getElementById('post-image').src = post.image;
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-body').innerHTML = post.body;
  });