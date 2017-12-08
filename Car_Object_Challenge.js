function newCar(newMake, newYear, newModel, newColor) {
var speed = 50;
  return {
    make: newMake,
    year: newYear,
    model: newModel,
    color: newColor,
    getCar: function() {
      return this.make + ' ' + this.year + ' ' + this.model + ' ' + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      if (speed === 85) {
        console.log('Speed Limit is 85')
      } else {
          speed += 5;
      }

    },
    brake: function() {
      speed = speed - (speed *= (Math.random() * 0.5))
    }
  };

}
let Tom = new newCar('Ford', 1990, 'Fusion', 'Red');
Tom.getCar();
