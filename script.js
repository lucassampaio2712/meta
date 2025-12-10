const videos = document.querySelectorAll('.video-carousel video');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showVideo(i) {
    videos.forEach(v => v.classList.remove('active'));
    videos[i].classList.add('active');
}

showVideo(index);

next.addEventListener('click', () => {
    index = (index + 1) % videos.length;
    showVideo(index);
});

prev.addEventListener('click', () => {
    index = (index - 1 + videos.length) % videos.length;
    showVideo(index);
});

// Troca automática
setInterval(() => {
    index = (index + 1) % videos.length;
    showVideo(index);
}, 8000);
