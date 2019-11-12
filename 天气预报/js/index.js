$(function() {
    //图片路径
    var baseUrl = './img/';
    var weatherIcons = {
        100: {
            title: '晴',
            icon: '100.png',
        },
        101: {
            title: '多云',
            icon: '101.png',
        },
        102: {
            title: '少云',
            icon: '102.png'
        },
        103: {
            title: '晴间多云',
            icon: '103.png'
        },
        104: {
            title: '阴',
            icon: '104.png'
        },
        200: {
            title: '有风',
            icon: '200.png'
        },
        201: {
            title: '平静',
            icon: '201.png'
        },
        202: {
            title: '微风',
            icon: '202.png'
        },
        203: {
            title: '和风',
            icon: '203.png'
        },
        204: {
            title: '清风',
            icon: '204.png'
        },
        205: {
            title: '强风 / 劲风',
            icon: '205.png'
        },
        206: {
            title: '疾风',
            icon: '206.png'
        },
        207: {
            title: '大风',
            icon: '207.png'
        },
        208: {
            title: '烈风',
            icon: '208.png'
        },
        209: {
            title: '风暴',
            icon: '209.png'
        },
        210: {
            title: '狂爆风',
            icon: '210.png'
        },
        211: {
            title: '飓风',
            icon: '211.png'
        },
        212: {
            title: '龙卷风',
            icon: '212.png'
        },
        213: {
            title: '热带风暴',
            icon: '213.png'
        },
        300: {
            title: '阵雨',
            icon: '300.png'
        },
        301: {
            title: '强阵雨',
            icon: '301.png'
        },
        302: {
            title: '雷阵雨',
            icon: '302.png'
        },
        303: {
            title: '强雷阵雨',
            icon: '303.png'
        },
        304: {
            title: '雷阵雨伴有冰雹',
            icon: '304.png'
        },
        305: {
            title: '小雨',
            icon: '305.png'
        },
        306: {
            title: '中雨',
            icon: '306.png'
        },
        307: {
            title: '大雨',
            icon: '307.png'
        },
        308: {
            title: '极端降雨',
            icon: '308.png'
        },
        309: {
            title: '毛毛雨 / 细雨',
            icon: '309.png'
        },
        310: {
            title: '暴雨',
            icon: '310.png'
        },
        311: {
            title: '大暴雨',
            icon: '311.png'
        },
        312: {
            title: '特大暴雨',
            icon: '312.png'
        },
        313: {
            title: '冻雨',
            icon: '313.png'
        },
        314: {
            title: '小到中雨',
            icon: '314.png'
        },
        315: {
            title: '中到大雨',
            icon: '315.png'
        },
        316: {
            title: '大到暴雨',
            icon: '316.png'
        },
        317: {
            title: '暴雨到大暴雨',
            icon: '317.png'
        },
        318: {
            title: '大暴雨到特大暴雨',
            icon: '318.png'
        },
        399: {
            title: '雨',
            icon: '399.png'
        },
        400: {
            title: '小雪',
            icon: '400.png'
        },
        401: {
            title: '中雪',
            icon: '401.png'
        },
        402: {
            title: '大雪',
            icon: '402.png'
        },
        403: {
            title: '暴雪',
            icon: '403.png'
        },
        404: {
            title: '雨夹雪',
            icon: '404.png'
        },
        405: {
            title: '雨雪天气',
            icon: '405.png'
        },
        406: {
            title: '阵雨夹雪',
            icon: '406.png'
        },
        407: {
            title: '阵雪',
            icon: '407.png'
        },
        408: {
            title: '小到中雪',
            icon: '408.png'
        },
        409: {
            title: '中到大雪',
            icon: '409.png'
        },
        410: {
            title: '大到暴雪',
            icon: '410.png'
        },
        499: {
            title: '雪',
            icon: '499.png'
        },
        500: {
            title: '薄雾',
            icon: '500.png'
        },
        501: {
            title: '雾',
            icon: '501.png'
        },
        502: {
            title: '霾',
            icon: '502.png'
        },
        503: {
            title: '扬沙',
            icon: '503.png'
        },
        504: {
            title: '浮尘',
            icon: '504.png'
        },
        507: {
            title: '沙尘暴',
            icon: '507.png'
        },
        508: {
            title: '强沙尘暴',
            icon: '508.png'
        },
        509: {
            title: '浓雾',
            icon: '509.png'
        },
        510: {
            title: '强浓雾',
            icon: '510.png'
        },
        511: {
            title: '中度霾',
            icon: '511.png'
        },
        512: {
            title: '重度霾',
            icon: '512.png'
        },
        513: {
            title: '严重霾',
            icon: '513.png'
        },
        514: {
            title: '大雾',
            icon: '514.png'
        },
        515: {
            title: '特强浓雾',
            icon: '515.png'
        },
        900: {
            title: '热',
            icon: '900.png'
        },
        901: {
            title: '冷',
            icon: '901.png'
        },
        999: {
            title: '未知',
            icon: '999.png'
        },
    }



    function getWeather(city) {
        var data = {
            location: '广州',
            key: '324a409d7cc940a1a3acb0508969f01e',
        };

        if (city !== undefined) {
            data.location = city
        }
        //地点


        //实时天气
        $.ajax({
            type: 'GET',
            data: data,
            url: 'https://api.heweather.net/s6/weather/now',
            success: function(data) {
                console.log('data==>', data);
                //绑定当前城市
                var nowData = data.HeWeather6[0].now;
                var icon = weatherIcons[nowData.cond_code].icon;
                (weatherIcons[nowData.cond_code] == undefined ? weatherIcons + '.999 ' : weatherIcons[nowData.cond_code]).icon
                console.log(weatherIcons[nowData.cond_code].icon)
                $('.city').text(data.HeWeather6[0].basic.location)
                var $nowData = ` 
                             <div class="nowcity">${data.HeWeather6[0].basic.location}</div>
                             <div class="nowtmp clearfix">
                            <span class="ntmp">${nowData.tmp}</span>
                            <span class="shishi_data">
                                <i class="sup">℃</i>
                                <i class="sub">${nowData.cond_txt}(实时)</i>
                            </span>
                        </div>
                        <div class="wind">
                            <span>${nowData.wind_dir}</span>
                            <i class="win_level"> ${nowData.wind_sc}级 </i>
                        </div>
                        <div class="air">
                            <span>相对湿度</span>
                            <span class="level">${nowData.hum}</span>
                        </div>
                        <div class="nowdate">
                        <span>能见度</span>
                        <span class="riqi">${nowData.vis}</span>
                        </div>
                
                        <div class="nowicon">
                        <img src="${baseUrl+icon} " alt="" class="iconN">
                        </div>`
                    // (' + baseUrl +  + ')
                $('.nowW').append($nowData)

            }

        })

        var params = {
            location: '广州',
            key: '324a409d7cc940a1a3acb0508969f01e',
        }

        if (city !== undefined) {
            params.location = city;
        }
        //24小时天气
        $.ajax({
                type: 'GET',
                // dataType: 'jsonp',
                data: params,
                url: 'https://api.heweather.net/s6/weather/hourly',

                success: function(result) {
                    console.log('result==>', result)
                    var hoursWeatherData = result.HeWeather6[0].hourly;

                    $.each(hoursWeatherData, function(v, j) {
                        var icon = weatherIcons[j.cond_code].icon;
                        (weatherIcons[j.cond_code] == undefined ? weatherIcons + '.999 ' : weatherIcons[j.cond_code]).icon
                        var $li = `<li>
                    <div>${j.time.slice(11)}</div>
                    <div class="iconsH">
                    <img src="${baseUrl+icon} " alt="" class="iconH">
                    </div>
                    <div>${j.tmp}℃</div>
                </li>`
                        $('.listnav').append($li)
                    })
                }
            })
            //未来七天天气
        $.ajax({
            type: 'GET',
            // dataType: 'jsonp',
            data: params,
            url: 'https://api.heweather.net/s6/weather/forecast',
            success: function(future) {
                console.log('future==>', future)
                var futureWeatherData = future.HeWeather6[0].daily_forecast;
                $.each(futureWeatherData, function(v, j) {
                    var icon = weatherIcons[j.cond_code_d].icon;
                    (weatherIcons[j.cond_code] == undefined ? weatherIcons + '.999 ' : weatherIcons[j.cond_code]).icon
                    var $li =
                        `<li class="clearfix t">
                <img src="${baseUrl+icon} " alt="" class="iconN">
                <span class="time">${j.date.slice(8)}日</span>
                <span class="wea">${j.cond_txt_d}</span>
                <span class="tem"><em>${j.tmp_max}℃</em>~${j.tmp_min}℃</span>
                <span class="windc">${j.wind_dir}</span>
            </li>`
                    $('.weeklist').append($li)
                })
            }
        })

    }
    getWeather();
    //搜索

    $('.search_icon').on('click', function() {
        var city = $('#searchs').val();
        if (city == undefined || city.trim() == '') {
            return;
        }
        $('.listnav,.weeklist,.nowW').empty();
        getWeather(city)
    })





})