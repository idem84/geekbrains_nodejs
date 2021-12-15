"use strict";
const ps = require("prompt-sync");
const moment = require("moment");
const prompt = ps();
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.setMaxListeners(1);

let dates = new Date(
  prompt("Select Date: year, month, day, time (2021,12,15,22:01):")
);

const init = async () => {
  let future = dates;
  let now = new Date();
  let difference = future - now;
  let duration = moment.duration(difference, "milliseconds");
  let timer;
  let payload = 1;
  timer = {
    years: duration._data.years,
    months: duration._data.months,
    days: duration._data.days,
    hours: duration._data.hours,
    minutes: duration._data.minutes,
    seconds: duration._data.seconds,
  };
  if (timer.seconds > 0) {
    payload = `${timer.years} years, ${timer.months} months, ${timer.days} days, ${timer.hours} hours, ${timer.minutes} minutes, ${timer.seconds} seconds`;
  } else {
    console.log("Timer end");

    return false;
  }

  emitter.emit("timer", payload);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  await init();
};

const timer = (payload) => {
  console.log("Till end: " + payload);
};

console.log("Timer start!");
emitter.on("timer", timer);
init();
