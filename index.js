function number_input(y){
	var x = y.innerHTML;
	
	if(x=='CE'){
		document.getElementById('display').value="";
	}else{
	document.getElementById('display').value+=x;
	}

}