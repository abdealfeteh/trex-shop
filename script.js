// script.js

// مودال التفاصيل والتهيئة
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalBuy = document.getElementById('modalBuy');

// أزرار تفاصيل المنتجات
document.querySelectorAll('.btn.details').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const title = btn.dataset.title || 'منتج';
    const img = btn.dataset.img || 'images/ff-account1.jpg';
    const price = btn.dataset.price || '';
    const desc = btn.dataset.desc || '';
    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalPrice.textContent = price ? `السعر: ${price}` : '';
    modalBuy.href = `mailto:youremail@example.com?subject=طلب%20شراء%20${encodeURIComponent(title)}&body=مرحباً%20أرغب%20بشراء%20${encodeURIComponent(title)}%20بسعر%20${encodeURIComponent(price)}`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  })
})

// عند غلق المودال
modalClose.addEventListener('click', ()=>{
  modal.classList.add('hidden');
  document.body.style.overflow = '';
});
modal.addEventListener('click', (ev)=>{
  if(ev.target === modal){
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
});

// اضغط على صور المعرض لفتحها في مودال
document.querySelectorAll('.gallery-item').forEach(img=>{
  img.addEventListener('click', ()=>{
    modalImg.src = img.src;
    modalTitle.textContent = img.alt || 'صورة';
    modalDesc.textContent = '';
    modalPrice.textContent = '';
    // اشتري الآن يرسل رسالة عامة تحتوي اسم الصورة
    modalBuy.href = `https://www.instagram.com/28_tah?igsh=aTFueGIxZHJsMHRn`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  })
});

// ضع السنة الحالية في الفوتر
document.getElementById('year').textContent = new Date().getFullYear();
