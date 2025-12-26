// Amazon Portfolio Images Configuration
// Add your image filenames to this array
const amazonImages = [
    'p1.jpg',
    'p1.jpg',
    'p1.jpg',
    'p1.jpg',
    'p1.jpg',
    'p1.jpg',
    'p1.jpg',
    'p1.jpg'
];

// Function to render Amazon portfolio slides
function renderAmazonSlides() {
    const swiperWrapper = document.querySelector('.portfolioSwiper .swiper-wrapper');
    
    if (!swiperWrapper) {
        console.error('Portfolio swiper wrapper not found');
        return;
    }
    
    // Clear existing slides
    swiperWrapper.innerHTML = '';
    
    // Generate slides for each image
    amazonImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="bg-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                <img src="public/amazon/${image}" 
                     alt="Product listing ${index + 1}" 
                     class="object-contain"
                     style="width: 1500px; height: 900px; max-width: 100%; height: auto;"
                     onerror="this.parentElement.parentElement.style.display='none'">
            </div>
        `;
        
        swiperWrapper.appendChild(slide);
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', renderAmazonSlides);
