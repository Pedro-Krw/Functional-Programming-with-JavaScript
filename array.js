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







                             //PENAMBAHAN BEBERAPA METHOD PADA ARRAY
//manipulasi array

var napi = ['zoro', 'war', 'bobi', 2, 4, true, false , 'kucing', ' kam', 'semua'];
   for (i =0; i < napi.length; i++){
  	// console.log(napi[i]);
  }  
 var pedro = ['bobi','war','zoro'];
   for (i = 0; i < pedro.length; i++){
   	// console.log(pedro.join(' '));
   }
//membuat array dengan mengunakan function
  function sa (){
  	var nama = ['bobi','war','zoro'];
  	 for (i = 0; i < sa.length; i++){

  	 }
  	 return nama;
  }
   // method pada array 
// Membuat function yang memiki array yang Membangkitkan bilangan random dari 1 sampai 5 
 var acak = ['siapa', 'saja', 'yang', 'datang', 'ke', 'sa', 'punya', 'rumah'];
// 1 pengunaan join untuk mengabungkan beberapa element menjadi string
   for (b = 0; b < acak.length; b++){
   	// console.log(acak.join(' '));
   }
// 2 pengunaan push dan pop [bekerja pada element terakhir pada array]
var arr = ['bobi', 'war', 'zoro', ' true', 'false'];
 for (i = 0; i <= arr.length; i++){

 }
// arr.push('Boolean', 'False', 'True');
// 3 pengunaan pop menghapus element terakhir pada array
arr.pop();
// 4 pengunaan shift dan unshift [bekerja pada element terakhir pada array]
//menambah di awal element
arr.unshift('pace');
//shift menghilangkan element pertama pada array 
arr.shift();
//Pengunaan Slice dan Splice untuk menembhkan element pada array dari Tengah RUMUSNYA [indexAwal, mauDihapusBerapa,mauDItambahelementapa]
arr.splice(2, 0, 'Waramber');
//membuat array baru dan mengambil element array ke dalamnya [slice awal dan akhir]
arr2 = arr.slice(1,4)
console.log(arr.join(' '));
// console.log(arr2.join(' '));

