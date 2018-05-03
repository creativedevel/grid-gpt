$(document).ready(function(){    
    $('.btn-more').click(function() {
    	$(this).hide();
    	$(this).parent().append('<div class="loading" style="width:150px;margin:0 auto;">Please Wait...</div>');
    	var action 	= $(this).attr('data-action');
	    var page 	= $(this).attr('data-page');
	    var append 	= $(this).attr('data-append');
	    var t = $(this);
	    if (action) { 
	        $.ajax({
	            url : action,
	            method : 'POST',
	            data : {page:page},
	            dataType : 'json',         
	            success:function(data){
	            	$(append).append(data.results);
	            	if(data.page <= data.total_page){	            		
	            		$(t).attr('data-page', data.page);
	            	}else{
                        $(t).parent().html('<a href="'+ base_url + 'indeks" class="load__button loadmore">INDEKS</a>');
					}
					$(t).show();
					$('.loading').remove();
	            },
	            error: function(xhr, textStatus, errorThrown){
	                alert("Oops...", "Something went wrong!", "error");
	            }       
	        });
	    }else{
	        alert("Oops...", "Something went wrong!", "error");      
	    }
    });

	$("#search_input").keypress(function (e) {
		if (e.which == 13) {
			window.location = base_url + "search?q="+$(this).val();
  	    	return false;
  	  	}
	});

	$("#sort").change(function (e) {
		window.location = base_url + "search?q="+$('.searchbox__input').val()+"&sort="+$(this).val();
	});
});