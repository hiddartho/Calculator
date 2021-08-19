function number_input(y){
	var x = y.innerHTML;
	
	if(x=='CE'){
		document.getElementById('display').value="0";
	}else if(x=='='){
		if(document.getElementById('display')==0){
			document.getElementById('display')=0;
		}else{
		var res=math.evaluate(document.getElementById('display').value);
		if(res=='Infinity'){
			document.getElementById('display').value='Its a zero Division you fool';
		}else{
			document.getElementById('display').value=res;
		}
		}
	}else{
		if(document.getElementById('display').value==0){
			document.getElementById('display').value=x;
		}else{
			document.getElementById('display').value+=x;
		}
	}
//pull this
}