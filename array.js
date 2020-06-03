//manipulasi array

var napi = ['pedro', 'berthus', 'bertho', 2, 4, true, false , 'kucing', ' kam', 'semua'];
   for (i =0; i < napi.length; i++){
  	// console.log(napi[i]);
  }  

 var pedro = ['Pedro','Teriyanus','Korwa'];
   for (i = 0; i < pedro.length; i++){
   	// console.log(pedro.join(' '));
   }
//membuat array dengan mengunakan function
  function sa (){
  	var nama = ['Pedro','Teriyanus','Korwa'];
  	 for (i = 0; i < sa.length; i++){

  	 }
  	 return nama;
  }
// console.log(sa().join(' '));
// Membuat function yang memiki array yang Membangkitkan bilangan random dari 1 sampai 5 
   function user (){
   	 var  komputer =  Math.floor(Math.random()*5);
   	 if (komputer <1 ){
   	 	komputer = 'Satu';
   	 }
   	 else if (komputer > 1 && komputer <= 2){
   	 	komputer = 'dua';
   	 }
   	 else if (komputer > 2 && komputer <= 3){
   	 	komputer = 'Tiga';
   	 }
   	 else if (komputer > 3 && komputer <= 4){
   	 	komputer = 'Empat';
   	 }
   	 else {
   	 	komputer = 'Lima';
   	 }
  return komputer;
   }

   console.log(user());