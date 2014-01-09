$(document).ready(function(){
  
  
  // Generic reveal via slide down
  
  $('.show-link').click(function(){
    
    event.preventDefault();
    if (!$('.reveal').is(":visible"))
        $('.show-link').addClass("open");

    $('.reveal').slideToggle(function() { 
        if (!$('.reveal').is(":visible"))
            $('.show-link').removeClass("open");
    });
    
  });
  
  // Reveal video quality options via slide down
  
  $('.show-quality').click(function(){
    
    event.preventDefault();
    if (!$('.reveal-quality').is(":visible"))
        $('.show-quality').addClass("open");

    $('.reveal-quality').slideToggle(function() { 
        if (!$('.reveal-quality').is(":visible"))
            $('.show-quality').removeClass("open");
    });
    
  });


    // Reveal video quality options via slide down
  
  $('.show-transcript').click(function(){
    
    event.preventDefault();
    if (!$('.reveal-transcript').is(":visible"))
        $('.show-transcript').addClass("open");

    $('.reveal-transcript').slideToggle(function() { 
        if (!$('.reveal-transcript').is(":visible"))
            $('.show-transcript').removeClass("open");
    });
    
  });
  
  
  // Make the "show video listing" links on browse show-menu the full list and change the text to "hide"
  
  $('.show-list').click(function(){
    
    event.preventDefault();
    if (!$('.series-list').is(":visible"))
        $('.show-list').addClass("open");

    $('.series-list').slideToggle(function() { 
        if (!$('.series-list').is(":visible"))
            $('.show-list').removeClass("open");
    });
    
    $(this).text($(this).text() == 'show video listing' ? 'hide video listing' : 'show video listing');
    
  });
  
  
  // Make the "more category filters" link show-menu all the categories and change the text to "hide"
  
  $('.show-filters').click(function(){
    
    event.preventDefault();
    if (!$('.full-list').is(":visible"))
        $('.show-filters').addClass("open");

    $('.full-list').slideToggle(function() { 
        if (!$('.full-list').is(":visible"))
            $('.show-filters').removeClass("open");
    
    });
    
    $(this).text($(this).text() == 'More Category Filters' ? 'Hide Category Filters' : 'More Category Filters');
    
  });
  
  // reveal anchor menus
  
  $('.show-menu').click(function(){
    
    event.preventDefault();
    if (!$('.anchor-menu.hidden').is(":visible"))
        $('.show-menu').addClass("open");

    $('.anchor-menu.hidden').slideToggle(function() { 
        if (!$('.anchor-menu.hidden').is(":visible"))
            $('.show-menu').removeClass("open");
    });
    
    $(this).text($(this).text() == 'Show the Quick Menu' ? 'Hide the Quick Menu' : 'Show the Quick Menu');
    
  });
  
  
  // Add smooth scrolling for all anchors that have the .scroll class
  
  $(".scroll").click(function(event){
       event.preventDefault();
       //calculate destination place
       var dest=0;
       if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
       }else{
            dest=$(this.hash).offset().top;
       }
       //go to destination
       $('html,body').animate({scrollTop:dest}, 750,'swing');
   });
  
});
