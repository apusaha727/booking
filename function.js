function Calculateprice(){
	/***************Define global price variable start*******************/
			var bedroomprice;
			var bathroomprice;
			var packageprice;
			/***************Define global price variable End*******************/
			/***************Get Selected Value start*******************/
			var noofstdio = parseFloat(jQuery("#Studio option:selected").val());
			var noofbathrooms = parseFloat(jQuery("#Bathrooms option:selected").val());
			var packagename = parseFloat(jQuery("#package option:selected").val());
			var squirefeet = parseFloat(jQuery("#squirefeet").val());
			/***************Get Selected Value End*******************/
			/***************Get Selected Label start*******************/
			var bedroomlabel = jQuery("#Studio option:selected").attr('label');
			var bathroomlabel = jQuery("#Bathrooms option:selected").attr('label');
			var packagelabel = jQuery("#package option:selected").attr('label');
			/***************Get Selected Label End*******************/
			/***************Set Price for bedroom Start*******************/
			if(bedroomlabel == "stdio"){
				bedroomprice = parseFloat(99);
			}else if(bedroomlabel == "1bed"){
				bedroomprice = parseFloat(104);
			}else if(bedroomlabel == "2bed"){
				bedroomprice = parseFloat(119);
			}else if(bedroomlabel == "3bed"){
				bedroomprice = parseFloat(149);
			}else if(bedroomlabel == "morethanfour"){
				bedroomprice = parseFloat(22);
			}
			/***************Set Price for bedroom End*******************/
			/***************Set Price for bathroom Start*******************/
			if(bathroomlabel == "1bath"){
				bathroomprice = parseFloat(20);
			}else if(bathroomlabel == "2bath"){
				bathroomprice = parseFloat(40);
			}else if(bathroomlabel == "3bath"){
				bathroomprice = parseFloat(60);
			}else if(bathroomlabel == "4bath"){
				bathroomprice = parseFloat(80);
			}else if(bathroomlabel == "5bath"){
				bathroomprice = parseFloat(100);
			}
			/***************Set Price for bathroom End*******************/
			/***************Set Price for Packages Start*******************/
			if(packagelabel == "standard"){
				packageprice = parseFloat(1);
			}else if(packagelabel == "deep"){
				packageprice = parseFloat(.85);
			}else if(packagelabel == "movein"){
				packageprice = parseFloat(.8);
			}
			/***************Set Price for Packages End*******************/
			
		/**********************Calculate and show book now price Start***********************/	
			if(bedroomlabel == "morethanfour"){
				jQuery("#sqfcontainer").css("display", "block");
				jQuery("div.bathroomsarea").css("display", "none");
				var maintotal = Math.round((squirefeet * 0.09) * packageprice);
				jQuery("#EstimateAmount").html(maintotal);	
			} else{
				jQuery("#sqfcontainer").css("display", "none");
				jQuery("div.bathroomsarea").css("display", "block");
				var maintotal = Math.round((bedroomprice + bathroomprice) * packageprice);
				jQuery("#EstimateAmount").html(maintotal);	
			}
		/**********************Calculate and show book now price End***********************/
}

/**********************Event Triggers***********************/

	jQuery("#Studio").change(function(event) {
			Calculateprice();
	});
	
	jQuery("#Bathrooms").change(function(event) {
		Calculateprice();
   });
	
	jQuery("#package").change(function(event) {
		Calculateprice();
   });
   /*jQuery("#squirefeet").change(function(event) {
		Calculateprice();
   });
	jQuery("#squirefeet").on( "keyup", function(event){
		Calculateprice();
    });*/			
	
	var n = document.getElementById("squirefeet");

    n.addEventListener("input", function(e) {
        Calculateprice(); 
    }, false);

    n.addEventListener("keyup", function(e) {
        Calculateprice();
    }, false);

     n.addEventListener("change", function(e) {
        Calculateprice();
    }, false);
