<script>

document.querySelectorAll('.categories > li > a').forEach(function(category) {
    category.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        var subCategories = this.nextElementSibling;
        if (subCategories.style.display === 'block') {
            subCategories.style.display = 'none';
        } else {
            subCategories.style.display = 'block';
        }
    });
});


</script>