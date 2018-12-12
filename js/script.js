function Elevator(number, floor, dir) {

	this.number = number;
	this.floor = 1;
	this.direction = "up";
	this.trips = 0;
	this.floors = 0;
	this.maintenance = false;

	this.updateDirection = function() {
		if(this.direction == "up") {
			this.direction = "down";
		else 
			this.direction = "up";
		}
	}

	this.updateFloor = function() {
		return this.floor;
	}

	this.updateTrips = function() {
		return this.trips++;
	};

	this.updateFloors = function() {
		return this.floors++;
	};
}

function elevatorController(toFloor) {

}

// Set max floors
var maxFloors = 10;

// Set number of elevators
var numElevators = 3;

// Initialize elevator objects
for (var i = 0; i <= numElevators -1; i++) {
	Things[i]
}