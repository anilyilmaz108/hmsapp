import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

	pieChartOptions = {
		animationEnabled: true,
		title: {
		  text: "Sales by Department"
		},
		data: [{
		  type: "pie",
		  startAngle: -90,
		  indexLabel: "{name}: {y}",
		  yValueFormatString: "#,###.##'%'",
		  dataPoints: [
			{ y: 14.1, name: "Toys" },
			{ y: 28.2, name: "Electronics" },
			{ y: 14.4, name: "Groceries" },
			{ y: 43.3, name: "Furniture" }
		  ]
		}]
	  }

	stackedChartOptions = {
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Number of Students in Each Room"   
		},
		axisX:{
			title: "Rooms"
		},
		axisY:{
			title: "Percentage"
		},
		toolTip:  {
			shared: true
		},
		legend: {
			horizontalAlign: "right",
			verticalAlign: "center",
			reversed: true        
		},
		data: [{
			type: "stackedColumn100",
			name: "Boys",
			showInLegend: "true",
			indexLabel: "#percent %",
			indexLabelPlacement: "inside",
			indexLabelFontColor: "white",
			dataPoints: [
				{  y: 45, label: "Cafeteria"},
				{  y: 24, label: "Lounge" },
				{  y: 68, label: "Games Room" },
				{  y: 24, label: "Lecture Hall" },
				{  y: 15, label: "Library"}
			]
		}, {
			type: "stackedColumn100",
			name: "Girls",
			showInLegend: "true",
			indexLabel: "#percent %",
			indexLabelPlacement: "inside",
			indexLabelFontColor: "white",
			dataPoints: [
				{  y: 22, label: "Cafeteria"},
				{  y: 17, label: "Lounge" },
				{  y: 32, label: "Games Room" },
				{  y: 48, label: "Lecture Hall" },
				{  y: 25, label: "Library"}
			]
		}]
	}

	visitorsMonthlyChartOptions = {
		title: {
			text: "Monthly Sales Data"
		},
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		axisY: {
		  includeZero: true,
		  valueFormatString: "$#,##0k"
		},
		data: [{
		  type: "column", //change type to bar, line, area, pie, etc
		  yValueFormatString: "$#,##0k",
		  color: "#01b8aa",
		  dataPoints: [
			  { label: "Jan", y: 172 },
			  { label: "Feb", y: 189 },
			  { label: "Mar", y: 201 },
			  { label: "Apr", y: 240 },
			  { label: "May", y: 166 },
			  { label: "Jun", y: 196 },
			  { label: "Jul", y: 218 },
			  { label: "Aug", y: 167 },
			  { label: "Sep", y: 175 },
			  { label: "Oct", y: 152 },
			  { label: "Nov", y: 156 },
			  { label: "Dec", y: 164 }
		  ]
		}]
	  }

}
