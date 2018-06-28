var count=0;
window.alert = function(){};
        var defaultCSS = document.getElementById('bootstrap-css');
        function changeCSS(css){
            if(css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="'+ css +'" type="text/css" />'); 
            else $('head > link').filter(':first').replaceWith(defaultCSS); 
        }
        $( document ).ready(function() {
          var iframe_height = parseInt($('html').height()); 
          window.parent.postMessage( iframe_height, 'https://bootsnipp.com');
        });


function myFunction(){

    var mail = {
        to       : document.K_Form.To.value,
        from     : document.K_Form.form.value,
        subject  : document.K_Form.sub.value,
        message  : document.K_Form.txt.value,
    };
    sentBox(mail);
   // modal.style.display = "none";
}



function sentBox(obj) {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    var time=h + ":" + m + ""  ;
    $(document).ready(function () {
        count++;
            $("#demo").text(count);
        $("#id_for_sentBOX").append("<a href=\"#\" class=\"list-group-item\">\n" +
            "<div class=\"checkbox\">\n" +
            "<label>\n" +
            "<input type=\"checkbox\">\n" +
            "</label>\n" +
            "</div>\n" +
            "<span class=\"glyphicon glyphicon-star-empty\">\n" +
            "</span>\n" +
            "<span class=\"name\" style=\"min-width: 120px;display: inline-block;\" id=\"dddd\">\n" +
            "<!--name here-->\n"+ obj.to +
            "</span> \n" +
            "<span class=\"\" id=\"ssss\">\n" +
            "<!--subject-->\n" + obj.subject +
            "</span>\n" +
            "<span class=\"\">\n" +
            "-\n" +
            "</span>\n" +
            "<span class=\"text-muted\" style=\"font-size: 11px;\" id=\"tttt\">\n" +
            "<!--text-->\n"+ obj.message +
            "</span> \n"+
            "<span class=\"badge\" id=\"tt\">\n" +
            "" + time +
            "</span>\n" +
            "<span class=\"pull-right\">\n" +
            "<span class=\"glyphicon glyphicon-paperclip\">\n" +
            "</span>\n" +
            "</span>\n" +
            "</a>");

    });

}

				
				
function FinalFunc(){
	if(validate()){
		myFunction();
	}
	else{
		confirm("Sorry, to: ,Subject: and Message: fields are mandatory!!! ");
	}
}
				
				
				
				
				
function validate()
				  {
				  
				 
					 if( document.getElementById("inputEmail1").value == "" )
					 {
						window.alert( "To field can't be empty!" );
						document.getElementById("inputEmail1").focus() ;
						return false;
					 }
					 
					 if( document.getElementById("subject_1").value == "" )
					 {
						window.alert( "Subject Field can't be empty!" );
						document.getElementById("subject_1").focus() ;
						return false;
					 }
					 
					 if( document.getElementById("text_area").value == "" )
					 {
						window.alert( "Message field can't be empty!" );
						document.getElementById("text_area").focus() ;
						return false;
					 }
					
					 return( true );
				  }