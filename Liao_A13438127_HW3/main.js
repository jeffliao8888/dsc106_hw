window.onload = function () {

    ['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
        document.getElementById('container').addEventListener(eventType,
            function (e) {
                var chart, point, i, event;

                for (i = 0; i < Highcharts.charts.length; i = i + 1) {
                    chart = Highcharts.charts[i];
                    // Find coordinates within the chart
                    event = chart.pointer.normalize(e);
                    // Get the hovered point
                    point = chart.series[0].searchPoint(event, true);
                    if (point) {
                        // point.highlight(e);

                        if(i == 0){
                            point.highlight(e);
                            var table = document.getElementById('reporting').rows[1].cells[3];
                            var price = point['y'];
                            table.innerHTML = '$' + price.toString();
                        };
                        if(i == 1){
                            point.highlight(e);
                        };
                        if(i == 2){
                            point.highlight(e);
                            var data = point['series']['chart']['hoverPoints']
                            var distillate = data[0];
                            var gas = data[1];
                            var pumps = data[2];
                            var wind = data[3];
                            var hydro = data[4];
                            var exports = data[5];
                            var solar = data[6];
                            var coal = data[7];

                            document.getElementById('reporting').rows[1].cells[1].innerHTML = coal['y'];
                            document.getElementById('reporting').rows[2].cells[1].innerHTML = solar['y'];
                            document.getElementById('reporting').rows[3].cells[1].innerHTML = exports['y'];
                            document.getElementById('reporting').rows[4].cells[1].innerHTML = hydro['y'];
                            document.getElementById('reporting').rows[5].cells[1].innerHTML = wind['y'];
                            document.getElementById('reporting').rows[6].cells[1].innerHTML = pumps['y'];
                            document.getElementById('reporting').rows[7].cells[1].innerHTML = gas['y'];
                            document.getElementById('reporting').rows[8].cells[1].innerHTML = distillate['y'];

                            document.getElementById('reporting').rows[1].cells[2].innerHTML = coal['percentage'].toFixed(4).toString() + '%';
                            document.getElementById('reporting').rows[2].cells[2].innerHTML = solar['percentage'].toFixed(4).toString() + '%';
                            document.getElementById('reporting').rows[3].cells[2].innerHTML = exports['percentage'].toFixed(4).toString() + '%';
                            document.getElementById('reporting').rows[4].cells[2].innerHTML = hydro['percentage'].toFixed(4).toString() + '%';
                            document.getElementById('reporting').rows[5].cells[2].innerHTML = wind['percentage'].toFixed(4).toString() + '%';
                            document.getElementById('reporting').rows[6].cells[2].innerHTML = pumps['percentage'].toFixed(4).toString() + '%';
                            document.getElementById('reporting').rows[7].cells[2].innerHTML = gas['percentage'].toFixed(4).toString() + '%';
                            document.getElementById('reporting').rows[8].cells[2].innerHTML = distillate['percentage'].toFixed(4).toString() + '%';
                            //Total 
                            document.getElementById('reporting').rows[9].cells[1].innerHTML = point['total'].toFixed(2);

                            bottomRight1(coal['y'], solar['y'], exports['y'], hydro['y'], wind['y'], pumps['y'], gas['y'], distillate['y'], point['total'].toFixed(2));
                            bottomRight2(coal['percentage'], solar['percentage'], exports['percentage'], hydro['percentage'], wind['percentage'], pumps['percentage'], gas['percentage'], distillate['percentage']);
                        }
                    }
                }
            }
        );
    });

    Highcharts.Pointer.prototype.reset = function() {
        return undefined;
    };

    Highcharts.Point.prototype.highlight = function(event) {
        event = this.series.chart.pointer.normalize(event);
        this.onMouseOver(); // Show the hover marker
        // this.series.chart.tooltip.refresh(this); // Show the tooltip
        this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
    };

    function updateTable(){
        
    }
};

function setup() {
    loadJSON('assets/price.json', bottomLeft1);
    loadJSON('assets/temperature.json', bottomLeft2);
    loadJSON('assets/power.json', topLeft);
}

