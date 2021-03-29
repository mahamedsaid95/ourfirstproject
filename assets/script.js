var time;
var date;
var update = function () {
    date = moment()
    time.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};
$(document).ready(function(){
    time = $('#a1');
    update();
    setInterval(update, 1000);
});


// const api = {
// 	key: "AIzaSyCrQVvBFJJPIjoJ3XpVuJxmc5-NBGZoERc",
//     base: "https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters",
// }

function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const value = data.get('inputZip');
    console.log(inputZip)
  
    console.log({ value });
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);

document.getElementById('button-1').addEventListener('click', function(){
  window.location.href = 'results.html?zip_code='
})
