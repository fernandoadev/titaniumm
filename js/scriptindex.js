//Função esconde/mostra menu ao rolar
   $(function () {
    jQuery(window).scroll(function () {
     if (jQuery(this).scrollTop() > 640) {
      $(".upper-header").css('background-color', 'rgba(255, 255, 255, 0.6)');
     } else {
      $(".upper-header").css('background-color', 'rgba(0,213,236,0)');
     }
    });
   });

//Função scrollsuave ao clicar nos itens do MENU
   $(function() {
    $(".scrollSuave").bind("click", function(event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $($anchor.attr("href")).offset().top },
          1000,
          "swing"
        );
    });
  });