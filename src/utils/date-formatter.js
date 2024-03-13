// let date = "Sat Mar 12 2024 21:15:41 GMT+0100 (West Africa Standard Time)"

function dateFormatter(date) {
  let dateInfo = date.split(" ");
  let dateYears = +dateInfo[3];
  let dateDays = dateInfo[2];
  let dateMounth = dateInfo[1];

  const totalTimeSincePosted = new Date(date);
  const now = new Date();
  let timeDifference = Math.abs(totalTimeSincePosted - now) / 1000;

  const days = Math.floor(timeDifference / 86400);
  timeDifference -= days * 86400;

  const hours = Math.floor(timeDifference / 3600) % 24;
  timeDifference -= hours * 3600;

  const minutes = Math.floor(timeDifference / 60) % 60;
  timeDifference -= minutes * 60;

  let displayDate;

  if (now.getFullYear() - dateYears >= 1) {
    displayDate = `${dateDays} ${dateMounth} ${dateYears}`;
  } else if (days >= 1) {
    displayDate = `${dateDays} ${dateMounth}`;
  } else if (hours >= 1) {
    displayDate = `${hours}h`;
  } else {
    displayDate = `${minutes}min`;
  }

  return displayDate;
}

export default dateFormatter;
