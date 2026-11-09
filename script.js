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
