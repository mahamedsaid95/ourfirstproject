const messageForm = document.querySelector('form');
const messageInput = document.querySelector('[name="message"]');
const formFeedback = document.querySelector('#feedback');
const saveButton = document.querySelector('button');

messageForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = messageInput.value;
    localStorage.setItem('message', message);
    formFeedback.textContent = 'Saved!';
    messageInput.setAttribute('disabled', true);
    saveButton.setAttribute('disabled', true);
  });

  const messageElement = document.querySelector('#message');
const message = localStorage.getItem('message');

messageElement.textContent = message;



var currentLocation = document.URL;
var url = new URL(currentLocation);
var bob = url.href.split("?")
var zip = bob[1].split("=")
$("#mapContainer").append(` <iframe width="600" height="450" style="border:0" loading="lazy" id="map" allowfullscreen
src="https://www.google.com/maps/embed/v1/place?q=${zip[1]}&key=AIzaSyCrQVvBFJJPIjoJ3XpVuJxmc5-NBGZoERc"></iframe>`)

// .attr("src", "https://www.google.com/maps/embed/v1/place?q=zipCode" + zip[1] + "&key=AIzaSyCrQVvBFJJPIjoJ3XpVuJxmc5-NBGZoERc"))
console.log(zip)
// console.log(url.href.split("?",1))
var c = url.searchParams.get("zipCode");
console.log(c);



