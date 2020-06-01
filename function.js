//function expersion

var random = function (){
	var komputer = Math.floor(Math.random()*5);

		  if (komputer < 1){
		   	  komputer = 'gula';
	 }
	 else if (komputer >1 && komputer <= 2){
	 	komputer = 'teh';
	 }
	 else if (komputer >2 && komputer <=3){
	 	komputer= 'kopi'
	 }
	 else if (komputer >3 && komputer <=4){
	 	komputer= 'tepung'
	 }
	 else {
	 	komputer = 'minyak';
	 }

	return komputer;
}
alert (random());
