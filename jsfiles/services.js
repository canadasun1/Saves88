<script>
    
    
document.addEventListener('DOMContentLoaded', function () {
    const seekServiceBtn = document.getElementById('seekServiceBtn');
    const offerServiceBtn = document.getElementById('offerServiceBtn');
    const serviceForm = document.getElementById('serviceForm');

    seekServiceBtn.addEventListener('click', function() {
        serviceForm.innerHTML = '<p>Form for Seeking Services</p>';
        seekServiceBtn.classList.add('active');
        offerServiceBtn.classList.remove('active');
    });

    offerServiceBtn.addEventListener('click', function() {
        serviceForm.innerHTML = '<p>Form for Offering Services</p>';
        offerServiceBtn.classList.add('active');
        seekServiceBtn.classList.remove('active');
    });
});

</script>