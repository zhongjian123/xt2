window.onload=function(){
			var i=0;
			var timer;
			timer=setInterval(hao,2500)
			function hao(){
				var ht=new Array(5);
				ht[0]="images/slider-1.jpg";
				ht[1]="images/slider-2.jpg";
				ht[2]="images/slider-3.jpg";
				ht[3]="images/slider-4.jpg";
				ht[4]="images/slider-5.jpg";
		    var x=document.getElementById("photos");
		    x.setAttribute("src",ht[i]);
		    if(i==4){i=0;}
		    else{i++;}
			}
	}