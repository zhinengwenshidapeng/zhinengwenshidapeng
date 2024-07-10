// JavaScript Document
$(document).ready(function() {
    // 温度设置
    $('#set-temperature1').click(function() {
        var temperature = $('#temperature1').val();
        sendControlData('temperature1', temperature);
    });

    // 湿度设置
    $('#set-humidity1').click(function() {
        var humidity = $('#humidity1').val();
        sendControlData('humidity1', humidity);
    });

    // 光照强度设置
    $('#set-light').click(function() {
        var light = $('#light').val();
        sendControlData('light', light);
    });

    // 二氧化碳浓度设置
    $('#set-co2').click(function() {
        var co2 = $('#co2').val();
        sendControlData('co2', co2);
    });

    // pH值设置
    $('#set-ph').click(function() {
        var ph = $('#ph').val();
        sendControlData('ph', ph);
    });

    function sendControlData(controlType, value) {
        $.post('/control', {
            control_type: controlType,
            value: value
        }, function(data, status) {
            alert('数据已发送，状态: ' + status);
        });
    }
});
