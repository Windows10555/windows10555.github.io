function calculateTimeElapsed sinceDate(since) {
  const months = [31, (isLeapYear(since.getFullYear() + 1)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let yearsDiff = currentDate.getFullYear() - since.getFullYear();
  let monthsDiff = currentDate.getMonth() - since.getMonth();
  let daysDiff = currentDate.getDate() - since.getDate();
  let hoursDiff = currentDate.getHours() - since.getHours();
  let minutesDiff = currentDate.getMinutes() - since.getMinutes();
  let secondsDiff = currentDate.getSeconds() - since.getSeconds();

  // 如果秒数为负数，需要借位
  if (secondsDiff < 0) {
    minutesDiff--;
    secondsDiff += 60;
  }
  // 如果分钟为负数，需要借位
  if (minutesDiff < 0) {
    hoursDiff--;
    minutesDiff += 60;
  }
  // 如果小时为负数，需要借位
  if (hoursDiff < 0) {
    daysDiff--;
    hoursDiff += 24;
  }
  // 如果天数为负数，需要借位
  if (daysDiff < 0) {
    monthsDiff--;
    daysDiff += months[since.getMonth()];
    // 减去月份的天数后，如果月份为负数，需要减去相应的年数和月份
    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }
  }
  // 如果月份为负数，需要借位
  if (monthsDiff < 0) {
    monthsDiff += 12;
    yearsDiff--;
  }

  return {
    years: yearsDiff,
    months: monthsDiff,
    days: daysDiff,
    hours: hoursDiff,
    minutes: minutesDiff,
    seconds: secondsDiff
  };
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function updateTimer() {
  const sinceDate = new Date(2019, 3, 2); // 2019年4月2日
  const timeElapsed = calculateTimeElapsed(sinceDate);

  // 构建显示的字符串
  let display = `${timeElapsed.years}年 ${timeElapsed.months}月 ${timeElapsed.days}天 ${timeElapsed.hours}时 ${timeElapsed.minutes}分 ${timeElapsed.seconds}秒`;
  document.getElementById('timer').innerText = display;
  document.getElementById('htmer_time').innerText = display;
}

// 当页面加载完毕时，调用updateTimer函数
window.onload = updateTimer;

// 每秒更新时间
setInterval(updateTimer, 1000);
