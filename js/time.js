// 定义更新时间的函数
function updateTime() {
  // 引入Date对象和相关的时间常量
  const startDate = new Date('2019-07-02T00:00:00');
  let currentDate = new Date(); // 当前日期会实时更新
  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365.25; // 考虑闰年

  // 计算两个日期之间的总毫秒数
  const totalMilliseconds = currentDate - startDate;

  // 将总毫秒数转换为年月日时分秒
  let totalSeconds = totalMilliseconds / oneSecond;
  let totalMinutes = totalSeconds / oneMinute;
  let totalHours = totalMinutes / oneHour;
  let totalDays = totalHours / oneDay;
  let totalYears = totalDays / 365.25;

  // 计算剩余的天数，小时数，分钟数和秒数
  let remainingDays = totalDays % 365.25;
  let remainingHours = remainingDays * 24 % 24;
  let remainingMinutes = remainingHours * 60 % 60;
  let remainingSeconds = remainingMinutes * 60 % 60;

  // 格式化输出结果
  let result = `${Math.floor(totalYears)}年${Math.floor(remainingDays)}天${remainingHours}时${remainingMinutes}分${remainingSeconds}秒`;

  // 将结果输出到页面上ID为htmer_time的元素中
  document.getElementById('htmer_time').innerText = result;
}

// 设置定时器，每秒调用一次updateTime函数
setInterval(updateTime, 1000);

// 初始调用一次updateTime函数以显示启动时的时间差
updateTime();
