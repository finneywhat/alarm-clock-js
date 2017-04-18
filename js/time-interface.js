$(function(){
  function update() {
  $('#time').html(moment().format('H:mm:ss a'));
}

setInterval(update, 1000);


});
