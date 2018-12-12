function Elevator(number, floor, direction, trips, floors, maintenance) {

	this.number = number;
	this.floor = floor;
	this.direction = direction;
	this.trips = 0;
	this.floors = 0;
	this.maintenance = false;

	this.updateTrips = function() {
		return this.trips++;
	};

	this.updateFloors = function() {
		return this.floors++;
	};
}

function elevatorController(toFloor) {
	
}