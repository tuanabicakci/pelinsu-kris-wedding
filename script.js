
const leftPolaroid = document.querySelector('.polaroid-left');
const rightPolaroid = document.querySelector('.polaroid-right');
const fadeItems = document.querySelectorAll('.fade');
let revealedItems = new Set(); // to prevent repeated animations


const handleScroll = () => {
    const triggerPoint = window.innerHeight * 0.8;

    [leftPolaroid, rightPolaroid].forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerPoint) {
            if (el.classList.contains('polaroid-left')) {
                el.classList.add('animate-left');
            } else if (el.classList.contains('polaroid-right')) {
                el.classList.add('animate-right');
            }
        }
    });

    fadeItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.85;

        if (rect.top < triggerPoint && !revealedItems.has(item)) {
            revealedItems.add(item);

            const isScheduleItem = item.classList.contains('schedule-item')||item.classList.contains('item');
            const isLargeScreen = window.innerWidth > 1024; // adjust this breakpoint as needed
            const delay = (isScheduleItem && isLargeScreen) ? index * 100 : 0;

            setTimeout(() => {
                item.classList.add('visible');
            }, delay);
        }
    });

};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
const galleryItems = document.querySelectorAll(".gallery img");

galleryItems.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});