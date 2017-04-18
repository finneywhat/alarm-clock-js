function Alarm(inputHour, inputMinute) {
  this.inputHour = inputHour;
  this.inputMinute = inputMinute;
}
// var AlarmList = [];
//
//
// Alarm.prototype.addToList = function(time) {
//   AlarmList.push(time);
// }

Alarm.prototype.triggerAlarm = function(inputHour, inputMinute) {
  if (inputHour === moment().hour()  && inputMinute === moment().minute()) {
    return true;
  } else {
    return false;
  }
};

exports.alarmModule = Alarm;
