// mobile menu
const btn = document.querySelector('.menu-btn');
const list = document.querySelector('.nav ul');
if (btn) btn.addEventListener('click', () => list.classList.toggle('open'));

// uniform image zoom
const zoom = document.getElementById('zoomImg');
const box = document.getElementById('lightbox');
if (zoom && box) {
  zoom.addEventListener('click', () => box.classList.add('open'));
  box.addEventListener('click', () => box.classList.remove('open'));
}

// gallery: photos are listed in gallery.json (file name in assets/gallery/ + caption)
const galleryEl = document.getElementById('gallery');
if (galleryEl) {
  const empty = document.getElementById('galleryEmpty');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  fetch('gallery.json?v=' + Date.now())
    .then(r => r.json())
    .then(items => {
      if (!items.length) { empty.hidden = false; return; }
      items.forEach(it => {
        const fig = document.createElement('figure');
        const img = document.createElement('img');
        img.src = 'assets/gallery/' + it.file;
        img.alt = it.caption || 'Alpha Zulu photo';
        img.loading = 'lazy';
        fig.appendChild(img);
        if (it.caption) {
          const cap = document.createElement('figcaption');
          cap.textContent = it.caption;
          fig.appendChild(cap);
        }
        fig.addEventListener('click', () => { lbImg.src = img.src; lb.classList.add('open'); });
        galleryEl.appendChild(fig);
      });
      lb.addEventListener('click', () => lb.classList.remove('open'));
    })
    .catch(() => { empty.hidden = false; });
}

// enquiry form -> opens visitor's email app with details filled in
const form = document.getElementById('enquiryForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const body =
      `Parent name: ${f.get('parent')}\n` +
      `Phone: ${f.get('phone')}\n` +
      `Email: ${f.get('email')}\n` +
      `Child's name: ${f.get('child')}\n` +
      `Child's age: ${f.get('age')}\n` +
      `Program of interest: ${f.get('program')}\n\n` +
      `Message:\n${f.get('message')}`;
    window.location.href =
      'mailto:alphazulu.edu@gmail.com?subject=' +
      encodeURIComponent('Admission Enquiry - Alpha Zulu') +
      '&body=' + encodeURIComponent(body);
  });
}
