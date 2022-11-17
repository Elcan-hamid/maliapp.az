let lineChart=document.getElementById("lineChart").getContext("2d");
var myLineChart=new Chart(lineChart, {
	type: "line",
	bezierCurve: false,
    scaleShowVerticalLines: false,
	data: {
    	labels: ["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],
		datasets: [
			{
				label: "Gəlir",
	    		data: [48000,18000,15000,20000,40000,50000,49000,16000,12000,18000,22000,49500],
	    		fill: false,
	    		backgroundColor: "#24be92",
	    		borderColor: "#24be92",
	    		borderCapStyle: "butt",
	    		borderDash: [],
	    		borderDashOffset: 0.0,
	    		borderJoinStyle: "miter",
	    		pointBorderWidth: 0,
	    		pointRadius: 0,
	    		pointHitRadius: 10,
			},
			{
				label: "Xərc",
				data: [10000,35000,50000,45000,25000,8000,10000,18000,45000,50000,30000,20000],
				fill: false,
	    		backgroundColor: "#ff5853",
	    		borderColor: "#ff5853",
	    		borderCapStyle: "butt",
	    		borderDash: [],
	    		borderDashOffset: 0.0,
	    		borderJoinStyle: "miter",
	    		pointBorderWidth: 1,
	    		pointRadius: 1,
	    		pointHitRadius: 10
			},
			{
				label: "Mənfəət",
				data: [80000,35000,25000,20000,12000,26000,50000,52000,45000,22000,20000,12000],
				fill: false,
				backgroundColor: "#3db4ff",
	    		borderColor: "#3db4ff",
	    		borderCapStyle: "butt",
	    		borderDash: [],
	    		borderDashOffset: 0.0,
	    		borderJoinStyle: "miter",
	    		pointBorderWidth: 1,
	    		pointRadius: 1,
	    		pointHitRadius: 10
			}
		]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,	
		legend: {
    		display: false
    	},
    	elements: {
	        point:{
                radius: 0
            }
	    },
	    layout: {
	    	padding: {
		        top: 20
		    }
	    },
	    tooltips: {
	    	callbacks: {
	    		title: function(tooltipItems, data) {
	    			var date=new Date();
	    			var currentYear=date.getFullYear();
	    			return data.labels[tooltipItems[0].index]+" "+currentYear;
	    		},
	    		label: function(item, data) {
	    			var datasetValues = item.yLabel || "";
	    			var datasetLabel=data.datasets[item.datasetIndex].label || "";
    				return datasetLabel+":  ₼ "+datasetValues.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	    		}
	    	},
	    	mode: "label",
	    	borderWidth: 2,
	    	borderColor: "rgba(0,0,0,.1)",
	    	backgroundColor: "#fff",
	    	titleFontColor: "#09101a",
	    	bodyFontColor: "#09101a",
	    	displayColors: false,
	    	titleFontFamily: "Poppins",
	    	bodyFontFamily: "Poppins",
	    	bodySpacing: 4,
	    	titleMarginBottom: 12,
	    	bodyFontSize: 14,
	    	titleFontSize: 14,
	    	xPadding: 20,
	    	yPadding: 18,
	    },
    	scales: {
    		xAxes: [{
    			ticks: {
    				callback: function(value, index, values) {
	                    switch(value){
	                    	case "Yanvar":
	                    		return "Yan";
	                    	case "Fevral":
	                    		return "Fev";
	                    	case "Mart":
	                    		return "Mar";
	                    	case "Aprel":
	                    		return "Apr";
	                    	case "May":
	                    		return "May";
	                    	case "İyun":
	                    		return "İyun";
	                    	case "İyul":
	                    		return "İyul";
	                    	case "Avqust":
	                    		return "Avq";
	                    	case "Sentyabr":
	                    		return "Sent";
	                    	case "Oktyabr":
	                    		return "Okt";
	                    	case "Noyabr":
	                    		return "Noy";
	                    	case "Dekabr":
	                    		return "Dek";
	                    }
	                }
    			}
    		}],
    		yAxes: [{
            	type: 'logarithmic',
            	gridLines: {
	                color: "rgba(0, 0, 0, 0)"
	            },
    			ticks: {
		    		fontFamily: "Poppins",
                	min: 0,
                	max: 100000,
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                      return Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value);
                    }
                },
                afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
		            var minValue=Math.min(...chartObj.ticks)
		            var maxValue=Math.max(...chartObj.ticks)
		            var halfMaxValue=maxValue/2;
		            var oneInFourValue=maxValue/4;
		            var threeInFourValue=(maxValue)*3/4;
		            chartObj.ticks = [minValue,halfMaxValue,oneInFourValue,threeInFourValue,maxValue];
		        },
    		}]
    	}
	}
});

