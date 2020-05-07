import React from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function() {
        originalDoughnutDraw.apply(this, arguments);

        var chart = this.chart;
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var sum = chart.config.data.datasets[0].data[1] + '%';

        var text = sum,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2.6;

        ctx.fillText(text, textX, textY);
    }
});

const PieChart = (props) => {

    const {
        dataLabels = ['Valor 1', 'Valor 2'],
            datasetsLabel = '',
            datasetsData = [0, 0],
            datasetsColors = [
                '#d4d4d4',
                '#ee6e73',
            ],
            displayTitle = true,
            textTitle = '',
            fontTitle = 15,
            titlePosition = 'bottom',
            displayLegend = false,
            legendPosition = 'right'
    } = props;

    return ( < div >
        <
        Doughnut data = {
            {
                labels: dataLabels,
                datasets: [{
                    label: datasetsLabel,
                    data: datasetsData,
                    backgroundColor: datasetsColors,
                }],
                text: '23%'
            }
        }

        options = {
            {
                title: {
                    display: displayTitle,
                    position: titlePosition,
                    text: textTitle,
                    fontSize: fontTitle
                },
                legend: {
                    display: displayLegend,
                    position: legendPosition,

                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var currentValue = dataset.data[tooltipItem.index];
                            return currentValue + '%';
                        },
                        title: function(tooltipItem, data) {
                            return data.labels[tooltipItem[0].index];
                        }
                    }
                },
            }
        }
        /> </div >
    )
}

export default PieChart;