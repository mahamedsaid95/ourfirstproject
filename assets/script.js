const addressForm = document.querySelector('#addressForm')
const formFeedback = document.querySelector('#feedback');
const addressInput = document.querySelector('[name="address"]');
const saveButton = document.querySelector('button');

addressForm.addEventListener("submit", event => {
    event.preventDefault();
    const address = addressInput.value;
    localStorage.setItem('address', address);
    formFeedback.textContent = 'Saved!';
    messageInput.setAttribute('disabled', true);
    saveButton.setAttribute('disabled', true);
  });

  const addressElement = document.querySelector('#address');
const address = localStorage.getItem('address');

addressElement.textContent = address;



// var formSubmitHandler = function (event) {
//     event.preventDefault();
  

// const api = {
// 	key: "AIzaSyCrQVvBFJJPIjoJ3XpVuJxmc5-NBGZoERc",
// }

// var city = document.getElementById("city");
// localStorage.setItem("city", inputCity.value);

// var address = document.getElementById("address");
// localStorage.setItem("address", inputAddress.value);

// var address2 = document.getElementById("address2");
// localStorage.setItem("address2", inputAddress2.value);

// var zip =  document.getElementById("zip");
// localStorage.setItem("zip", inputZip.value);

// }
// function store(){
//     var inputCity= document.getElementById("city");
//     localStorage.setItem("city", inputCity.value);
// }