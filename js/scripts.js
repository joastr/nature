// JavaScript Document


//Przejście do kotwicy

$(document).ready(function() {
    $('.anchor').click(function() {
        var hash = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 1000);
        return false;
    });
});

//Szerokość  .gallery

$(document).ready(function() {
	$('.gallery').each(function() {
    	// get margin right & width .container
    	var margR = parseInt($(".container").css('marginRight'));
		var currentWidth = parseInt($(".container").width());
		var padR = parseInt($(".container").css('paddingRight'));
	

    	$(".gallery").css('width', currentWidth + margR);
    
	});
});



//POWIĘKSZANIE ZDJĘCIA

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}		
	});
});

