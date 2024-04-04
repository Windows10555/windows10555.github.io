function calculateTimeElapsed(since) {
  const months = [31, (isLeapYear(since.getFullYear())) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let yearsDiff = currentDate.getFullYear() - since.getFullYear();
  let monthsDiff = currentDate.getMonth() - since.getMonth() + (yearsDiff * 12);
  let daysDiff = currentDate.getDate() - since.getDate() + (monthsDiff * months[since.getMonth()]);
  let hoursDiff = currentDate.getHours() - since.getHours();
  let minutesDiff = currentDate.getMinutes() - since.getMinutes();
  let secondsDiff = currentDate.getSeconds() - since.getSeconds();

  // 修正天数差异，确保不超过月份的天数
  while (daysDiff < 0 || daysDiff > months[since.getMonth()]) {
    monthsDiff += (daysDiff > months[since.getMonth()]) ? -1 : 1;
    daysDiff += months[monthsDiff] + (monthsDiff > 0 ? -1 : 1);
  }

  // 修正小时、分钟、秒的差异
  while (hoursDiff < 0) {
    hoursDiff += 24;
    minutesDiff--;
  }
  while (minutesDiff < 0) {
    minutesDiff += 60;
    secondsDiff--;
  }
  while (secondsDiff < 0) {
    secondsDiff += 60;
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
  const sinceDate = new Date(2019, 6, 2); // 2019年4月2日
  const currentDate = new Date();
  const timeElapsed = calculateTimeElapsed(sinceDate);

  // 构建显示的字符串
  let display = `${timeElapsed.years}年 ${timeElapsed.months}月 ${timeElapsed.days}天 ${timeElapsed.hours}时 ${timeElapsed.minutes}分 ${timeElapsed.seconds}秒`;
  document.getElementById('timer').innerText = display;
  document.getElementById('htmer_time').innerText = display;
  
  // 每秒更新时间
  setInterval(updateTimer, 1000);
}

// 当页面加载完毕时，调用updateTimer函数
window.onload = updateTimer;
