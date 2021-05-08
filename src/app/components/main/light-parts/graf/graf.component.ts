import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-graf',
  templateUrl: './graf.component.html',
  styleUrls: ['./graf.component.scss']
})
export class GrafComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    Chart.register(...registerables);
    Chart.defaults.font.family = 'Source Sans Pro';
    Chart.defaults.font.size = 16;

    Chart.defaults.plugins.legend.display = false;

    const dataFirst = {
      label: 'Info1',
      data: [12, 16, 15, 27, 32, 9],
      lineTension: 0.7,
      fill: false,
      borderColor: '#cfdb4e',
      backgroundColor: 'transparent',
      pointBorderColor: '#cfdb4e',
      pointBackgroundColor: 'white',
      pointRadius: 5,
      pointHoverRadius: 7,
      pointHitRadius: 20,
      pointBorderWidth: 3,
      pointStyle: 'Rounded'
    };

    const dataSecond = {
      label: 'Info2',
      data: [15, 20, 28, 19, 16, 12],
      fill: false,
      borderColor: '#5caee1',
      lineTension: 0.7,
      backgroundColor: 'transparent',
      pointBorderColor: '#5caee1',
      pointBackgroundColor: 'white',
      pointRadius: 5,
      pointHoverRadius: 7,
      pointHitRadius: 20,
      pointBorderWidth: 3,
      pointStyle: 'Rounded'
    };

    const Data = {
      showLines: true,
      labels: [' ', 'Oct 14-20', 'Oct 21-27', 'Oct 28-3', 'Nov 4-10', ' '],
      datasets: [dataFirst, dataSecond],
    };

    new Chart('MyChart', {
      type: 'line',
      data: Data,
      options: {
        scales: {
          xAxes: {
            grid: {
              drawOnChartArea: false
            }
          },
          yAxes: {
            ticks: {
              maxTicksLimit: 40,
              stepSize: 10
            },
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
              boxWidth: 10,
              color: '#949cb0',
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          title: {
            display: true,
            text: 'Average time of processing one contract',
            color: '#59a9c7',
            font: {
              weight: 'regular'
            }
          },
          tooltip: {
            // onlyShowForDatasetIndex: [0, 1],
            callbacks: {
              label(tooltipItems: any): string {
                return tooltipItems.raw;
              },
              title(): string {
                return;
              }
            },
            displayColors: false,
            cornerRadius: 15,
            caretSize: 0,
            padding: {
              left: 15,
              right: 15,
              top: 3,
              bottom: 3
            },
            // yPadding: 5,
            backgroundColor: '#2b303e',
            titleFont: {style: 'normal'},
            titleMarginBottom: 0,
            // mode: '',
            titleAlign: 'center',
          }
        }
      }
    });
  }

  // const htmlRef = this.elementRef.nativeElement.querySelector(`#Chart`);
  // console.log(htmlRef);
  // // const speedCanvas = document.getElementById('Chart');
  //
  // // Chart.defaults.global.defaultFontFamily = 'Source Sans Pro';
  // // Chart.defaults.global.defaultFontSize = 16;
  // //
  // // Chart.defaults.global.legend.display = false;
  //
  //
  // const dataFirst = {
  //   label: 'Info1',
  //   data: [12, 16, 15, 27, 32, 9],
  //   lineTension: 0.7,
  //   fill: false,
  //   borderColor: '#cfdb4e',
  //   backgroundColor: 'transparent',
  //   pointBorderColor: '#cfdb4e',
  //   pointBackgroundColor: 'white',
  //   pointRadius: 5,
  //   pointHoverRadius: 7,
  //   pointHitRadius: 20,
  //   pointBorderWidth: 3,
  //   pointStyle: 'Rounded'
  // };
  //
  // const dataSecond = {
  //   label: 'Info2',
  //   data: [15, 20, 28, 19, 16, 12],
  //   fill: false,
  //   borderColor: '#5caee1',
  //   lineTension: 0.7,
  //   backgroundColor: 'transparent',
  //   pointBorderColor: '#5caee1',
  //   pointBackgroundColor: 'white',
  //   pointRadius: 5,
  //   pointHoverRadius: 7,
  //   pointHitRadius: 20,
  //   pointBorderWidth: 3,
  //   pointStyle: 'Rounded'
  // };
  //
  // const Data = {
  //   showLines: true,
  //   labels: [' ', 'Oct 14-20', 'Oct 21-27', 'Oct 28-3', 'Nov 4-10', ' '],
  //   datasets: [dataFirst, dataSecond],
  // };
  //
  // const chartOptions = {
  //   scales: {
  //     xAxes: [{
  //       gridLines: {
  //         drawOnChartArea: false,
  //         zeroLineColor: 'transparent'
  //       }
  //     }],
  //     yAxes: [{
  //       ticks: {
  //         min: 0,
  //         max: 40,
  //         stepSize: 10
  //       },
  //     }]
  //   },
  //   legend: {
  //     display: true,
  //     position: 'bottom',
  //     align: 'start',
  //     labels: {
  //       boxWidth: 20,
  //       fontColor: '#949cb0'
  //     }
  //   },
  //   title: {
  //     display: true,
  //     text: 'Average time of processing one contract',
  //     fontColor: '#59a9c7',
  //     fontStyle: 'regular'
  //   },
  //   tooltips: {
  //     onlyShowForDatasetIndex: [0, 1],
  //     callbacks: {
  //       label(tooltipItems, data) {
  //         return tooltipItems.yLabel;
  //       },
  //       title(tooltipItem, data) {
  //         return;
  //       }
  //     },
  //     displayColors: false,
  //     cornerRadius: 15,
  //     caretSize: 0,
  //     xPadding: 20,
  //     yPadding: 5,
  //     backgroundColor: '#2b303e',
  //     titleFontStyle: 'normal',
  //     titleMarginBottom: 0,
  //     // mode: '',
  //     titleAlign: 'center',
  //   }
  // };
  //
  // this.lineChart = new Chart(this.chartRef.nativeElement, {
  //   type: 'line',
  //   data: Data
  //   // options: chartOptions
  // });
}

