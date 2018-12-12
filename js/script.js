function Elevator(number) {

	this.number = number;
	this.floor = 1;
	this.direction = "up";
	this.doorsOpen = "false";
	this.tripsMade = 0;
	this.floorsPassed = 0;
	this.maintenance = false;
	this.maxTrips = 100;

	this.updateDirection = function() {
		if(this.direction == "up") {
			this.direction = "down";
		}
		else {
			this.direction = "up";
		}
	}

	this.updateFloor = function() {
		if(this.direction == "up") {
			this.floor++;
		}
		else {
			this.floor--;
		}
		return this.floor;
	}

	this.updateTrips = function() {
		this.trips++;
	};

	this.updateFloors = function() {
		this.floors++;
	};
}

function elevatorController(toFloor) {

}

function findAvailableElevator() {
	
}

// Set max floors
var maxFloors = 10;

// Set number of elevators
var numElevators = 3;

// Initialize elevator objects
for (var i = 0; i <= numElevators - 1; i++) {
	var elevator[i] = new Elevator(i);
}