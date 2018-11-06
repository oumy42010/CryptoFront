function lastValues(id, url) {

		var jsonData = $.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
		}).done(function (results) {
			var valuesUsdElmt = document.getElementById(id);
			valuesUsdElmt.innerHTML = "Last value at " +
					 results['timestamp'] + " : <br />" +
					 results['usd'] + " USD <br />" + 
					 results['btc'] + " BTC " ;

		});
	} // end of lastValues()

	function drawLineChart(canvasID, url) {

		var jsonData = $.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
		}).done(function (results) {
			// BTC
        		results['datasets'][0]['borderColor'] = "rgba(3, 88,106, 0.7)";
        		results['datasets'][0]['backgroundColor'] = "rgba(3, 88, 106, 0.3)";
        		results['datasets'][0]['pointBackgroundColor'] = "rgba(3, 88, 106, 0.3)";
        		results['datasets'][0]['pointBorderWidth'] = 3;
        		results['datasets'][0]['borderWidth'] = 3;
			//USD
        		results['datasets'][1]['borderColor'] = "rgba(38, 185, 154, 0.7)";
        		results['datasets'][1]['backgroundColor'] = "rgba(38, 185, 154, 0.3)";
        		results['datasets'][1]['pointBorderWidth'] = 3;
        		results['datasets'][1]['borderWidth'] = 3;

			// Get the context of the canvas element we want to select
			var ctx = document.getElementById(canvasID).getContext("2d");

			Chart.defaults.global.elements.point.radius = 1;
			Chart.defaults.global.hover.mode = 'nearest';
			Chart.defaults.global.hover.intersect = false;
			Chart.defaults.global.tooltips.mode = 'index';
			Chart.defaults.global.tooltips.intersect = false;
			// Instantiate a new chart
			var myLineChart = new Chart(ctx, {
				type: 'line',
				data: results,
				options: {
					responsive: true,
					elements: {
						line: {
							tension: 0, // disables bezier curves
						}
					},
					showLines: true,
					scales: {
						yAxes: [{
							id: 'BTC',
							type: 'linear',
							position: 'left',
							display: false,
							//ticks: {
							//	beginAtZero: true
							//},	
							scaleLabel: {
								display: false,
								labelString: 'BTC'
							}
						}, {
							id: 'USD',
							type: 'linear',
							position: 'right',
							display: false,
							//ticks: {
							//	beginAtZero: true
							//},	
							scaleLabel: {
								display: false,
								labelString: 'USD ($)'
							}
						}]
					}
				} 
			});

		});
	} // end of drawLineChart()

	// const URL_CRYPTO_BACKEND='http://localhost:5000';
	const URL_CRYPTO_BACKEND='https://terredumili.eu/cryptoback';
	lastValues('last', URL_CRYPTO_BACKEND + '/last/');
	drawLineChart( 'last24h', URL_CRYPTO_BACKEND + '/24h/');
	drawLineChart( 'last7d' , URL_CRYPTO_BACKEND + '/7d/' );
	drawLineChart( 'last1m' , URL_CRYPTO_BACKEND + '/1m/' );
	drawLineChart( 'alltime', URL_CRYPTO_BACKEND + '/all/');
