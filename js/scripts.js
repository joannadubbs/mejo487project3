$(function(){
  console.log('scripts loaded');

  //Build a table with ajax loaded data
  var url = 'js/tbitotalvisits.json';
  var emergency = [];
  var hospitalizations = [];
  var deaths = [];
  var total = [];
  var data = [];
  var year = [];


      $.ajax({ // ajax call for Line Graph
        type: 'GET',
        dataType: 'json',
        data: data,
        url: url,
        async: true,
        success:function(data){
          console.log(data);
          for(i=0; i < data.length; i++){
            //LOOP THROUGH THE DATA AND BUILD AN ARRAY
            emergency.push(data[i].EmergencyDepartmentVisits);
            hospitalizations.push(data[i].Hospitalizations);
            deaths.push(data[i].Deaths);
            year.push(data[i].Year)
          }
          buildChart(); //Call the function
          console.log(emergency);
          console.log(hospitalizations);
          console.log(deaths);
        }
      });
      function buildChart(){ //Line Graph---> Set Title, Axis, Legend
      var myChart = Highcharts.chart('container', {

          title: {
              text: 'Rates of Emergency Department Visits, Hospitalizations, and Deaths in the US for Traumatic Brain Injuries from 2001-2010'
          },

          subtitle: {
              text: 'Source: 	Centers for Disease Control and Prevention'
          },

          yAxis: {
              title: {
                  text: 'Rate per 100,000 People in the US'
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },

          plotOptions: {
               series: {
                   label: {
                       connectorAllowed: false
                   },
                   pointStart: 2001
               }
           },

           xAxis: {
             categories: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010' ]
           },

          series: [{
                name: 'Emergency Department Visits',
                data: emergency,
                color: '#369999'
            }, {
                name: 'Hospitalizations',
                data: hospitalizations,
                color: '#c8e6e6'
            }, {
                name: 'Deaths',
                data: deaths,
                color: '#c8e6e6'
          }],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }

  });
}

});//closing of function


Highcharts.chart('bargraph', { //HighChart Bargraph
    chart: {
        type: 'column'
    },
    title: {
        text: 'Rates of Combined Emergency Department, Hospitalizations, and Deaths for Traumatic Brain Injuries by Gender'
    },
    subtitle: {
        text: 'Source: 	Centers for Disease Control and Prevention'
    },
    xAxis: {
        categories: [
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate per 100,000 People in the US'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Male',
        data: [626.4, 660.6, 649.8, 732.1, 732.3, 689.6, 634.1, 863.6, 982.3, 932.1], //Data points starting with 2001 and going to 2010
        color: '#369999'

    }, {
        name: 'Female',
        data: [420.9, 419.3, 426.3, 475.9, 503.9, 504.7, 502.5, 599, 607.6, 720.3], //Data points starting with 2001 and going to 2010
        color: '#c8e6e6'
    }]
});

$('#table_id').DataTable(); //Call it
