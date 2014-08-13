# Paralax effect for the header
jQuery(document).ready ($) ->
  $ = jQuery
  
  #svg modernizer
  unless Modernizr.svg
    $("img[src*=\"svg\"]").attr "src", ->
      $(this).attr("src").replace ".svg", ".png"

  
  #parallax
  $(window).scroll ->
    paralax = jQuery(window).scrollTop()
    slowScroll = paralax / 1.5
    jQuery("#above_nav").css transform: "translateY(" + slowScroll + "px)"
    jQuery(".portfolio-head").css transform: "translateY(" + slowScroll + "px)"
    return
  
  # Scroll fix for nav
  navheight = $("#above_nav").height()
  $("#navbar").affix offset:
    top: ($("#above_nav").height() - 43)

  # For animated scrolling http://www.web2feel.com/tutorial-for-animated-scroll-loading-effects-with-animate-css-and-jquery
