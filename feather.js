function updateClock() {
    const now = new Date();
    const hours = now.getHours(); // 直接获取24小时制的小时
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.toLocaleString('default', { weekday: 'long' });
    const dayNum = now.getDate();

    // 直接使用24小时制的小时，不需要转换
    document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
    document.querySelector('.month-name').textContent = month;
    document.querySelector('.day-name').textContent = day;
    document.querySelector('.day-num').textContent = dayNum;

    // 移除 AM/PM 的显示
    document.querySelector('.period').textContent = ''; // 清空 AM/PM
}

// 每秒更新时钟
setInterval(updateClock, 1000);
updateClock(); // 初始化时钟
async function fetchRandomImage() {
            const response = await fetch('https://api.bing.microsoft.com/v7.0/images/search?q=美女&count=50', {
                headers: {
                    'Ocp-Apim-Subscription-Key': 'YOUR_API_KEY' // 替换为您的API密钥
                }
            });
            const data = await response.json();
            const images = data.value.map(image => image.contentUrl);
            const randomImage = images[Math.floor(Math.random() * images.length)];
            document.body.style.backgroundImage = `url(${randomImage})`;
        }

        fetchRandomImage();