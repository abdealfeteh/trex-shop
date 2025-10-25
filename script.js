// script.js

// زراغلاق مودال
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalBuy = document.getElementById('modalBuy');

document.querySelectorAll('.btn.details').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const title = btn.dataset.title || 'منتج';
    const img = btn.dataset.img || 'images/ff-account1.jpg';
    const price = btn.dataset.price || '';
    const desc = btn.dataset.desc || '';
    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalPrice.textContent = price ? `السعر: ${price}` : '';
    // link شراء (مثلاً mailto) — يمكنك تخصيصه داخل data
    modalBuy.href = `mailto:youremail@example.com?subject=طلب%20شراء%20${encodeURIComponent(title)}&body=مرحباً%20أرغب%20بشراء%20${encodeURIComponent(title)}%20بسعر%20${encodeURIComponent(price)}`
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  })
})

modalClose.addEventListener('click', ()=>{
  modal.classList.add('hidden');
  document.body.style.overflow = '';
})

// اغلاق بالنقرة على الخلفية
modal.addEventListener('click', (ev)=>{
  if(ev.target === modal){
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
});

// ضع السنة الحالية في الفوتر
document.getElementById('year').textContent = new Date().getFullYear();
