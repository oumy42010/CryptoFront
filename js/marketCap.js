var Header = document.querySelector('Header');
	var requestURLglobal = 'https://api.coinmarketcap.com/v1/global/';
	var requestGlobal = new XMLHttpRequest();
	requestGlobal.open('GET', requestURLglobal);
	requestGlobal.responseType = 'json';
	requestGlobal.send();

requestGlobal.onload = function() {
	var marketCap = requestGlobal.response;
	populateHeader(marketCap);
}

function populateHeader(jsonObj) {
	var date = new Date();
	var n = date.toDateString();
	var time = date.toLocaleTimeString();

	var myTimeElt = document.createElement('p');
	myTimeElt.textContent = n + ' ' + time;
	myTimeElt.style.color = "#375D81"; 
	document.getElementById("heure").appendChild(myTimeElt);

	var myH1Elt = document.createElement('h3');
	myH1Elt.innerHTML = "<p style='color:#B09F91;'> Market cap : <a href='https://coinmarketcap.com/charts' style='text-decoration: none; color:#375D81;'>$" + jsonObj['total_market_cap_usd'].toLocaleString() + "</a></p>";
    document.getElementById("marketCap").appendChild(myH1Elt);
	
	var btcVolElt = document.createElement('h6');
	btcVolElt.style.color = "#375D81";
	btcVolElt.textContent = '24h Vol: $' + jsonObj['total_24h_volume_usd'].toLocaleString();
	document.getElementById("btcDominance").appendChild(btcVolElt); 

	var myBtcDominanceElt = document.createElement('h5');
	myBtcDominanceElt.style.color = "#375D81";
	myBtcDominanceElt.textContent = ' BTC Dominance: ' + jsonObj['bitcoin_percentage_of_market_cap'] + '%';
	document.getElementById("btcDominance").appendChild(myBtcDominanceElt);
	
	
}
