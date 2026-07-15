const owner = 'mohammedsewari';
const repo = 'demo_pagescms';

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/posts`)
  .then(res => res.json())
  .then(files => {
    const dropdown = document.getElementById('blog-dropdown');
    files.forEach(file => {
      fetch(file.download_url)
        .then(res => res.json())
        .then(post => {
          const link = document.createElement('a');
          link.href = `blog-post.html?slug=${post.slug}`;
          link.textContent = post.title;
          dropdown.appendChild(link);
        });
    });
  })
  .catch(err => console.error('Nav blog list failed:', err));
