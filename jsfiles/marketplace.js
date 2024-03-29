<script>
document.getElementById('category-filter').addEventListener('change', function() {
  var category = this.value;
  var listings = document.querySelectorAll('.service-listing');
  
  listings.forEach(function(listing) {
    if (category === 'all' || listing.classList.contains(category)) {
      listing.style.display = '';
    } else {
      listing.style.display = 'none';
    }
  });
});

// Additional JS for functionalities like the contact button
</script>