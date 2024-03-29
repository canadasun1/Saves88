<script>
    
document.addEventListener('DOMContentLoaded', function() {
  var searchButton = document.getElementById('searchButton');
  if (searchButton) {
    searchButton.addEventListener('click', function() {
      var service = document.getElementById('serviceInput').value;
      var location = document.getElementById('locationInput').value;
      if (service && location) {
        // Replace with your actual search logic
        console.log("Searching for", service, "in", location);
      } else {
        // User feedback if fields are empty
        console.log("Please enter both a service and a location to search for.");
      }
    });
  }

  // Delayed pop-up for sign-up discount
  setTimeout(function() {
    // Replace alert with a less intrusive notification in production
    alert("Sign up now and receive a 10% discount on your first service!");
  }, 5000);
});



document.getElementById('countrySelect').addEventListener('change', function() {
    var country = this.value;
    var stateSelect = document.getElementById('stateSelect');
    var citySelect = document.getElementById('citySelect');
    
    // Clear previous options
    stateSelect.innerHTML = '<option value="">Select a state</option>';
    citySelect.innerHTML = '<option value="">Select a city</option>';

    // Load states for selected country
    if (country === "usa") {
      // Add states for USA
      var usaStates = ["California", "New York", "Illinois"];
      usaStates.forEach(function(state) {
        var option = new Option(state, state.toLowerCase());
        stateSelect.add(option);
      });
    } else if (country === "canada") {
      // Add provinces for Canada
      var canadaProvinces = ["Ontario", "British Columbia", "Quebec"];
      canadaProvinces.forEach(function(province) {
        var option = new Option(province, province.toLowerCase());
        stateSelect.add(option);
      });
    }
  });

  document.getElementById('stateSelect').addEventListener('change', function() {
    var state = this.value;
    var citySelect = document.getElementById('citySelect');

    // Clear previous options
    citySelect.innerHTML = '<option value="">Select a city</option>';

    // Load cities for selected state/province
    var citiesByState = {
      "california": ["Los Angeles", "San Francisco", "San Diego"],
      "new_york": ["New York City", "Buffalo", "Rochester"],
      "illinois": ["Chicago", "Springfield", "Peoria"],
      "ontario": ["Toronto", "Ottawa", "Mississauga"],
      "british_columbia": ["Vancouver", "Victoria", "Kelowna"],
      "quebec": ["Montreal", "Quebec City", "Laval"]
    };

    if (citiesByState[state]) {
      citiesByState[state].forEach(function(city) {
        var option = new Option(city, city.toLowerCase().replace(/\s+/g, '_'));
        citySelect.add(option);
      });
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const items = document.querySelectorAll('.testimonial-item');
  const totalItems = items.length;

  document.querySelector('.prev-testimonial').addEventListener('click', function() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
  });

  document.querySelector('.next-testimonial').addEventListener('click', function() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
  });
});

</script>