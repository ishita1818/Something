function updateOutput(){
  $("iframe").contents().find("html").html(
    "<html><head><style type='text/css'>"+
    $("#cssPanel").val()
     +"</style></head><body>"+
    $("#htmlPanel").val()+
    "</body></html>"
  );
  /** for evaluating in the main main page:
  eval($("#javascriptPanel").val());
  **/
  // for evaluating inside iframe
  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}

$(".toggleButton").hover(function(){

  $(this).addClass("highlightedButton");
},
function(){
  $(this).removeClass("highlightedButton");
}
);

$(".toggleButton").click(function(){

 $(this).toggleClass("active");
 $(this).removeClass("highlightedButton");

 var panelID = $(this).attr("id")+"Panel";

 $("#"+panelID).toggleClass("hidden");
 var activePanels = 4-$('.hidden').length;
 $(".panel").width($(window).width()/activePanels -6);

  if(activePanels==0){
    if($("#emptyText").hasClass("ehidden")){
      $("#emptyText").removeClass("ehidden");

    }
  }
  else {
    if(!$("#emptyText").hasClass("ehidden")){
      $("#emptyText").addClass("ehidden");

    }

  }


});

$(".panel").height($(window).height()- 52- $(".toggleButton").height()- $("#header").height());

$(".panel").width($(window).width()/2 -6);

updateOutput();

$("textarea").on('change keyup paste', function(){

 updateOutput();
});
