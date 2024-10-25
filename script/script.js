document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');

    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });

    card.addEventListener('mouseover', function () {
        this.style.transition = 'transform 0.3s';
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseout', function () {
        this.style.transition = 'transform 0.3s';
        this.style.transform = 'translateY(0)';
    });
});
