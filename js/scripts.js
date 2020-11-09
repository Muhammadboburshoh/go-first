var pedestrianSpeed = 3.6;
var bicycSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

var resultPedestrianHour = document.querySelector('.pedestrian-hour');
var resultPedestrianMin = document.querySelector('.pedestrian-min');
var resultPedestrianSecond = document.querySelector('.pedestrian-seconds');

var resultBicycHour = document.querySelector('.bicycle-hour');
var resultBicycMin = document.querySelector('.bicycle-min');
var resultBicycSecond = document.querySelector('.bicycle-seconds');

var resultCarHour = document.querySelector('.car-hour');
var resultCarMin = document.querySelector('.car-min');
var resultCarSecond = document.querySelector('.car-seconds');

var resultPlaneHour = document.querySelector('.plane-hour');
var resultPlaneMin = document.querySelector('.plane-min');
var resultPlaneSecond = document.querySelector('.plane-seconds');


var elForm = document.querySelector('.page-form');

elForm.addEventListener ('submit', function (evt) { 
  evt.preventDefault();

  var elNumberInput = parseFloat(elForm.querySelector('.distance-input').value.trim(), 10);

  var warningDistanceInput = document.querySelector(".werning-input-distance");

  if (elNumberInput >= 0 && isNaN) {
    var pedestrianHour = Math.floor(elNumberInput / pedestrianSpeed);
    var pedestrianMin = Math.floor(((elNumberInput / pedestrianSpeed) - Math.floor(elNumberInput / pedestrianSpeed)) *60);
    var pedestrianSecond = Math.floor((3600 * (elNumberInput / pedestrianSpeed)) - (pedestrianHour * 3600 + pedestrianMin * 60));

    var bicycHour = Math.floor(elNumberInput / bicycSpeed);
    var bicycMin = Math.floor(((elNumberInput / bicycSpeed) - Math.floor(elNumberInput / bicycSpeed)) *60);
    var bicycSecond = Math.floor((3600 * (elNumberInput / bicycSpeed)) - (bicycHour * 3600 + bicycMin * 60));

    var carHour = Math.floor(elNumberInput / carSpeed);
    var carMin = Math.floor(((elNumberInput / carSpeed) - Math.floor(elNumberInput / carSpeed)) *60);
    var carSecond = Math.floor((3600 * (elNumberInput / carSpeed)) - (carHour * 3600 + carMin * 60));

    var planeHour = Math.floor(elNumberInput / planeSpeed);
    var planeMin = Math.floor(((elNumberInput / planeSpeed) - Math.floor(elNumberInput / planeSpeed)) *60);
    var planeSecond = Math.floor((3600 * (elNumberInput / planeSpeed)) - (planeHour * 3600 + planeMin * 60));


    resultPedestrianHour.textContent = pedestrianHour;
    resultPedestrianMin.textContent = pedestrianMin;
    resultPedestrianSecond.textContent = pedestrianSecond;

    resultBicycHour.textContent = bicycHour;
    resultBicycMin.textContent = bicycMin;
    resultBicycSecond.textContent = bicycSecond;

    resultCarHour.textContent = carHour;
    resultCarMin.textContent = carMin;
    resultCarSecond.textContent = carSecond;

    resultPlaneHour.textContent = planeHour;
    resultPlaneMin.textContent = planeMin;
    resultPlaneSecond.textContent = planeSecond;

    warningDistanceInput.classList.add("d-none")
  }
  else {
    warningDistanceInput.classList.remove("d-none")
  }

})

