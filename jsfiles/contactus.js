<script>

document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    // Perform validation or form submission here
    // This example will just log form data to the console
    const formData = new FormData(this);
    for(let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    // Implement actual form submission logic here, e.g., using Fetch API
    alert('Form submitted. Check console for details.');
});

</script>