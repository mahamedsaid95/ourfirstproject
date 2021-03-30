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
  
    const data = document.getElementById("zipCode").value;

  
    // const value = data.get('zipCode');
    // console.log(value)
  
    console.log(data);
    window.location.href = 'results.html?zip_code=' + data
  }
  
//   const form = document.querySelector('form');
//   form.addEventListener('submit', handleSubmit);

document.getElementById('button-1').addEventListener('click', function(){
    handleSubmit(event);

})
