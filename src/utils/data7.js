export const skipIntervals = (data) => {
  let myData = data.filter((item, index) => index % 24 === 0);
  return myData.map((item) => {
    return {
      time: timeToDate(item[0]),
      price: Math.round(item[1] * 100) / 100,
    };
  });
};
