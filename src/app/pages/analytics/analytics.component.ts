import { Component, OnInit } from '@angular/core';
import { DataServiceService}  from '../../providers/data-service.service';
// importing Chart.js
import * as Chart from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  baseTimeStamp;
  pieChart;
  barChart;
  lineChart;
  analyticsData;
  dataSpeedSets = [];
  dataCountSets = [];
  labels = [];
  pieLabels = [];
  pieColors = [];
  pieData = [];
  
  //defining the chart data
  pieChartConfig = {
   type: 'doughnut',
   data: {
     datasets: [{
       data: this.pieData,
       backgroundColor: this.pieColors,
       label: 'Dataset 1'
     }],
     labels: this.pieLabels
   },
   options: {
     responsive: true
   }
 };

 barChartData = {
  labels: ['1'],
  datasets: this.dataCountSets
};

lineChartConfig = {
  type: 'line',
  data: {
    labels: this.labels,
    datasets: this.dataSpeedSets
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: ''
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Speed in km'
        }
      }]
    }
  }
  };

  ngOnInit() {
    this.getData()
  }

  //getting the data from provider
  getData() {
    var data;
    data = this.dataService.getJSON().subscribe(res => {
      this.analyticsData = res;
      this.initChartData();
    },
    err => console.log(err));
  }

  //creating the chart
  initChartData(){
    this.analyticsData.forEach(data => {
      var color = [this.generateRandomColor(), this.generateRandomColor()];
      var obj1 = {
        label: data.zoneId,
        backgroundColor: color[0],
        borderColor: color[0],
        data: [data.data.speed],
        fill: false
      };
      this.dataSpeedSets.push(obj1);
      var obj2 = {
        label: data.zoneId,
        backgroundColor: color[1],
        borderColor: color[1],
        borderWidth:1,
        data: [data.data.count]
      };
      this.dataCountSets.push(obj2);
      this.pieData.push(data.data.speed);
      this.pieLabels.push(data.zoneId);
      this.pieColors.push(this.generateRandomColor());
      this.baseTimeStamp = data.data.time;
      var d = new Date(this.baseTimeStamp);
      this.labels.push(d.getHours() + ":" + d.getMinutes());
    });
    var ctx = (<HTMLCanvasElement>document.getElementById('canvas')).getContext('2d');
    this.lineChart = new Chart(ctx, this.lineChartConfig);
    
    var ctx2 = (<HTMLCanvasElement>document.getElementById('barcanvas')).getContext('2d');
    var a = {
      type: 'bar',
      data: this.barChartData,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: ''
        }
      }
    };
    this.barChart = new Chart(ctx2, a);
    this.barChart.update();


    var ctx3 = (<HTMLCanvasElement>document.getElementById('piecanvas')).getContext('2d');
    this.pieChart = new Chart(ctx3, this.pieChartConfig);

    this.updateDataSet();
  }

  //updating the chart data
  updateDataSet(){
    setInterval(()=>{
      this.baseTimeStamp += 30000;
      var d = new Date(this.baseTimeStamp);
      this.lineChartConfig.data.labels.push(d.getHours() + ":" + d.getMinutes());
      this.lineChartConfig.data.labels.splice(0,1);
      this.lineChartConfig.data.datasets.forEach((dataset, i) => {
        var speed = 10 * Math.random();
        dataset.data.push( speed );
        if(dataset.data.length > 5){
          dataset.data.splice(0,1);
        }
        
        this.pieData[i] = (this.pieData[i] + speed) / 2;
      });

      this.lineChart.update();
      this.pieChart.update();
      this.dataCountSets.forEach(data=>{
        data.data[0] = 10 * Math.random();
      });
      this.barChart.update();
    }, 30000)
  }

  //generating random colors
  generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
