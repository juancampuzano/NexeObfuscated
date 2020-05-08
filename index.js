const { logger } = require('@tulpep/vtul-utilities').configurations;
const car = require('./models/car')();

function showMessage() {
  logger.success('Prueba');
  car.drive();
}

showMessage();