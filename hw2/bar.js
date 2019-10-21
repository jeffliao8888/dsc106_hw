var i;

d3.csv("/data/daily_sales.csv").then(function(data) {
    create_bar_C(data);
    create_bar_F(data);
    create_bar_H(data);
    create_bar_burgers(data);
});

function create_bar_C(data){
    var c = [];
    var chicken_row = [3,6,9,12,15]
    c.push(chicken_row.map(pair));
    function pair(value){
        for (i = 0; i < data.length; i++) {
            c.push([Object.values(data[i])[0], Object.values(data[i])[value]]);
        }
        return c
    }
    var mon_c = 0;
    var tue_c = 0;
    var wed_c = 0;
    var thur_c = 0;
    var fri_c = 0;
    var sat_c = 0;
    var sun_c = 0;
    for (i=0; i<c.length; i++){
        week = c[i][0]
        sale = Number(c[i][1])
        if (week == 'Monday'){
            mon_c += sale
        }
        if (week == 'Tuesday'){
            tue_c += sale
        }
        if (week == 'Wednesday'){
            wed_c += sale
        }
        if (week == 'Thursday'){
            thur_c += sale
        }
        if (week == 'Friday'){
            fri_c += sale
        }
        if (week == 'Saturday'){
            sat_c += sale
        }
        if (week == 'Sunday'){
            sun_c += sale
        }
    }
    var series = [
        {
           name: 'Chicken fillet',
           data: [sun_c, mon_c, tue_c, wed_c, thur_c, fri_c, sat_c]
        }
     ];
     // Configuration about the plot
    var title = {
        text: 'Day of Week vs Chicken Fillet Sales'   
    };

    var xAxis = {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
           title: {
               text: 'Day of Week'
           }
     };
     var yAxis = {
        title: {
           text: 'Sales'
        }
     };  
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };
    var chart = {
        type: 'bar'
    };

    var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'chicken_bar', 
        chartOptions: {
            chart:{
                height: this.chartHeight
            }
        }
    };
     // Data structure to hold all the configurations together
     var json = {};
    
     // Tying all the configurations
    json.title = title;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.legend = legend;
    json.chart = chart;
    // Tying the data as the series data
    json.series = series;
    json.exporting = exporting;
    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("chicken");
    Highcharts.chart(someVar, json);
}

function create_bar_F(data){
    var f = [];
    var fish_row = [4,7,10,13,16]
    f.push(fish_row.map(pair));
    function pair(value){
        for (i = 0; i < data.length; i++) {
            f.push([Object.values(data[i])[0], Object.values(data[i])[value]]);
        }
        return f
    }
    var mon = 0;
    var tue = 0;
    var wed = 0;
    var thur = 0;
    var fri = 0;
    var sat = 0;
    var sun = 0;
    for (i=0; i<f.length; i++){
        week = f[i][0]
        sale = Number(f[i][1])
        if (week == 'Monday'){
            mon += sale
        }
        if (week == 'Tuesday'){
            tue += sale
        }
        if (week == 'Wednesday'){
            wed += sale
        }
        if (week == 'Thursday'){
            thur += sale
        }
        if (week == 'Friday'){
            fri += sale
        }
        if (week == 'Saturday'){
            sat += sale
        }
        if (week == 'Sunday'){
            sun += sale
        }
    }
    var series = [
        {
           name: 'Fish fillet',
           data: [sun, mon, tue, wed, thur, fri, sat]
        }
     ];
     // Configuration about the plot
    var title = {
        text: 'Day of Week vs Fish Fillet Sales'   
    };

    var xAxis = {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
           title: {
               text: 'Day of Week'
           }
     };
     var yAxis = {
        title: {
           text: 'Sales'
        }
     };  
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };
    var chart = {
        type: 'bar'
    };
     // Data structure to hold all the configurations together
    var json = {};
    
    var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'fish_bar', 
        chartOptions: {
            chart:{
                height: this.chartHeight
            }
        }
    };
     // Tying all the configurations
    json.title = title;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.legend = legend;
    json.chart = chart;
    // Tying the data as the series data
    json.series = series;
    json.exporting = exporting;
    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("fish");
    Highcharts.chart(someVar, json);
}

