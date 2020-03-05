//Função esconde/mostra menu ao rolar
   $(function () {
    jQuery(window).scroll(function () {
     if (jQuery(this).scrollTop() > 570) {
      $(".header").css('background-color', 'rgba(0, 0, 0, 0.5)');
     } else {
      $(".header").css('background-color', 'rgba(0,213,236,0)');
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

//FUNÇÃO QUE ESCONDE MENU AO CLICAR EM BOTÃO NA VERSÃO MOBILE
$(function () {
    $(".button-collapse").sideNav();
  });
  
  function closeNav() {
    
    $(".button-collapse").sideNav('hide');
  
  }



  //ABRINDO MODAL MATERIALIZE
$(document).ready(function(){

  $('.modal').modal();

});