export const convertTimeHoursMinutes = (timestamp) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = Math.round(minutes / 5) * 5;
  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:${minutes}`;
};

export const timeToDate = (time) => {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const date = new Date(time);
  let myDate = date.toLocaleDateString('en-US', options);
  myDate = myDate.replace(/\b\w+\b/g, (word) => word.substring(0, 3));
  myDate = `${myDate.split(',')[0]},${myDate.split(',')[1]}`;
  myDate = `${myDate} ${convertTimeHoursMinutes(time)}`;
  return myDate;
};
