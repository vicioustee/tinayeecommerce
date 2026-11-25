function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = trailer.querySelector('video');
    const isOpening = !trailer.classList.contains('active');

    trailer.classList.toggle('active', isOpening);

    if (isOpening) {
        video.play().catch((error) => {
            console.error('Unable to play the trailer:', error);
        });
    } else {
        video.pause();
    }
}

function  changeBg(bg, title){
    const banner = document.querySelector('.banner');
    banner.style.backgroundImage = `url("./images/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    if (title) {
        document.querySelectorAll('.content').forEach(content => {
            content.classList.toggle('active', content.classList.contains(title));
        });
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        const banner = document.querySelector('.banner');
        const showKids = link.dataset.filter === 'kids';

        if (showKids) {
            event.preventDefault();
        }

        banner.classList.toggle('kids-active', showKids);
    });
});

const kidsGallery = document.querySelector('.kids-gallery');
const banner = document.querySelector('.banner');

kidsGallery.addEventListener('mouseenter', () => {
    kidsGallery.dataset.previousBackground = banner.style.backgroundImage;
});

kidsGallery.addEventListener('mouseover', event => {
    const image = event.target.closest('img[data-background]');

    if (image) {
        banner.style.backgroundImage = `url("${image.dataset.background}")`;
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    }
});

kidsGallery.addEventListener('mouseleave', () => {
    banner.style.backgroundImage = kidsGallery.dataset.previousBackground;
});