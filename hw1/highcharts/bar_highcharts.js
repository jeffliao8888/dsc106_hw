// console.log("Hello World from simple_highcharts.js!");

// Data of the line chart
var series = [
    {
       name: 'Fulltime_Men_Admitted',
       data: [7580,
        9210,
        8419,
        8517,
        7816,
        8365,
        8707,
        10917,
        11866,
        11758,
        12748,
        14103,
        13981,
        13781]
    }
 ];

 // Configuration about the plot
 var title = {
    text: 'Year vs Fulltime_Men_Admitted'   
 };
 
 var xAxis = {
    categories: ['2005', '2006', '2007', '2008', '2009', '2010'
       ,'2011', '2012', '2013', '2014', '2015', '2016', '2017','2018'],
       title: {
           text: 'Year'
       }
 };
 var yAxis = {
    title: {
       text: 'Number of people'
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

 // Tying all the configurations
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;
json.chart = chart;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);
 