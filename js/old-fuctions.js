$(document).ready(function() {  
        
		var cant = 0;
		$('input[type=checkbox]').click(function(){
                cant++;
				if(cant > 4){
					alert('Maximum of 4 comparison parts');
					cant=0;
				}
        }); 
});