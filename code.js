var word = "bottles";
						
				var count = 99;
				
				while (count > 0) {
						
					console.log(count + " " + word + " of pop on the wall");
					
					document.writeln("<p>" + count + " " + word + " of pop on the wall</p>");
							
					console.log(count + " " + word + " of pop,");
							
					document.writeln("<p>" + count + " " + word + " of pop,</p>");
							
					console.log("Take one down, pass it around,");
							
					document.writeln("<p>Take one down, pass it around,</p>");
							
					count = count - 1;
							
				if (count > 0) {
							
					console.log(count + " " + word + " of pop on the wall.");
								
					document.writeln("<p>" + count + " " + word + " of pop on the wall.</p>");
								
				}	else {
							
						console.log("No more " + word + " of pop on the wall.");
								
					document.writeln("<p>No more " + word + " of pop on the wall.</p>");
							
				}
					
			}