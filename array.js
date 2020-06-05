//manipulasi array

var napi = ['zoro', 'war', 'bobi', 2, 4, true, false , 'forEach', 'Boolean', 'Function'];
   for (i =0; i < napi.length; i++){
  	console.log(napi[i]);
  }  
 var dia = ['bobi','war','zoro'];
   for (i = 0; i < dia.length; i++){
   	console.log(dia.join(' '));
   }
//membuat array dengan mengunakan function
  function sa (){
  	var nama = ['bobi','war','zoro'];
  	 for (i = 0; i < sa.length; i++){

  	 }
  	 return nama;
  }
   // method pada array 
 var acak = ['siapa', 10,'saja', 12,'yang', 22,'datang', 4,'ke',0, 'sa', 'punya', 'rumah'];
// 1 pengunaan join untuk mengabungkan beberapa element menjadi string
   for (b = 0; b < acak.length; b++){
   	console.log(acak.join(' '));
   }
// 2 pengunaan push dan pop [bekerja pada element terakhir pada array]
var arr = ['bobi', 'war', 'zoro', ' true', 'false'];
 for (i = 0; i <= arr.length; i++){

 }
arr.push('Boolean', 'False', 'True');
//3 pengunaan pop menghapus element terakhir pada array
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
// mathod forEach dan map pada array [looping]
var angka = [1,2,3,4,5,6,7,8,9,'sapi'];
angka.forEach( function(r){
    console.log(r);
});
console.log(arr.join(' '));
console.log(arr2.join(' '));

var insos = ['pinang', 'sirih', 'kapur', true, false];

insos.forEach(function(e) {
    console.log(e);
});

var bilangan = [2,4,5,7,8,3,1,0,10,9];
bilangan.sort(function(a,b){
	 return a-b;
})
console.log(bilangan.join(' '))