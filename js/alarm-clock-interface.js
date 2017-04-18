var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(function() {
  $('#alarm-clock-form').submit(function(event) {
    event.preventDefault();
    var inputTime = $("#alarm").val();
    console.log(inputTime);
    var newAlarm = new Alarm(inputTime);
    console.log(newAlarm);
    var alarmSet = newAlarm.triggerAlarm(inputTime);
    console.log(alarmSet);

    $("#time").text(alarmSet);
  });
});
