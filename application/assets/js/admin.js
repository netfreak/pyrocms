$(function() {	

	// Sort any tables with a class of 'sortable'
	$(".listTable").tablesorter();
	
	// Confirmation box
	$.ui.dialog.defaults.bgiframe = true;
	var dialogSet;
	$('a.confirm').click(function() {
		
		link = $(this).attr('href');

		// Set the dialog content
		$("#dialog").attr('title', 'Sure about that?').children('.content').text('Are you sure you would like to delete this? There can be no undoing!');
		
		// If not set up, set it
		if(!dialogSet) {
			dialogSet = true;
			$("#dialog").dialog({
				modal : true,
				buttons: {
					'Delete': function() {
						$(this).dialog('close');
						window.location.href = link;
					},
					Cancel: function() {
						$(this).dialog('close');
					}
				}
			});
		}
		
		// If set up, just load it again
		else {
			$("#dialog").dialog('open');
		}

		// Always block the href, JS will send the user if they click delete
		return false;
	});
	
	
	$(".tabs").tabs();
	

	$(".close").click(function(){
		$(this).parents(".message").hide("fast");
		return false;
	});
	
	$(".tooltip").tooltip({  
		showBody:	" - ",
		showURL:	false
	});	
	
	
	/* Admin left navigation dropdowns */
	$("#side-nav li").not(".active").find("ul").hide();
	$("#side-nav .button").click(function(){
		$("#side-nav ul").hide();
		if($(this).parent("li").hasClass("active")){
			$("#side-nav>li").removeClass("active").addClass("inactive").find(".expand").removeClass("expanded");
		}else{
			$("#side-nav>li").removeClass("active").addClass("inactive").find(".expand").removeClass("expanded");
			$(this).next("ul").show();
			$(this).parent().removeClass("inactive").addClass("active");
			$(this).find(".expand").addClass("expanded");
		}
	});
	
	
	/* Facebox modal window */
   $('a[rel*=modal]').facebox({
	   opacity : 0.4,
	   loadingImage : APPPATH + "assets/img/facebox/loading.gif",
	   closeImage   : APPPATH + "assets/img/facebox/closelabel.gif",
   });
	
});