function topLeft(data){
    var coal = data['coal'];
    var distillate = data['distillate'];
    var gas = data['gas'];
    var hydro = data['hydro'];
    var pumps = data['pumps'];
    var wind = data['wind'];
    var exports = data['exports'];
    var solar = data['solar'];
    var start = 1571578200;
    var $c = $("<div id='topLeft'></div>");
    $c.css("height", height);
    Highcharts.chart('topLeft', {
        title: {
            text: 'Generation MW',
            align: 'left',
            renderTo: $c[0]
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: null
            },
            gridLineWidth: 1,
            gridLineColor: '#808080',
            tickInterval: 1000,
            max: 9000,
            gridLineDashStyle: 'Dash'
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        chart: {
            type: 'area',
            backgroundColor: '#ece9e6'
        },
        tooltip: {
            split: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
            {
                name: 'distillate',
                data: distillate,
                pointStart: start,
                pointInterval: 1800 * 1000
            },
            {
                name: 'gas',
                data: gas, 
                pointStart: start,
                pointInterval: 1800 * 1000
            },
            {
                name: 'pumps',
                data: pumps,
                pointStart: start,
                pointInterval: 1800 * 1000
            },
            {
                name: 'wind',
                data: wind,
                pointStart: start,
                pointInterval: 1800 * 1000
            },
            {
                name: 'hydro',
                data: hydro,
                pointStart: start,
                pointInterval: 1800 * 1000
            },
            {
                name: 'exports',
                data: exports,
                pointStart: start,
                pointInterval: 1800 * 1000
            },
            {
                name: 'solar',
                data: solar,
                pointStart: start,
                pointInterval: 1800 * 1000,
                color: '#FFFF00'
            },
            {
                name: 'coal',
                data: coal,
                pointStart: start,
                pointInterval: 1800 * 1000,
                color: '#000000'
            },
        ]
    })
};

function bottomLeft1(data){
    var price = data;
    Highcharts.chart('bottomLeft1', {
        chart: {
            backgroundColor: '#ece9e6'
        },
        title: {
            text: 'Price $/MWh',
            align: 'left'
        },
        xAxis: {
            type: 'datetime',
            crosshair: true,
            tickLength: 0,
            labels: {
                enabled: true
            }
        },
        yAxis: {
            title: {
                text: null
            },
            tickAmount: 3,
            gridLineWidth: 1,
            gridLineColor: '#808080',
            gridLineDashStyle: 'Dash'
        },
        legend: {
            enabled: false
        },
        credits:{
            enabled: false
        },
        series: [{
            name: 'price',
            data: price,
            pointStart: 1571578200,
            pointInterval: 1800 * 1000 // 30 min
        }]
    })
};

function bottomLeft2(data){
    var temp = data;
    Highcharts.chart('bottomLeft2', {
        chart: {
            backgroundColor: '#ece9e6'
        },
        title: {
            text: 'Temperature °F',
            align: 'left'
        },
        xAxis: {
            type: 'datetime',
            crosshair: true,
            tickLength: 0,
            labels: {
                enabled: true
            }
        },
        yAxis: {
            title: {
                text: null
            },
            tickAmount: 4,
            gridLineWidth: 1,
            gridLineColor: '#808080',
            gridLineDashStyle: 'Dash'
        },
        legend: {
            enabled: false
        },
        credits:{
            enabled: false
        },
        series: [{
            name: 'Temperature',
            data: temp,
            pointStart: 1571578200,
            pointInterval: 1800 * 1000 // 30 min
        }]
    })
};

function bottomRight1(coal, solar, exports, hydro, wind, pumps, gas, distillate, total){
    console.log(total);
    Highcharts.chart('bottomRight1',{
        title: {
            text: total + 'MW',
            align: 'left',
        },
        chart:{
            type:'pie',
            backgroundColor: '#ece9e6'
        },
        credits: false,
        series:[{
            name: 'power',
            data: [
                {
                    name: 'coal',
                    y: coal
                },
                {
                    name: 'solar',
                    y: solar
                },
                {
                    name: 'exports',
                    y: exports
                },
                {
                    name: 'hydro',
                    y: hydro
                },
                {
                    name: 'wind',
                    y: wind
                },
                {
                    name: 'pumps',
                    y: pumps
                },
                {
                    name: 'gas',
                    y: gas
                },
                {
                    name: 'distillate',
                    y: distillate
                }
            ]
        }]
    });
};

function bottomRight2(coal, solar, exports, hydro, wind, pumps, gas, distillate){
    Highcharts.chart('bottomRight2',{
        title: {
            text: 'Power distribution',
            align: 'left',
        },
        chart:{
            type:'bar',
            backgroundColor: '#ece9e6'
        },
        credits: false,
        xAxis: {
            categories: ['Coal', 'Solar', 'Exports', 'Hydro', 'Wind', 'Pumps', 'Gas', 'Distillate'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage',
            }
        },
        series:[{
            name: 'power',
            data: [
                {
                    name: 'coal',
                    y: coal
                },
                {
                    name: 'solar',
                    y: solar
                },
                {
                    name: 'exports',
                    y: exports
                },
                {
                    name: 'hydro',
                    y: hydro
                },
                {
                    name: 'wind',
                    y: wind
                },
                {
                    name: 'pumps',
                    y: pumps
                },
                {
                    name: 'gas',
                    y: gas
                },
                {
                    name: 'distillate',
                    y: distillate
                }
            ]
        }]
    });
};

function myFunction() {
    var x = document.getElementById("bottomRight1");
    var y = document.getElementById("bottomRight2");

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";

    } else {
      x.style.display = "none";
      y.style.display = "block";

    }
  }