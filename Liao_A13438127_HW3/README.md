*** Must be viewed in a local web server ***
*** Alternatively, you can view it at http://acsweb.ucsd.edu/~zjliao/Liao_A13438127_HW3/ ***
Folders:
/assets - contains 3rd party assets used in the homework. This includes jquery, p5, images, and json files. Highcharts was imported though CDN.

index.html - main html with div and tables

main.js - where the charts and table values are created

main.css - where the layout is formatt/ed


Implementation:
A p5.js file was loaded to help load json files.
The function goes like this loadJSON('json file', function).

I also did some data cleaning before hand. 
Price and temperature was extracted from the original dataset and saved into a list.
The power source datasets were extracted by 30 minute interval because the data was originally in 5 minute intervals. This lets the data sync up to each other. 

To create the charts, I created different divs for where each chart should be. Then I tied together all the different divs for synchronization.


Limitations / differences: 
Must be viewed in a local web server

The day and night shade for the price and the temperature was not implemented in the replication. 

The replication of the pie chart is different from the original because the original was a donut chart. 

Instead of just a line hovering with the values displayed on the top right of the chart, a box would appear and show the data for each point hovered through.

For the change chart functionality, instead to clicking on a pie chart or a bar chart symbol, there is a button that says 'Change chart,' this button allows the used to switch between a pie and a bar chart. 


References: 
Sychronizing charts: http://jsfiddle.net/x27khmp6/22/
API: https://api.highcharts.com/highcharts/
