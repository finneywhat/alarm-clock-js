var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(function() {
  $('#alarm-clock-form').submit(function(event) {
    event.preventDefault();
    var inputHour = parseInt($("#alarmHour").val());
    var inputMinute = parseInt($("#alarmMinute").val());
    var newAlarm = new Alarm(inputHour, inputMinute);

    var timeLoop = setInterval(function() { alarm() }, 1000);
    function alarm() {
      var alarmSet = newAlarm.triggerAlarm(inputHour, inputMinute);
      if (alarmSet) {
        // clearInterval(timeLoop);
        $("#alarm").text("Alarm!!");
      }
    };
  });
});
