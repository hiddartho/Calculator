function number_input(y){
	var x = y.innerHTML;
	
	if(x=='CE'){
		document.getElementById('display').value="";
	}else if(x=='='){
		var res=math.evaluate(document.getElementById('display').value);
		document.getElementById('display').value=res;
	}else{
	document.getElementById('display').value+=x;
	}

}