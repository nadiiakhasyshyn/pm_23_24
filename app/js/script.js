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



function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
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



function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
}

function triggerHtmlEvent(element, eventName) {
  var event;
  if (document.createEvent) {
    event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    event.eventType = eventName;
    element.fireEvent('on' + event.eventType, event);

  }
  return false;
}

jQuery('.lang-select').click(function() {
  var theLang = jQuery(this).attr('data-lang');
  jQuery('.goog-te-combo').val(theLang);

  //alert(jQuery(this).attr('href'));
  window.location = jQuery(this).attr('href');
  location.reload();
return false;
});


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

$(document).ready(function (){
  $('.burger').click(function(event){
    $('.sideBar, .burger').toggleClass('tog');
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
    type: 'areaspline',

  },
title:{
    text:'',
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
    minorTickInterval: 'auto',
    startOnTick: true,
    endOnTick: true,

  },

  yAxis: {
    title: {
      text: ''
    },

  },

  tooltip: {
    shared: true,
    valueSuffix: ' units'
  },
  credits: {
    enabled: false
  },
  colors: ['#253340', '#b6597c'],


      plotOptions: {
    series:{
      fillOpacity: 1
    },

          },
  series: [{
    name: 'First',
    data: [9000, 9800, 17000, 16000, 8500, 13000, 17000,13000,14000,14200,15000,19000],

    marker: {
      enabled: false
    },
    fillOpacity: 1

  }, {
    name: 'Second',
    data: [7800, 7500, 8800, 16800, 16500, 13000 , 11000,13200,19000,17000,12000,16000],
    marker: {
      enabled: false
    },
    color : {
      linearGradient : [0, 0, 0, 200],

      stops : [
        [0, Highcharts.Color('#569470').setOpacity(0.8).get('rgba')],
        [1, Highcharts.Color('#ba577c').setOpacity(0.8).get('rgba')],
      ]

    },

  }],


});

/////

///second
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
      {
        zoomEnabled: true,

        plotOptions: {
          series: {
            marker: {
              enabled: true,
              color:['#ffffff']
            }
          }
        },
        axisY:{
          title: "",
          tickLength: 0,
          lineThickness:0,
          margin:0,

          valueFormatString:" " //comment this to show numeric values
        },
        axisX:{
          title: "",
          tickLength: 0,
          margin:0,
          lineThickness:0,
          valueFormatString:" " //comment this to show numeric values

        },
        data: [
          {

            color:['#79d59f'],
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

//menu

$(".sideBar").html($(".navigation").html()); // to copy html

$('.sideBar li:has(ul)').prepend('<span class="pluse"></span>')// to append span in sidebar li

$('.menu-icon').click(function() {  // to open sidebar
  $('.sideBar').toggleClass('slideLeft');
  $('.wrapper').toggleClass('wrappRight');


  $(this).toggleClass('menu-active');
  $('.content').toggleClass('content_active');
  $('.res').toggleClass('res2');
  if ($(".sideBar li ul").is(":visible")) {
    $('.sideBar li ul').slideUp('fast');
    $('.sideBar .pluse').removeClass('minus');
  }
});
$('.sideBar .pluse').click(function() {  //
  $(this).siblings('ul').slideToggle('slow');
  $(this).toggleClass('minus');
  ('.sideBar').toggleClass('slideLeft');
});


//pie

AmCharts.makeChart("chartdiv", {
  "type": "pie",
  "theme": "light",
  "allLabels": [{
    "text": "",
    "align": "center",
    "font-size":"30",
    "bold": true,
    "y": 200,



  }],
  colors: ['#f1a80a', '#a3de6e','#248bcb','#486e91','#00cccc'],

  "dataProvider": [
      {
    "title": "1",
    "value": 14,

  },
    {
      "title": "2",
      "value": 16,

    },
    {
      "title": "3",
      "value": 30,

    },
    {
      "title": "4",
      "value": 30,

    },
    {
    "title": "5",
    "value": 30,

  }],
  "titleField": "title",
  "valueField": "value",
  "labelRadius": -130,
  "radius": "20%",
  "innerRadius": "60%",
  "labelText": ""
});

//line

Highcharts.chart('container2', {
  chart: {
    type: 'line'
  },
  yAxis:{


  },
  xAxis: {
    categories: ['', '', '', '', '', '', '', '', '', '', '', ''],

  },

  plotOptions: {
    series: {
      fillOpacity: 0.1
    }
  },
colors:['#4bdbdb','#f1a80a'],
  series: [{
    data: [18, 71.5, 106.4, 129.2, 144.0, 170.0, 127.6, 148.5, 230.4, 200.1, 100.6, 70.4]
  },


    {data: [23.9, 75.5, 135.4, 12.2, 150.0, 176.0, 136, 148.5, 216.4, 194.1, 95.6, 54.4]}


  ]
});



//diagrams
$(function () {
  $('#container3').highcharts({
    chart: {
      type: 'bar',

    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['US', 'APAC', 'EU', 'Africa', 'EMEA', 'LATAM'],

    },
    yAxis: {
      min: 0,
      title: {
        text: 'category'
      },

    },
    legend: {
      reversed: true
    },



        plotOptions: {

          bar: {stacking: 'percent',
            dataLabels: {
              enabled: true,
              crop: false,
              overflow: 'none',
              y: -24,
              x:-20,
              verticalAlign: 'top',
              backgroundColor:'#f22613',
              color:'#ffffff',
              format: '{y} %',

            }
          },

          series: {
            stacking: 'normal',
            color: {
              pattern: {
                path: {
                  d: 'M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9',
                  strokeWidth: 5
                },
                width: 10,
                height: 10,
                opacity: 3,
                color:'#46c1fa',
                backgroundColor: '#566066',
              }
            },


      },

    },

      series: [

        {

          data: [10, 40, 82, 15, 30],
          color:'#949393',

            dataLabels: {
              enabled: false,
              crop: false,
            },


        },

          {
      name: 'Technology',
      data: [90 , 60, 18, 85, 70],
          },
        ]
  });
});




$(document).ready(function(){

  $.getJSON("data.json", function (data){

    var data_v = '';
    $.each(data, function (key, value){
      data_v += '<tr>';
      data_v += '<td><img src="'+value.image+'" alt="img"></td>';
      data_v += '<td>'+value.product_name+'</td>';
      data_v += '<td>'+value.product_code+'</td>';
      data_v += '<td><button class="myBot">'+value.status+'</button></td>';


      data_v += '<td>'+value.purchased_on+'</td>';
      data_v += '<td>'+value.price+'</td>';
      data_v += '<td>'+value.quantity+'</td>';
      data_v += '<td>'+value.tracking_num+'</td>';
      data_v += '</tr>';

    });
    $('#table').append(data_v);
  });
});





  $("#italy").click(function () {
    sessionStorage.setItem('en', 'Italy');
  });
$("#english").click(function () {
  sessionStorage.setItem('en', 'English');
});

$("#france").click(function () {
  sessionStorage.setItem('en', 'France');
});
$("#germany").click(function () {
  sessionStorage.setItem('en', 'Germany');
});

let elem = document.querySelector('#BUTTON');
  elem.innerHTML = sessionStorage.getItem("en");






