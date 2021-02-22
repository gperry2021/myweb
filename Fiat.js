var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	mileage: 88000,
	started: false,
	fuel: 0,
	start: function() {
		if (this.fuel == 0) {
			alert("The car is on empty, fill up before starting!");
		} else {
			this.started = true;
			alert("The car has started");
		}
	}, 

	stop: function() {
		this.started = false;
		alert("The car has stopped");
	},
	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " +
					this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
	} else {
		alert("Uh oh, out of fuel.");
		this.stop();
	}
	} else {
		alert("You need to start the engine first.");
	}
	},
	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
		alert("You have added " + amount + " Gallons of gas.")
	}
	
};

fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();