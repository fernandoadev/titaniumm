var $ = jQuery.noConflict();

$(document).ready(function($) {

	/*-------------------------------------------------*/
	/* =  Dropdown Menu - Superfish
	/*-------------------------------------------------*/
	try {
		$('ul.sf-menu').superfish({
			delay: 400,
			autoArrows: false,
			speed: 'fast',
			animation: {opacity:'show', height:'show'}
		});
	} catch (err){

	}

	/*-------------------------------------------------*/
	/* =  Testimonials
	/*-------------------------------------------------*/

	  $('.bxslider').bxSlider({
             mode: 'horizontal',
             slideMargin: 30,
             auto:true
         }); 

	/*-------------------------------------------------*/
	/* =  Testimonials2
	/*-------------------------------------------------*/

	  $('.bxslider2').bxSlider({
             mode: 'horizontal',
             slideMargin: 0,
             auto:true
         });             

	/*-------------------------------------------------*/
	/* =  Testimonials3
	/*-------------------------------------------------*/

	  $('.bxslider3').bxSlider({
             mode: 'horizontal',
             slideMargin: 0,
             auto:true
         });             

	/*-------------------------------------------------*/
	/* =  Mobile Menu
	/*-------------------------------------------------*/
	// Create the dropdown base
    $("<select />").appendTo("#nav");
    
    // Create default option "Go to..."
    $("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Go to..."
    }).appendTo("#nav select");
    
    // Populate dropdown with menu items
    $(".sf-menu a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#nav select");
    });

    $("#nav select").change(function() {
		window.location = $(this).find("option:selected").val();
    });
	
	/*-------------------------------------------------*/
	/* =  Scroll to TOP
	/*-------------------------------------------------*/
	$('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });

	/*-------------------------------------------------*/
	/* =  Input & Textarea Placeholder
	/*-------------------------------------------------*/
	$('input[type="text"], textarea').each(function(){
		$(this).attr({'data-value': $(this).attr('placeholder')});
		$(this).removeAttr('placeholder');
		$(this).attr({'value': $(this).attr('data-value')});
	});

	$('input[type="text"], textarea').focus(function(){
		$(this).removeClass('error');
		if($(this).val().toLowerCase() === $(this).attr('data-value').toLowerCase()){
			$(this).val('');
		}	
	}).blur( function(){ 
		if($(this).val() === ''){
			$(this).val($(this).attr('data-value'));
		}
	});

   	/*-------------------------------------------------*/
	/* =  Fancybox
	/*-------------------------------------------------*/

	$("a[data-fancybox-group=group]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});



   	/*-------------------------------------------------*/
	/* =  Paralax
	/*-------------------------------------------------*/

    $('.paralax1').parallax("50%", 0.3);
    $('.paralax2').parallax("50%", 0.3);
    $('.paralax3').parallax("50%", 0.3);
    $('.paralax4').parallax("50%", 0.3);
    $('.paralax5').parallax("50%", 0.3);
    $('.paralax6').parallax("50%", 0.3);
    $('.paralax7').parallax("50%", 0.3);
    $('.paralax8').parallax("50%", 0.3);


 	/*-------------------------------------------------*/
	/* =  Isotope
	/*-------------------------------------------------*/
	var winDow = $(window);
			// Needed variables
	var $container=$('.filter-container');
	var $filter=$('.filter');

	try{
		$container.imagesLoaded( function(){
			$container.show();
			$container.isotope({
				filter:'*',
				layoutMode:'masonry',
				animationOptions:{
					duration:750,
					easing:'linear'
				}
			});
		});
	} catch(err) {
	}

	winDow.bind('resize', function(){
		var selector = $filter.find('a.active').attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {
		}
		return false;
	});
	
	// Isotope Filter 
	$filter.find('a').click(function(){
		var selector = $(this).attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {

		}
		return false;
	});


	var filterItemA	= $('.filter a');

	filterItemA.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});


   /*-------------------------------------------------*/
	/* =  Tabs Widget - { Popular, Recent and Comments }
	/*-------------------------------------------------*/
	$('.tab-links li a').live('click', function(e){
		e.preventDefault();
		if (!$(this).parent('li').hasClass('active')){
			var link = $(this).attr('href');

			$(this).parents('ul').children('li').removeClass('active');
			$(this).parent().addClass('active');

			$('.tabs-widget > div').hide();

			$(link).fadeIn();
		}
	});


	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	var contact = {"lat":"40.714623", "lon":"-74.006605"}; //Change a map coordinate here!

	try {
		$('#map').gmap3({
		    action: 'addMarker',
		    latLng: [contact.lat, contact.lon],
		    map:{
		    	center: [contact.lat, contact.lon],
		    	zoom: 14
		   		},
		    },
		    {action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

//AJAX para cadastrar nova ONG
$("#contact-form").on("submit", function (event) {
	//Quando clicar no botão do form #insert_form
	event.preventDefault();
	var url = jQuery(".enderecoFormMsg").attr("data-enderecocad"); //Endereço da controller
	//alert(url);
	var items = $("#" + this.id + " input").serializeArray();
	var data = new FormData();
	for (item in items) {
	  data.append(items[item]["name"], items[item]["value"]);
	}
	//alert(url);
	$.ajax({
	  type: "POST",
	  dataType: "json",
	  url: url,
	  data: data,
	  contentType: false,
	  processData: false,
	  success: function (retorna) {
		if (retorna["success"]) {
		  console.log("Sucesso");
		  $("#msg").html(retorna["msg"]);
		} else {
		  console.log(retorna["erro"]);
		  console.log("Erro");
		  $("#msg").html(retorna["msg"]);
		}
	  },
	});
  });

	/* ---------------------------------------------------------------------- */
	/*	Login
	/* ---------------------------------------------------------------------- */

	$(document).ready(function() {
	$('a.login-window').click(function() {
		
		// Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup and add close button
		$(loginBox).fadeIn(300);
		
		//Set the center alignment padding + border
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .login-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
});

	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */
	
	$('#filterOptions li a').click(function() {
		// fetch the class of the clicked item
		var ourClass = $(this).attr('class');
		
		// reset the active class on all the buttons
		$('#filterOptions li').removeClass('active');
		// update the active state on our clicked button
		$(this).parent().addClass('active');
		
		if(ourClass == 'all') {
			// show all our items
			$('#ourHolder').children('div.item').show();	
		}
		else {
			// hide all elements that don't share ourClass
			$('#ourHolder').children('div:not(.' + ourClass + ')').hide();
			// show all elements that do share ourClass
			$('#ourHolder').children('div.' + ourClass).show();
		}
		return false;
	});

jQuery(function ($) {
      // custom formatting example
      $('#earth').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });
      
      // custom callback when counting completes
      $('#countdown').data('countToOptions', {
        onComplete: function (value) {
          $(this).text('BLAST OFF!').addClass('red');
        }
      });
      
      // another custom callback for counting to infinity
      $('#infinity').data('countToOptions', {
        onComplete: function (value) {
          count.call(this, {
            from: value,
            to: value + 1
          });
        }
      });
      
      // start all the timers
      $('.timer').each(count);
      
      // restart a timer when a button is clicked
      $('.restart').click(function (event) {
        event.preventDefault();
        var target = $(this).data('target');
        count.call($(target));
      });
      
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });

});
