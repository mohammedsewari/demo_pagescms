const owner = 'mohammedsewari';
const repo = 'demo_pagescms';

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/posts`)
  .then(res => res.json())
  .then(files => {
    const container = document.getElementById('posts-list');
    files.forEach(file => {
      fetch(file.download_url)
        .then(res => res.json())
        .then(post => {
          const card = document.createElement('div');
          card.innerHTML = `
            <img src="${post.image}" width="200">
            <h2><a href="blog-post.html?slug=${post.slug}">${post.title}</a></h2>
            <p>${post.date}</p>
          `;
          container.appendChild(card);
        });
    });
  });