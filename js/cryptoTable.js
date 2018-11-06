
  var myTokens = [ 'BTC', 'ETH',  'BCH', 'LTC', 'XRP', 'XLM', 'ADA', 'USDT', 'EOS', 'XMR', 'TRX', 'MIOTA', 'DASH', 'BNB', 'NEO', 'ETC', 'XEM', 'XTZ', 'VET', 'ZEC', 'DOGE', 'ZRX', 'MKR', 'BTG', 'OMG', 'ONT', 'QTUM', 'DCR', 'LSK', 'AE', 'NANO', 'BTS', 'ZIL', 'BCD', 'ICX', 'BCN', 'DGB', 'SC', 'STEEM', 'XVG', 'BAT', 'WAVES', 'NPXS', 'BTM', 'ETP', 'ETN', 'TUSD', 'HOT', 'KMD', 'GNT', 'STRAT', 'REP', 'REP', 'LINK', 'SNt', 'PPT', 'WTC', 'CNX', 'ARDR', 'WAN', 'AION', 'KCS', 'IOST', 'MITH', 'CMT', 'RDD', 'XET', 'AOA', 'GXS', 'MAID', 'LRC', 'DGD', 'DGTX', 'ELF', 'HC', 'ARK', 'HT', 'DCN', 'QASH', 'MOAC', 'LOOM', 'FUN', 'MONA', 'BNT', 'NAS', 'MANA', 'PIVX', 'DROP', 'ZEN', 'POWR', 'MCO', 'THETA', 'PAY', 'DAI', 'WAX', 'RHOC', 'NXT', 'OCN', 'XZC', 'POLY', 'KNC', 'RVN', 'QKC', 'NOAH', 'MGO', 'XIN', 'PAX', 'GAS', 'SYS', 'BTCP', 'SALT' ];
  var section = document.querySelector('section');
  var requestURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=25';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var tickers = request.response; 
    showTickersTable(tickers);
  }

  function showTickersTable(tickers) {
    var table = document.createElement('table');
    table.setAttribute('border','0');
    table.setAttribute('width','100%');

    var row = table.insertRow(0);
    var th_symbol = document.createElement('th');
    var th_name = document.createElement('th');
    var th_price = document.createElement('th');
    var th_1h = document.createElement('th');
    var th_24h = document.createElement('th');
    var th_7d = document.createElement('th');
    th_symbol.innerHTML = "Symbol";
    th_name.innerHTML = "Name";
    th_price.innerHTML = "Price";
    th_1h.innerHTML = "% 1h";
    th_24h.innerHTML = "% 24h";
    th_7d.innerHTML = "% 7d";
    row.appendChild(th_symbol);
    row.appendChild(th_name);
    row.appendChild(th_price);
    row.appendChild(th_1h);
    row.appendChild(th_24h);
    row.appendChild(th_7d);

    for (var i = 0; i < tickers.length; i++) {

	     if (myTokens.includes(tickers[i].symbol) != true) continue; 

	     var row = document.createElement('tr');
       var ct_symbol= document.createElement('td');
	     var ct_name= document.createElement('td');
	     var ct_price = document.createElement('td');
	     var ct_1h= document.createElement('td');
	     var ct_24h= document.createElement('td');
	     var ct_7d= document.createElement('td');
	     
	     var dt_symbol = document.createTextNode(tickers[i].symbol);
       var dt_name = document.createTextNode(tickers[i].name);
	     var dt_price = document.createTextNode('$ ' + Math.round(tickers[i].price_usd*10000)/10000);
	     
	     var val_1h = tickers[i].percent_change_1h;
	     var val_24h = tickers[i].percent_change_24h;
 	     var val_7d = tickers[i].percent_change_7d;
	     
	     var dt_1h = document.createTextNode(val_1h) ;
	     var dt_24h = document.createTextNode(val_24h);
	     var dt_7d = document.createTextNode(val_7d);

	     ct_symbol.appendChild(dt_symbol);
       ct_name.appendChild(dt_name);
	     ct_price.appendChild(dt_price);


	     ct_1h.style.color = val_1h >= 0 ? 'green' : ' #c94c4c';
	     ct_24h.style.color = val_24h >= 0 ? 'green' : ' #c94c4c';
	     ct_7d.style.color = val_7d >= 0 ? 'green' : ' #c94c4c';
	     
	     ct_1h.appendChild(dt_1h);
	     ct_24h.appendChild(dt_24h);
	     ct_7d.appendChild(dt_7d);

	     row.appendChild(ct_symbol);
       row.appendChild(ct_name);
	     row.appendChild(ct_price);
	     row.appendChild(ct_1h);
	     row.appendChild(ct_24h);
	     row.appendChild(ct_7d);
	     table.appendChild(row);
    }
    document.getElementById("tickersTable").appendChild(table);
    
  }


