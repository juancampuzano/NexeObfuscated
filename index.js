const car = require('./models/car')();

function showMessage() {
  car.drive();
}

showMessage();