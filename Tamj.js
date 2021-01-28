function clunk(times) {
	var num = times;
	while (num > 0) {	//while num is greater than 0 it will subtract 1 from num then display clunk
		display("clunk");
		num = num -1;
	}
}

function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) {	//Checks to see if size = 0 if not it moves on
		display("clank");
	}else if (size == 1) {
		display("thunk");	//Checks to see if size is equal to 1 if not moves on
	}else{
		while (size > 1) {		//if size is greater than 1 it does facky multiplied by size continues until size is 1
			facky = facky * size;
			size = size -1;		//subtracts size by 1
		}
		clunk(facky); 	//Puts facky into the clunk function
	}
}

function display(output) {
	console.log(output);
	document.write(output + " "); //displays clank or think or clunk the number of times that output is
	clunkCounter = clunkCounter + 1;
}
//If the number is less than 0 it will display Clank
//If the number is equal to 1 it will be Thunk
//If the number is greater than 1 it will be Clunk
var clunkCounter = 0;
thingamajig(3);	//The number that will display what output it is
console.log(clunkCounter);
document.write(clunkCounter);