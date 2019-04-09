function tinhBinhPhuong(x){
  return x * x ;
  }

function tinhTheKy(x){
  return Math.ceil(x / 100) ;
}

function catChuoi(x){
 return x.slice(0,10) + "...";
}
function vietHoa(x) {
		  
		  var result =          x.charAt(0).toUpperCase() +              x.slice(1).toLowerCase();
		  return result;
		}
//bài 5
//var x = [];
function minnn(x){



var y = x.sort(function(a,b){
return a - b ;
});
console.log(x[0]);
}



//minnn([12,10,11,13,22,21,130]);


function max2(x){



var y = x.sort(function(a,b){
return b - a ;
});
console.log(x[1]);
}

function catChuoi(x){
 return "..." + x.slice(19,29)  ;
}