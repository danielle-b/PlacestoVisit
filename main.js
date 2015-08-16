$(document).ready(function() {


	// $("img").click(function() {
	// Hide the current image
	// $(this).hide();
	// Show the next image
	// });
	
	//The Setup-show image 0
	var currentImageIndex = 0;
	$("#slider img").eq(currentImageIndex).show();

	//$("#slider").click(function() {
    var advanceSlider = function(){

   //Hide the current image
   $("#slider img").eq(currentImageIndex).fadeOut();

   //Increment index
   currentImageIndex++;
   if(currentImageIndex >= $("#slider img").length){
      
      currentImageIndex = 0;
   }

   //Show the next image
    $("#slider img").eq(currentImageIndex).fadeIn();

	};

   var sliderInterval = setInterval(advanceSlider, 1000);
   console.log(sliderInterval);

    $("#slider").click(advanceSlider);

    var playing = true;

    $("#playpause").click(function() {
    if(playing){
     //Pause
     clearInterval(sliderInterval);
     playing = false;
    }
    else
    {
     //Play
     sliderInterval = setInterval(advanceSlider, 1000);
     playing = true;
    }
  });
});
