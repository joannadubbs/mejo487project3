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


      $.ajax({
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
          buildChart();
          console.log(emergency);
          console.log(hospitalizations);
          console.log(deaths);
        }
      });
      function buildChart(){
      var myChart = Highcharts.chart('container', {

          title: {
              text: 'Solar Employment Growth by Sector, 2010-2016'
          },

          subtitle: {
              text: 'Source: thesolarfoundation.com'
          },

          yAxis: {
              title: {
                  text: 'Number'
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


Highcharts.chart('bargraph', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Rates of TBI Per Year by Gender'
    },
    subtitle: {
        text: 'Source: '
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
            text: 'Insert here'
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
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6],
        color: '#369999'

    }, {
        name: 'Female',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6],
        color: '#c8e6e6'
    }]
});

$('#table_id').DataTable();
