// // console.log("Hello World from simple_highcharts.js!");

// // Data of the line chart
// var series = [{
//        name: 'Fulltime_Men_Admitted',
//        data: [{
//             name: 'Admits',
//             colorByPoint: true,
//             data:[{
//                 name: '2005',
//                 y: 7580,
//                 sliced: true,
//                 selected: true
//             },{
//                 name: '2006',
//                 y: 9210
//             },{
//                 name: '2007',
//                 y: 8419
//             },{
//                 name:'2008',
//                 y: 8517
//             },{
//                 name: '2009',
//                 y: 7816
//             },{
//                 name:'2010',
//                 y: 8365
//             },{
//                 name:'2011',
//                 y: 8707
//             },{
//                 name:'2012',
//                 y: 10917
//             },{
//                 name:'2013',
//                 y: 11866
//             },{
//                 name:'2014',
//                 y: 11758
//             },{
//                 name:'2015',
//                 y: 12748
//             },{
//                 name:'2016',
//                 y: 14103
//             },{
//                 name:'2017',
//                 y: 13981
//             },{
//                 name:'2018',
//                 y: 13781
//             }]
//        }]
//     }];

//  // Configuration about the plot
//  var title = {
//     text: 'Year vs Fulltime_Men_Admitted'   
//  };
 
// var chart = {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: 'pie'
// };

// // var tooltip = {
// //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
// // };

// var plotOptions = {
//     pie: {
//         allowPointSelect: true,
//         cursor: 'pointer',
//         dataLabels: {
//             enabled: true,
//             format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//         }
//     }
// }

//  // Data structure to hold all the configurations together
//  var json = {};

//  // Tying all the configurations
// json.title = title;
// json.chart = chart;
// // json.tooltip = tooltip;
// json.plotOptions = plotOptions;

// // Tying the data as the series data
// json.series = series;

// // We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
// Highcharts.chart(someVar, json);
Highcharts.chart(someVar, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Year vs Fulltime_Men_Admitted'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Admits',
        colorByPoint: true,
        data: [{
            name: '2005',
            y: 7580,
            sliced: true,
            selected: true
        }, {
            name: '2006',
            y: 9210
        }, {
            name: '2007',
            y: 8419
        },{
            name:'2008',
            y: 8517
        },{
            name: '2009',
            y: 7816
        },{
            name:'2010',
            y: 8365
        },{
            name:'2011',
            y: 8707
        },{
            name:'2012',
            y: 10917
        },{
            name:'2013',
            y: 11866
        },{
            name:'2014',
            y: 11758
        },{
            name:'2015',
            y: 12748
        },{
            name:'2016',
            y: 14103
        },{
            name:'2017',
            y: 13981
        },{
            name:'2018',
            y: 13781
        }]
    }]
});