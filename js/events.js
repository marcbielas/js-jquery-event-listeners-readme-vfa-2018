//define functions here

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});

getIt = function(){
  $('p').on('click', function(){
    alert("Hey!");
});
}

frameIt = function(){
  $('img').on('load', function(){
  $('img').addClass("tasty");
});
}

pressIt = function(){
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}

submitIt = function(){
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
});
}
