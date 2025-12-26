// Testimonials data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Amazon Seller",
        rating: 5,
        text: "Working with NJBL Design transformed my Amazon product listings completely. The conversion rate increased by 85% within the first month! Professional, creative, and results-driven.",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=16f4d0&color=1a1a2e&size=200"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "E-commerce Brand Owner",
        rating: 5,
        text: "The label design exceeded all expectations. My product now stands out on the shelf and online. Sales doubled in just 6 weeks. Highly recommend!",
        avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=16f4d0&color=1a1a2e&size=200"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "Marketing Director",
        rating: 5,
        text: "NJBL Design's A+ content strategy was a game-changer. The visuals are stunning and the storytelling is perfect. Customer engagement went through the roof!",
        avatar: "https://ui-avatars.com/api/?name=Emma+Rodriguez&background=16f4d0&color=1a1a2e&size=200"
    },
    {
        id: 4,
        name: "David Park",
        role: "Product Manager",
        rating: 5,
        text: "Fast turnaround, excellent communication, and top-tier design quality. My Amazon storefront looks incredibly professional now. Worth every penny!",
        avatar: "https://ui-avatars.com/api/?name=David+Park&background=16f4d0&color=1a1a2e&size=200"
    },
    {
        id: 5,
        name: "Lisa Thompson",
        role: "Online Retailer",
        rating: 5,
        text: "The product listing images are absolutely stunning. Click-through rates improved by 120%. NJBL truly understands Amazon's visual requirements.",
        avatar: "https://ui-avatars.com/api/?name=Lisa+Thompson&background=16f4d0&color=1a1a2e&size=200"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Business Owner",
        rating: 5,
        text: "My packaging labels look premium and professional. Customer feedback has been overwhelmingly positive. NJBL's attention to detail is unmatched.",
        avatar: "https://ui-avatars.com/api/?name=James+Wilson&background=16f4d0&color=1a1a2e&size=200"
    },
    {
        id: 7,
        name: "Sophia Martinez",
        role: "Digital Marketer",
        rating: 5,
        text: "The PPC optimization combined with stunning visuals resulted in 3x ROI. NJBL understands both design and digital marketing perfectly.",
        avatar: "https://ui-avatars.com/api/?name=Sophia+Martinez&background=16f4d0&color=1a1a2e&size=200"
    },
    {
        id: 8,
        name: "Robert Anderson",
        role: "Entrepreneur",
        rating: 5,
        text: "Professional, reliable, and incredibly talented. The infographic designs make my products easy to understand at a glance. Sales are up 95%!",
        avatar: "https://ui-avatars.com/api/?name=Robert+Anderson&background=16f4d0&color=1a1a2e&size=200"
    }
];

// Function to generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '<span class="text-yellow-400 text-2xl">★</span>';
    }
    return stars;
}

// Function to render testimonials
function renderTestimonials() {
    const swiperWrapper = document.querySelector('.testimonialSwiper .swiper-wrapper');
    
    if (!swiperWrapper) return;
    
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="flex flex-col h-full">
                <!-- Navy Blue Section with Text -->
                <div class="relative bg-[#1a1a2e] rounded-t-2xl pt-8 pb-8 px-6 h-64">
                    <h3 class="text-white text-lg font-bold mb-3">${testimonial.name}</h3>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        "${testimonial.text}"
                    </p>
                    
                    <!-- Profile Image - Positioned at bottom of navy section -->
                    <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
                        <div class="w-24 h-24 rounded-full bg-gray-300 border-4 border-white overflow-hidden shadow-lg">
                            <img src="${testimonial.avatar}" 
                                 alt="${testimonial.name}" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
                
                <!-- White Section with Stars and Role -->
                <div class="bg-white rounded-b-2xl pt-14 pb-6 px-6 text-center">
                    <div class="flex justify-center gap-1 mb-2">
                        ${generateStars(testimonial.rating)}
                    </div>
                    <p class="text-gray-600 text-sm" data-i18n="testimonials.role">${testimonial.role}</p>
                </div>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });
}

// Initialize testimonials when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTestimonials);
} else {
    renderTestimonials();
}
