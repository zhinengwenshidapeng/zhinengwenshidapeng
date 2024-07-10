// JavaScript Document
function updateSensorData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/sensor_data', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('lightIntensity').textContent = data.lightIntensity;
            document.getElementById('temperature1').textContent = data.temperature;
            document.getElementById('humidity1').textContent = data.humidity;
			document.getElementById('ph').textContent = data.humidity;
			document.getElementById('CarbonDioxide').textContent = data.humidity;
        } else {
            console.error('Failed to load sensor data');
        }
    };
    xhr.send();
}

// 定期更新传感器数据
setInterval(updateSensorData, 5000); // 每5秒更新一次