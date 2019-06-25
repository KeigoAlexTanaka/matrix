const showSlide=(n)=>{
  var i=0;
  var j = document.getElementsByClassName("slide");
  if (n > j.length) {index = 1};
  if (n < 1) {index = j.length};
  while(i<j.length){
  	j[i].style.display = "none";
		i++;
  }
  j[index-1].style.display = "block";
  j[index-1].style.margin = "0px auto 0px auto";
};

var index = 1;
showSlide(index);

const next=(n)=>{
  showSlide(index += n);
}	
var i=0;
function commit(){
	if(i===0){
		console.log("hello");
		var beg=document.getElementById('beginning');
		var content=document.getElementById('unhide');
		var intro=document.getElementById('intro');
		var skip=document.getElementById('skip');
		beg.style.animation="sleeper 1s linear 1 forwards";
		document.getElementById('intro').play();
		setTimeout(function(){beg.style.display="none";}, 12000);
		setTimeout(function(){intro.style.display="none";}, 12000);
		skip.style.display="none";
	  setTimeout(function(){content.style.animation="waker 1s linear 1 forwards";}, 11000);
	}
	i++;
}

function skip(){
	var beg=document.getElementById('beginning');
	var content=document.getElementById('unhide');
	var skip=document.getElementById('skip');
	var intro=document.getElementById('intro');
	beg.style.animation="sleeper 1s linear 1 forwards";
	beg.style.display="none";
	skip.style.display="none";
	intro.style.display="none";
  content.style.animation="waker 1s linear 1 forwards";
  i++;
}

var modal = document.getElementById("modal");
var open = document.getElementById("open");
var close = document.getElementById("close");
open.onclick = function() {
	modal.style.visibility="visible";
}
close.onclick = function() {
	modal.style.visibility="hidden";
}