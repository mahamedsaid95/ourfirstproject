const api = {
	key: "AIzaSyCrQVvBFJJPIjoJ3XpVuJxmc5-NBGZoERc",
}

var city = document.getElementById("city");
localStorage.setItem("city", inputCity.value);

var address = document.getElementById("address");
localStorage.setItem("address", inputAddress.value);

var address2 = document.getElementById("address2");
localStorage.setItem("address2", inputAddress2.value);

var zip =  document.getElementById("zip");
localStorage.setItem("zip", inputZip.value);

function store(){
    var inputCity= document.getElementById("city");
    localStorage.setItem("city", inputCity.value);
   }