function create_bar_H(data){
    var h = [];
    var hamburger_row = [2,5,8,11,14]
    h.push(hamburger_row.map(pair))
    function pair(value){
        for (i = 0; i < data.length; i++) {
            h.push([Object.values(data[i])[0], Object.values(data[i])[value]]);
        }
        return h
    }
    var mon_c = 0;
    var tue_c = 0;
    var wed_c = 0;
    var thur_c = 0;
    var fri_c = 0;
    var sat_c = 0;
    var sun_c = 0;
    for (i=0; i<h.length; i++){
        week = h[i][0]
        sale = Number(h[i][1])
        if (week == 'Monday'){
            mon_c += sale
        }
        if (week == 'Tuesday'){
            tue_c += sale
        }
        if (week == 'Wednesday'){
            wed_c += sale
        }
        if (week == 'Thursday'){
            thur_c += sale
        }
        if (week == 'Friday'){
            fri_c += sale
        }
        if (week == 'Saturday'){
            sat_c += sale
        }
        if (week == 'Sunday'){
            sun_c += sale
        }
    }
    var series = [
        {
           name: 'Hamburger',
           data: [sun_c, mon_c, tue_c, wed_c, thur_c, fri_c, sat_c]
        }
     ];
     // Configuration about the plot
    var title = {
        text: 'Day of Week vs Hamburger Sales'   
    };

    var xAxis = {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
           title: {
               text: 'Day of Week'
           }
     };
     var yAxis = {
        title: {
           text: 'Sales'
        }
     };  
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };
    var chart = {
        type: 'bar'
    };

    var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'hamburger_bar', 
        chartOptions: {
            chart:{
                height: this.chartHeight
            }
        }
    };
     // Data structure to hold all the configurations together
     var json = {};
    
     // Tying all the configurations
    json.title = title;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.legend = legend;
    json.chart = chart;
    // Tying the data as the series data
    json.series = series;
    json.exporting = exporting;

    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("hamburger");
    Highcharts.chart(someVar, json);
}

function create_bar_burgers(data){
    var b = [];
    var burger_rows = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    b.push(burger_rows.map(pair))
    function pair(value){
        for (i = 0; i < data.length; i++) {
            b.push([Object.values(data[i])[0], Object.values(data[i])[value]]);
        }
        return b
    }
    var mon_c = 0;
    var tue_c = 0;
    var wed_c = 0;
    var thur_c = 0;
    var fri_c = 0;
    var sat_c = 0;
    var sun_c = 0;
    for (i=0; i<b.length; i++){
        week = b[i][0]
        sale = Number(b[i][1])
        if (week == 'Monday'){
            mon_c += sale
        }
        if (week == 'Tuesday'){
            tue_c += sale
        }
        if (week == 'Wednesday'){
            wed_c += sale
        }
        if (week == 'Thursday'){
            thur_c += sale
        }
        if (week == 'Friday'){
            fri_c += sale
        }
        if (week == 'Saturday'){
            sat_c += sale
        }
        if (week == 'Sunday'){
            sun_c += sale
        }
    }
    var series = [
        {
           name: 'Burgers',
           data: [sun_c, mon_c, tue_c, wed_c, thur_c, fri_c, sat_c]
        }
     ];
     // Configuration about the plot
    var title = {
        text: 'Day of Week vs Burger Total Sales'   
    };

    var xAxis = {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
           title: {
               text: 'Day of Week'
           }
     };
     var yAxis = {
        title: {
           text: 'Sales'
        }
     };  
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };
    var chart = {
        type: 'bar'
    };

    var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'burger_bar', 
        chartOptions: {
            chart:{
                height: this.chartHeight
            }
        }
    };
     // Data structure to hold all the configurations together
     var json = {};
    
     // Tying all the configurations
    json.title = title;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.legend = legend;
    json.chart = chart;
    // Tying the data as the series data
    json.series = series;
    json.exporting = exporting;
    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("burger");
    Highcharts.chart(someVar, json);
}