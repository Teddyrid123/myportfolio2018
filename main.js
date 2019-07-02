$(document).ready(function() {
    var donutChart = $('.donut-chart-js');

    if(donutChart.length > 0) {
      
      $.each(donutChart, function(index, item) {
        var donutChartPercentage = $(item).attr('data-percentage');
        var donutChartRadio = $(item).find('.donut-chart').attr("r");
        var donutChartValue = ( (100 - Number(donutChartPercentage)) * (6.28 * Number(donutChartRadio)) )/100;

        $(item).find('.donut-chart-value').html(donutChartPercentage + "%");
        $(item).find('circle.donut-chart').css('stroke-dashoffset', donutChartValue);
      });
    }

});