// JavaScript Document
$(document).ready(function() {
    function fetchData() {
        $.getJSON('/data', function(data) {
            $('#data-display').empty();
            data.forEach(function(item) {
                var timestamp = new Date(item.timestamp);
                var temperature = item.temperature;
                var humidity = item.humidity;
                var light = item.light;
                var pH = item.pH;
                var co2 = item.co2;

                // 假设阈值
                var temperatureThreshold = 25; // 温度阈值
                var humidityThreshold = 50; // 湿度阈值
                var lightThreshold = 1000; // 光照强度阈值
                var pHThreshold = 6.5; // pH值阈值
                var co2Threshold = 400; // 二氧化碳浓度阈值

                // 结论判断
                var temperatureConclusion = temperature < temperatureThreshold ? '温度过低' : '温度正常';
                var humidityConclusion = humidity > humidityThreshold ? '湿度过高' : '湿度正常';
                var lightConclusion = light < lightThreshold ? '光照过弱' : '光照正常';
                var pHConclusion = pH < pHThreshold ? 'pH值过低' : 'pH值正常';
                var co2Conclusion = co2 > co2Threshold ? '二氧化碳浓度过高' : '二氧化碳浓度正常';

                // 创建并添加数据条目
                var entry = $('<div>').addClass('data-entry');
                entry.append($('<p>').text('时间: ' + timestamp.toLocaleString()));
                entry.append($('<p>').text('温度: ' + temperature + '°C - ' + temperatureConclusion));
                entry.append($('<p>').text('湿度: ' + humidity + '% - ' + humidityConclusion));
                entry.append($('<p>').text('光照强度: ' + light + ' Lux - ' + lightConclusion));
                entry.append($('<p>').text('pH值: ' + pH + ' - ' + pHConclusion));
                entry.append($('<p>').text('二氧化碳浓度: ' + co2 + ' ppm - ' + co2Conclusion));
                $('#data-display').append(entry);
            });
        });
    }

    // 初始获取数据
    fetchData();

    // 每隔一段时间更新数据
    setInterval(fetchData, 1200000); // 1200000毫秒 = 2小时
});
