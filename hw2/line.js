var i;

d3.csv("./data/monthly_sales.csv").then(function(data) {
    create_line_C(data);
    create_line_NE(data);
    create_line_SE(data);
    create_line_NW(data);
    create_line_SW(data);
});

function create_line_C(data){
    var C_h = [];
    var C_c = [];
    var C_f = []
    var dates = [];
    for (i = 0; i < data.length; i++) {
            C_h.push(Number(Object.values(data[i])[13]));
            C_c.push(Number(Object.values(data[i])[14]));
            C_f.push(Number(Object.values(data[i])[15]));
            dates.push(Object.values(data[i])[0])
    }
    var series = [{
           name: 'Central - Hamburger',
           data: C_h
        },{
            name: 'Central - Chicken',
            data: C_c
        },{
            name:'Central - Fish',
            data: C_f
        }
     ];
     var title = {
        text: 'Central Sales per Month'   
     };
     
     var xAxis = {
        categories: dates,
        plotLines: [{
            color: '#FF0000',
            width: 2,
            value: 33 // Position, you'll have to translate this to the values on your x axis
        }]
     };
     var yAxis = {
        title: {
           text: 'Sales'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
     };  
     
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };
    
     var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'central_line', 
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
    json.exporting = exporting;
    
    // Tying the data as the series data
    json.series = series;
    
    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("CS");
    Highcharts.chart(someVar, json);
}

function create_line_NE(data){
    var h = [];
    var c = [];
    var f = []
    var dates = [];
    for (i = 0; i < data.length; i++) {
            h.push(Number(Object.values(data[i])[1]));
            c.push(Number(Object.values(data[i])[2]));
            f.push(Number(Object.values(data[i])[3]));
            dates.push(Object.values(data[i])[0])
    }
    var series = [{
           name: 'North East - Hamburger',
           data: h
        },{
            name: 'Noth East - Chicken',
            data: c
        },{
            name:'North East - Fish',
            data: f
        }
     ];
     var title = {
        text: 'North East Sales per Month'   
     };
     
     var xAxis = {
        categories: dates,
        plotLines: [{
            color: '#FF0000',
            width: 2,
            value: 33 // Position, you'll have to translate this to the values on your x axis
        }]
     };
     var yAxis = {
        title: {
           text: 'Sales'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
     };  
     
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };

    var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'NE_line', 
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
    json.exporting = exporting;
    // Tying the data as the series data
    json.series = series;
    
    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("NE");
    Highcharts.chart(someVar, json);
}

function create_line_SW(data){
    var h = [];
    var c = [];
    var f = []
    var dates = [];
    for (i = 0; i < data.length; i++) {
            h.push(Number(Object.values(data[i])[4]));
            c.push(Number(Object.values(data[i])[5]));
            f.push(Number(Object.values(data[i])[6]));
            dates.push(Object.values(data[i])[0])
    }
    var series = [{
           name: 'South West - Hamburger',
           data: h
        },{
            name: 'South West - Chicken',
            data: c
        },{
            name:'South West - Fish',
            data: f
        }
     ];
     var title = {
        text: 'South West Sales per Month'   
     };
     
     var xAxis = {
        categories: dates,
        plotLines: [{
            color: '#FF0000',
            width: 2,
            value: 33 // Position, you'll have to translate this to the values on your x axis
        }]
     };
     var yAxis = {
        title: {
           text: 'Sales'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
     };  
     
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };

     var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'SW_line', 
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
    json.exporting = exporting;
    // Tying the data as the series data
    json.series = series;
    
    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("SW");
    Highcharts.chart(someVar, json);
}

function create_line_NW(data){
    var h = [];
    var c = [];
    var f = []
    var dates = [];
    for (i = 0; i < data.length; i++) {
            h.push(Number(Object.values(data[i])[7]));
            c.push(Number(Object.values(data[i])[8]));
            f.push(Number(Object.values(data[i])[9]));
            dates.push(Object.values(data[i])[0])
    }
    var series = [{
           name: 'North West - Hamburger',
           data: h
        },{
            name: 'North West - Chicken',
            data: c
        },{
            name:'North West - Fish',
            data: f
        }
     ];
     var title = {
        text: 'North West Sales per Month'   
     };
     
     var xAxis = {
        categories: dates,
        plotLines: [{
            color: '#FF0000',
            width: 2,
            value: 33 // Position, you'll have to translate this to the values on your x axis
        }]
     };
     var yAxis = {
        title: {
           text: 'Sales'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
     };  
     
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };
    
     var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'NW_line', 
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
    json.exporting = exporting;
    // Tying the data as the series data
    json.series = series;
    
    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("NW");
    Highcharts.chart(someVar, json);
}

function create_line_SE(data){
    var h = [];
    var c = [];
    var f = []
    var dates = [];
    for (i = 0; i < data.length; i++) {
            h.push(Number(Object.values(data[i])[10]));
            c.push(Number(Object.values(data[i])[11]));
            f.push(Number(Object.values(data[i])[12]));
            dates.push(Object.values(data[i])[0])
    }
    var series = [{
           name: 'South East - Hamburger',
           data: h
        },{
            name: 'South East - Chicken',
            data: c
        },{
            name:'South East - Fish',
            data: f
        }
     ];
     var title = {
        text: 'South East Sales per Month'   
     };
     
     var xAxis = {
        categories: dates,
        plotLines: [{
            color: '#FF0000',
            width: 2,
            value: 33 // Position, you'll have to translate this to the values on your x axis
        }]
     };
     var yAxis = {
        title: {
           text: 'Sales'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
     };  
     
     var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     };
    
     var exporting =  {
        sourceWidth: 1502,
        scale: 1,
        filename: 'SE_line', 
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
    json.exporting = exporting;
    // Tying the data as the series data
    json.series = series;
    
    // We need to couple the chart data structure with the chartPlaceHolder div
    var someVar = document.getElementById("SE");
    Highcharts.chart(someVar, json);
}