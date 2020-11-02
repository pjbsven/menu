
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    var menu = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="mainMenu">';

    var saladItems = menu.menu.salads;
    console.log({saladItems});

    var x = Object.keys(saladItems[0]);
    console.log({x});

    var v = Object.values(saladItems[0]);
    console.log({v});

    var final = [];

    function toObject(names, values) {
      var result = {};
      for (var i = 0; i < names.length; i++) {
        result[names[i]] = values[i];
      }
      final.push(result);
      console.log({final});
      return result;
    }


    for (var i = 0; i < v.length; i++) {
      var str = v[i];
      console.log({str});
      var strSplit = str.split('",');
      key = ["name", "description", "price"]
      var merged = toObject ( key, strSplit );
      console.log({merged});
    }

    for (var i=0; i<final.length; i += 1) {
      statusHTML += '<li><img alt="img"><h5>';
      statusHTML += final[i].name;
      statusHTML += '</h5><h4>|</h4><h6>';
      statusHTML += final[i].price;
      statusHTML += '</h6><p>';
      statusHTML += final[i].description;
      statusHTML += '</p></li>';
    }

    statusHTML += '</ul>';
    document.getElementById('menuItems').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'menu0.json');
xhr.send();
