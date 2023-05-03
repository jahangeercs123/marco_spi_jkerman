$(document).ready(function() {
  $( ".icon-one" ).click(function(){
    $(this).toggleClass('active-one');
    $( "nav" ).slideToggle();
});
})