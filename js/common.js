$(function(){
  $("#menuClick").on("click",function(){
    if($("#body_left").hasClass('showIcon')){
      $("#body_left").removeClass("showIcon").animate({
        width:"240px"
      },300)
     
    }else{
      $("#body_left").addClass("showIcon").animate({
        width:"40px"
      },300)
    }
    
  });
});