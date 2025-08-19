function updateTimestamp() {
    moment.locale('zh-cn');
    var startDate = moment("2019-07-02");
    var currentDate = moment();
    var difference = currentDate.diff(startDate, true);
    var duration = moment.duration(difference);
    document.getElementById('htmer_time').innerHTML = `${duration.years()}年${duration.months()}月${duration.days()}天${duration.hours()}时${duration.minutes()}分${duration.seconds()}秒`;
}
setTimeout(2000);
updateTimestamp();
setInterval(updateTimestamp, 1000);
