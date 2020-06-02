 // pembuatan functional programing


    // secara declaration

    function kali (){
    	var a = 10;
    	var b = 20;
    	var hasil = a * b;
    	return hasil;
    }


    function tambah (){
    	var c = 5;
    	var d = 15;
    	var total = c + d;
    	return total;
    }

    function acak (){
    	var komputer = Math.floor(Math.random()*7);
           if (komputer < 1){
           	komputer = 10;
           }
           else if (komputer > 1 && komputer <= 2){
           	komputer = 20;
           }
           else if (komputer > 2 && komputer <= 3){
           	komputer = 30;
           }
           else if (komputer > 3 && komputer <= 5){
           	komputer = 40;
           }
           else if (komputer > 5 && komputer <=6){
           	komputer = 50;
           }
           else {
           	komputer = 60;
           }
           return komputer;
           } 

    function nama (){
    	var sa = 'Pedro Korwa';
    	return sa;
    }
alert ( acak() + tambah() + kali());