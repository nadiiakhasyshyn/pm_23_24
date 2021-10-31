/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event)
{
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++)
    {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show'))  {
        openDropdown.classList.remove('show');
      }
    }
  }
}





function fc(){
  ('.element').hover(function(){
    (this).children('li').stop(false,true).fadeIn(300);},
      function() {
        (this).children('li').stop(false, true).fadeOut(300);
      })
  }




$(document).ready(function() {
  var $toggleButton = $('.toggle-button');
  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
  });
});


$(document).ready(function() {
  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-wrap');
  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
  });
});



$(document).ready(function() {
  var $sidebarArrow = $('.sidebar-menu-arrow');
  $sidebarArrow.click(function() {
    $(this).next().slideToggle(300);
  });
});



$(document).ready(function (){
  $('.element').click(function(event){
    $('.element_li').toggleClass('active');
  });
});



//First plot
Highcharts.chart('container', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: 'Average fruit consumption during one week'
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 150,
    y: 200,
    floating: true,
    borderWidth: 1,
    backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'Jule',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],

  },
  yAxis: {
    title: {
      text: 'Fruit units'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: ' units'
  },
  credits: {
    enabled: false
  },
  colors: ['#910000', '#1aadce'],
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
  series: [{
    name: 'John',
    data: [9000, 9800, 17000, 16000, 8500, 13000, 17000,13000,14000,14200,15000,19000]
  }, {
    name: 'Jane',
    data: [7800, 7500, 8800, 16800, 16500, 13000 , 11000,13200,19000,17000,12000,16000]
  }]
});

/////



///second
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
      {
        zoomEnabled: true,

        title:{
          text: "Chart With Date-Time Stamps Inputs"
        },
        colors:['#79d59f'],

        plotOptions: {
          series: {
            marker: {
              enabled: false
            }
          }
        },
        data: [
          {
            type: "area",
            xValueType: "dateTime",
            dataPoints: [
              { x: 1088620200000, y :71},
              { x: 1104517800000, y : 55 },
              { x: 1112293800000, y:  50 },
              { x: 1136053800000, y : 65 },
              { x: 1157049000000, y : 95 },
              { x: 1162319400000, y : 68 },
              { x: 1180636200000, y : 28 },
              { x: 1193855400000, y : 34 },
              { x: 1209580200000, y : 14 },
              { x: 1230748200000, y : 34 },
              { x: 1241116200000, y : 44 },
              { x: 1262284200000, y : 84 },
              { x: 1272652200000, y : 4  },
              { x: 1291141800000, y : 44 },
              { x: 1304188200000, y : 11 }
            ]
          }
        ]
      });

  chart.render();
}