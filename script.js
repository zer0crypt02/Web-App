const header = document.querySelector('.accordion-header');
const content = document.querySelector('.accordion-content');

header.addEventListener('click', function () {
    this.classList.toggle('active');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
});
