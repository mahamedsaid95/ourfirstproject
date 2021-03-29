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





var inputZip = document.URL;
var url = new URL(inputZip);
console.log(url)
var c = url.searchParams.get("inputZip");
console.log(c);



