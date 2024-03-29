<script>
    
document.getElementById('serviceRequestForm').addEventListener('submit', function(event) {
    // Add form submission logic here
});

function updateSubcategories() {
    const category = document.getElementById('serviceCategory').value;
    const subCategorySelect = document.getElementById('serviceSubCategory');
    subCategorySelect.innerHTML = ''; // Clear current options

    if (category === 'homeServices') {
        const subCategories = ['Residential cleaning', 'Window washing', 'Gutter cleaning'];
        subCategories.forEach(subCategory => {
            const option = document.createElement('option');
            option.value = subCategory.toLowerCase().replace(/ /g, '');
            option.textContent = subCategory;
            subCategorySelect.appendChild(option);
        });
    }
    // Add more cases for different categories as needed
}

document.getElementById('regularPrice').addEventListener('input', calculateDiscount);
document.getElementById('desiredPrice').addEventListener('input', calculateDiscount);

function calculateDiscount() {
    const regularPrice = parseFloat(document.getElementById('regularPrice').value);
    const desiredPrice = parseFloat(document.getElementById('desiredPrice').value);
    if (!isNaN(regularPrice) && !isNaN(desiredPrice) && regularPrice > 0) {
        const discountPercentage = ((regularPrice - desiredPrice) / regularPrice) * 100;
        document.getElementById('discountPercentage').value = discountPercentage.toFixed(2) + '%';
    } else {
        document.getElementById('discountPercentage').value = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Redirect to service request form
    document.getElementById('seekServiceBtn').addEventListener('click', function() {
        window.location.href = 'requestform.html';
    });

    // Redirect to offer services form/page
    document.getElementById('offerServiceBtn').addEventListener('click', function() {
        window.location.href = 'offerform.html'; // Replace 'offerservice.html' with the actual URL for offering services
    });
});


</script>