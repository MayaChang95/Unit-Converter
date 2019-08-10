function outFah() {
	var celsius = document.getElementById("celsius").value;
	var fah = document.getElementById("fah");
	
		if(celsius==null){
			fah.value=" ";
			
		}else {		
			fah.value= ((celsius * 1.8) +32).toFixed(2);
		}
	
}


function outPds() {
	var kilos = document.getElementById("kilos").value;
	var	pounds = document.getElementById("pounds");
	if(kilos<0) {
		pounds.value=null;

	}else {
		pounds.value = (kilos *2.2).toFixed(2);
	}


}


function outCel() {
	var celsius = document.getElementById("celsius");
	var fah = document.getElementById("fah");
		if(fah==null){
			celsius.value=null;
		}else {
			celsius.value= ((fah.value - 32) / 1.8).toFixed(2);
		}

		



	

}

function outKil() {
	var kilos = document.getElementById("kilos");
	var	pounds = document.getElementById("pounds").value;


	if(pounds<0) {
		kilos.value=null;

	}else {
		kilos.value= (pounds / 2.2).toFixed(2);
	}

	

}


function outForMeter() {
	var meters = document.getElementById("meters").value;
	var feet = document.getElementById("feet");
	var	inches = document.getElementById("inch");

	if(meters==null) {
		feet.value=null;
		inches.value=null;
	}else {
		feet.value =Math.floor((meters * 3.2808));
		var num = Math.floor((meters * 3.2808));
		inches.value = (((meters * 3.2808)-num) * 12).toFixed(2);
	}
}

function forMeter() {
	var meters = document.getElementById("meters");
	var feet = document.getElementById("feet").value;
	var	inches = document.getElementById("inch").value;

	if(feet==null && inches==null) {
		meters.value = null;
	}else {
		meters.value = ((feet * 0.3048) + (inches * 0.0254)).toFixed(2);
		
	}
}



