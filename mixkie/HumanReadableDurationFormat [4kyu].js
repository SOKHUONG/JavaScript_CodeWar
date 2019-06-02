function formatDuration(seconds) {
  var seconds = seconds;
  var minutes = 0;
  var hours = 0;
  var days = 0;
  var years = 0;

  if (seconds === 0) {
    return "now";
  } else if (seconds === 1) {
    return "1 second";
  } else if (seconds < 60) {
    return seconds + " seconds";
  }

  if (seconds >= 60) {
    minutes = (seconds - (seconds % 60)) / 60;
    seconds = seconds - minutes * 60;
  }

  if (minutes >= 60) {
    hours = (minutes - (minutes % 60)) / 60;
    minutes = minutes - hours * 60;
  }

  if (hours >= 24) {
    days = (hours - (hours % 24)) / 24;
    hours = hours - days * 24;
  }

  if (days > 365) {
    years = (days - (days % 365)) / 365;
    days = days - years * 365;
  }

  var sentenceArr = [];
  var unitNames = ["years", "days", "hours", "minutes", "seconds"];
  var unitNums = [years, days, hours, minutes, seconds];

  for (var i = 0; i < unitNums.length; i++) {
    if (unitNums[i] !== 0) {
      if (unitNums[i] === 1) {
        //Check if there's only 1 year or 1 day or 1 hour or 1 minute or 1 seconds
        //unitNames[i].slice(0, -1) will change the array to unitNames[i]
        sentenceArr.push(unitNums[i] + " " + unitNames[i].slice(0, -1) + ", ");
      } else {
        sentenceArr.push(unitNums[i] + " " + unitNames[i] + ", ");
      }
    }
  }

  var length = sentenceArr.length;

  if (length === 1) {
    //Remove ", " if there's only divisible amount of years or days or hours or minutes or seconds
    return sentenceArr[0].slice(0, -2);
  }

  var lastUnit = sentenceArr[sentenceArr.length - 1]; //e.g "12 seconds, "
  var secondToLastUnit = sentenceArr[sentenceArr.length - 2]; //e.g "10 minutes, "
  var newLastUnit = " and " + lastUnit.slice(0, -2); // slice(0,-2) remove ", "
  var newSecondToLastUnit = secondToLastUnit.slice(0, -2); // slice(0,-2) remove ", "
  sentenceArr.splice(length - 2, 2, newSecondToLastUnit, newLastUnit); // replace 2 elements at the index of "array.length-2" in an array with 2 new strings (newSecondToLastUnit & newLastUnit)
  sentence = sentenceArr.join("");

  return sentence;
}
