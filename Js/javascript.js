$(document).ready(function(){
    navBar.init();
    
  });

  var navBar = {
    init: function(){
      navBar.navfunction();
    },
  
    navfunction:function(){
      $(".ham-icon, .background").click(function(){
        $("body").toggleClass("open-nav");
        $('.ham-icon').toggleClass('active-one');
        
      });
    }
  }