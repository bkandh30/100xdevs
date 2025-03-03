function formatTime(hours, minutes, seconds) {
    const pad = (num) => num.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const militaryTime = formatTime(hours, minutes, seconds);

    const am_pm = hours >= 12 ? 'PM' : 'AM';
    const twelveHours = hours % 12 || 12;
    const standardTime = formatTime(twelveHours, minutes, seconds) + ' ' + am_pm;

    console.clear();
    console.log('24-hour format:', militaryTime);
    console.log('12-hour format:', standardTime);
}

setInterval(getCurrentTime, 1000);

getCurrentTime();