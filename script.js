//your JS code here. If required.
function daysOfYear(year){
	if(isYearLeap(year)){
		return 366;
	}
	return 365;
}

function isYearLeap(year) {
	if(((year%4 == 0) && (year%100 != 0) ) || (year%400 == 0)){
		return true;
	}
}