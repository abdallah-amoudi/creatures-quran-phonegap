document.addEventListener("deviceready", deviceAPI, false);

function deviceAPI() {

    $(function(){

    	$('#pgsidebar').on('touchend', function(){
			
			console.log(device);
            
			$('#img_1').html("touch side bar");
//			$('#Dev2').html(device.model);
//			$('#Dev3').html(device.platform);
//			$('#Dev4').html(device.uuid);
//			$('#Dev5').html(device.version);

		});

	});

}