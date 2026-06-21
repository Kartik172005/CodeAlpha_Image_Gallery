const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = 'flex';
    });
});

// Update image src
function updateLightbox() {
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Navigate Next
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightbox();
});

// Navigate Previous
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightbox();
});

// Close when clicking outside the image
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});