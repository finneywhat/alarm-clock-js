var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(function() {
  $('#alarm-clock-form').submit(function(event) {
    event.preventDefault();
    var inputHour = parseInt($("#alarmHour").val());
    var inputMinute = parseInt($("#alarmMinute").val());
    var newAlarm = new Alarm(inputHour, inputMinute);

    var alarmSet = newAlarm.triggerAlarm(inputHour, inputMinute);

    $("#time").text(alarmSet);
  });
});
