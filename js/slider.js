let currentIndex = 0;
const images = [
  '/images/home/destination-wedding-2.webp',
  '/images/home/destination-wedding-4.webp',
  '/images/home/destination-wedding-1.jpg',
  '/images/home/destination-wedding-5.webp',
  '/images/home/destination-wedding-6_1.webp'
  // Add other image paths here
];

function updateImage() {
  // Select all image elements with the slider-image class
  const imgElements = document.querySelectorAll('.slider-image');
  
  imgElements.forEach((img, index) => {
    // Update the image source for each element
    img.src = images[(currentIndex + index) % images.length];
  });
}

document.getElementById('prev-button').addEventListener('click', () => {
  // Decrease the current index and update the image
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

document.getElementById('next-button').addEventListener('click', () => {
  // Increase the current index and update the image
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Initial image update
updateImage();
