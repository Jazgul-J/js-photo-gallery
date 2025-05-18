const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg',
  'images/photo4.jpg',
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const thumbnails = document.querySelectorAll('.thumbnails img');

function showImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  currentIndex = index;
  mainImage.src = images[currentIndex];
  mainImage.alt = `Фото ${currentIndex + 1}`;

  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentIndex);
  });
}

prevBtn.addEventListener('click', () => {
  showImage(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showImage(currentIndex + 1);
});

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const index = +thumb.dataset.index;
    showImage(index);
  });
});

// Автоматический слайд каждые 5 секунд
setInterval(() => {
  showImage(currentIndex + 1);
}, 5000);

// Показываем первую картинку при загрузке
showImage(0);
