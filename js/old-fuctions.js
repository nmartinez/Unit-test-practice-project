$(document).ready(function() {  
        
		var cant = 0;
		$('input[type=checkbox]').click(function(){
            if($(this).attr("checked")){
			  cant++;
			  if(cant > 4){
					alert('Maximum of 4 comparison parts');
				}
			}
			else{
				cant--;
			}
        });	
});