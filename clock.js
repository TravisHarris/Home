function startClock() {
	var date = new Date();
	var hours = date.getHours();
	var mins = date.getMinutes();
	setPeriod(hours);
	mins = addZero(mins);
	hours = twelveHour(hours);
	document.getElementById('time').innerHTML = hours + ":" + mins;
	setInterval(function(){ startClock(); }, 1000);
}

function addZero(min){
	if(min < 10){
		min = "0" + min;
	}
	return min;
}

function twelveHour(hour) {
	if(hour > 12){
		hour = hour - 12;
	}
	return hour;
}
function setPeriod(hour) {
	var period = "";
	if(hour < 12) {
		period = "morning";
	}
	else if(hour < 17) {
		period = "afternoon";
	}
	else {
		period = "evening";
	}
	document.getElementById('period').innerHTML = period;
}
