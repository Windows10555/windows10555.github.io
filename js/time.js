// 直接在脚本中嵌入moment.js库
function includeMomentJS() {
    var momentScript = document.createElement('script');
    momentScript.type = 'text/javascript';
    momentScript.src = 'http://momentjs.cn/downloads/moment-with-locales.js';
    document.head.appendChild(momentScript);
}
// 创建一个函数来计算时间差并更新显示
function updateTimestamp() {
    // 确保moment.js和中文locale已经加载
    if (typeof moment === 'undefined' ) {
        includeMomentJS();
        setTimeout(updateTimestamp, 3000);
        return;
    }

    // 设置moment.js为中文locale
    moment.locale('zh-cn');

    // 设置起始日期
    var startDate = moment("2019-07-02");
    // 获取当前日期
    var currentDate = moment();
    // 计算两个日期之间的差异
    var difference = currentDate.diff(startDate, true);
    var duration = moment.duration(difference);

    // 更新显示
    document.getElementById('htmer_time').innerHTML = `${duration.years()}年${duration.months()}月${duration.days()}天${duration.hours()}时${duration.minutes()}分${duration.seconds()}秒`;
}

// 立即执行一次updateTimestamp函数，然后每隔一秒调用一次
updateTimestamp();
setInterval(updateTimestamp, 1000);
