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

function resizeGalleryWidth() {
	$('.gallery').each(function() {
    	// get margin right & width .container
    	margR = ($(document).width() - $(".container").width()) / 2
		var currentWidth = parseInt($(".container").width());
		var padR = parseInt($(".container").css('paddingRight'));
	

    	$(".gallery").css('width', currentWidth + margR);
    
	});
}

$(window).resize(resizeGalleryWidth);
$(document).ready(resizeGalleryWidth);



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

