$(document).ready(function(){
    $(".up").hide(); 
    $(".clickMenu").click(function(){
     
      $(".visibleMenu").toggle(500);
        
       $(".up").toggle(); 
       $(".down").toggle();
    });  
  });