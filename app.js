document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const images = document.querySelectorAll('.gallery .image');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-name');

            // Highlight active nav item
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Filter images
            images.forEach(img => {
                const imgCategory = img.getAttribute('data-name');
                if (category === 'all' || imgCategory === category) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });
});
