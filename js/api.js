		
	$(document).ready(function(){
		console.log("TEST");
		var surfData
		var hawaiiData
		var rockawayData
		var narragansettData
		var isShowing = false;
		// $.ajax( {
		// 	datatype 	: "json",
		// 	url			: "http://magicseaweed.com/api/52e12d680684572ddc98765bc10b90d2/forecast/?spot_id=1",
		// 	success		: function( data ){
		// 		console.log(data)
		// 	}
		// } )
		$.ajax({
			dataType: "jsonp",
			url: "http://magicseaweed.com/api/52e12d680684572ddc98765bc10b90d2/forecast/?spot_id=616",
			success: function (data) {
				//console.log(data);
				hawaiiData = data;
				//surfdataHandler()
			}
		});
		$.ajax({
			dataType: "jsonp",
			url: "http://magicseaweed.com/api/52e12d680684572ddc98765bc10b90d2/forecast/?spot_id=384",
			success: function (data) {
				//console.log(data);
				rockawayData = data;
				//surfdataHandler()
			}
		});

		$.ajax({
			dataType: "jsonp",
			url: "http://magicseaweed.com/api/52e12d680684572ddc98765bc10b90d2/forecast/?spot_id=1103",
			success: function (data) {
				//console.log(data);
				narragansettData = data;
				//surfdataHandler()
			}
		});
		function surfdataHandler( surfData ){
			console.log( surfData )
			console.log( typeof( surfData ))
			console.log( surfData.length )
			//$("#map").append("<img src='"+ +"'/>")
			
			$(".map1").append("<img src='" + surfData[0].charts.swell + "'/>")
			//$(".map2").append("<img src='" + surfData[0].charts.wind + "'/>")
			$(".temp").html(surfData[0].condition.temperature + "&#8457")
			$(".minHeight").append(surfData[0].swell.minBreakingHeight + " feet")
			$(".maxHeight").append(surfData[0].swell.maxBreakingHeight + " feet")
		}
		$("#hawaii").click( function(){
			
			if (isShowing) {
				//do something	
			} else {
				surfdataHandler( hawaiiData )
				isShowing = true;
			}

		});	



		$("#rockaway").click( function(){

			if (isShowing) {
				//do something	
			} else {
			surfdataHandler( rockawayData )
				isShowing = true;
			}		
		});	


		$("#narragansett").click( function(){

			if (isShowing) {
				//do something	
			} else {
			surfdataHandler( narragansettData )
			isShowing = true;
			}		
		});	
	});
	