let barChart=document.getElementById("barChart").getContext("2d");
var myBarChart=new Chart(barChart, {
	type: "bar",
	data: {
		labels: ["1234532","1234532","1234532","1234532","1234532","1234532"],
		datasets: [
			{
				data: ["12800","23000","10000","30000","20000","4500"],
	    		fill: false,
				backgroundColor: "#24be92",
	    		borderColor: "#24be92",
	    		barPercentage: 0.5,
		        barThickness: 10,
		        maxBarThickness: 12,
		        minBarLength: 4
			}
		]
	},
	options: {
		responsive: true,
		legend: {
    		display: false
    	},
		cornerRadius: 20,
		tooltips: {
			enabled: true,
			displayColors: false,
			borderWidth: 2,
	    	borderColor: "rgba(0,0,0,.1)",
			backgroundColor: "#fff",
	    	titleFontColor: "#09101a",
	    	bodyFontColor: "#09101a",
	    	titleFontFamily: "Poppins",
	    	bodyFontFamily: "Poppins",
	    	titleFontSize: 14,
	    	bodyFontSize: 14,
	    	bodyFontStyle: 600,
	    	xPadding: 20,
	    	yPadding: 12,
	    	callbacks: {
	    		label: function(item, data){
	    			var datasetValues = item.yLabel || "";
			        return "₼ "+datasetValues.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	    		},
	    		title: () => null
	    	}
		},
    	scales: {
    		xAxes: [{
	            gridLines: {
	                color: "rgba(0, 0, 0, 0)",
	            }
	        }],
    		yAxes: [{
            	type: 'logarithmic',
    			ticks: {
		    		fontFamily: "Poppins",
                	min: 0,
                	max: 50000,
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                     	return Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value);
                    }
                },
                afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
		            var minValue=Math.min(...chartObj.ticks)
		            var maxValue=Math.max(...chartObj.ticks)
		            var halfMaxValue=maxValue/2;
		            var oneInFourValue=maxValue/4;
		            var threeInFourValue=(maxValue)*3/4;
		            chartObj.ticks = [minValue,halfMaxValue,oneInFourValue,threeInFourValue,maxValue];
		        },
    		}]
    	}
	}
});

Chart.defaults.RoundedDoughnut    = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function(ease) {
        var ctx           = this.chart.ctx;
        var easingDecimal = ease || 1;
        var arcs          = this.getMeta().data;
        Chart.helpers.each(arcs, function(arc, i) {
            arc.transition(easingDecimal).draw();

            var pArc   = arcs[i === 0 ? arcs.length - 1 : i - 1];
            var pColor = pArc._view.backgroundColor;

            var vm         = arc._view;
            var radius     = (vm.outerRadius + vm.innerRadius) / 2;
            var thickness  = (vm.outerRadius - vm.innerRadius) / 2;
            var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
            var angle      = Math.PI - vm.endAngle - Math.PI / 2;

            ctx.save();
            ctx.translate(vm.x, vm.y);

            ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = vm.backgroundColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.restore();
        });
    }
});

let doughnutChart=document.getElementById("doughnutChart").getContext("2d");
var myDoughnutChart=new Chart(doughnutChart, {
	type: "RoundedDoughnut",
	data: {
		datasets: [
			{
				data: [10000, 15000, 5000, 8000],
				backgroundColor: [
					"#aabfc6",
					"#24be92",
					"#e1eef2",
					"#d3e2e6"
				],
				hoverBackgroundColor: [
					"#24be92",
					"#24be92",
					"#24be92",
					"#24be92"
				],
				borderWidth: 0
			}
		]
	},
	options: {
		responsive: true,
		legend: {
    		display: false
    	},
    	cutoutPercentage: 80,
    	layout:{
		    padding: 40
		},
		tooltips: {
	    	displayColors: false,
	    	borderWidth: 2,
	    	borderColor: "transparent",
			backgroundColor: "transparent",
			titleAlign: "center",
            bodyAlign: "center",
	    	titleFontColor: "#09101a",
	    	titleFontSize: 14,
	    	bodyFontSize: 14,
	    	bodyFontStyle: 600,
	    	bodyFontColor: "transparent",
	    	titleFontFamily: "Poppins",
	    	bodyFontFamily: "Poppins",
	    	xPadding: 20,
	    	yPadding: 12,
	    	xAlign: "left",
	    	callbacks: {
	    		label: function(item,data){
	    			let list = $('#scrollbar1').find('a');
	    			for (let i = 0; i < list.length; i++) {
		              $('#scrollbar1').find('a').get(i).classList.remove("active-list");
		            }
		            $('#scrollbar1').find('a').get(item.index).classList.add('active-list');

	    			var datasetValues = data.datasets[0].data[item.index] || "";
			        return "₼ "+datasetValues.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	    		},
	    	}
		},
	},

});

