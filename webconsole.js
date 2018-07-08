	function echo(text) {
  		console2.innerHTML += text.toString() + "<br>";

  	

  	if (conIn.offsetTop > conFrame.offsetHeight - conIn.offsetHeight) {cls(); console2.innerHTML += text.toString() + "<br>";}

  		return true;
  	}

  	function cls() {
  		console2.innerHTML = "";
  		return true;
  	}

  	


  	
  	function search(ele) {
    if(event.key === 'Enter') {
    	echo("> " + ele.value); 

    	try {
    echo ("< " + eval(ele.value))
		}
	catch(err) {
    echo("! " + err.message);
	}

        ele.value = '';

    }
}



  
    	var console2 = document.getElementById("console2");
    	var conIn = document.getElementById("conIn");
    	var conFrame = document.getElementById("conframe");
    	
      // Notice there is no 'import' statement. 'tf' is available on the index-page
      // because of the script tag above.

      // Define a model for linear regression.
      

        
      	echo("<b>JS WebConsole version 0.2</b><br>");
     

      