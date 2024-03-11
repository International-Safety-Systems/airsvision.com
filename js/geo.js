//https://vpnapi.io/api/8.8.8.8?key=7c98a46fba024c3e946f412e2d1c1004
/*
var xhr = new XMLHttpRequest();
var url = "https://vpnapi.io/api/8.8.8.8?key=7c98a46fba024c3e946f412e2d1c1004";
xhr.open("GET", url, true);

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.location.country);
    }
};
xhr.send();

https://api.myip.com/

*/
$(document).ready(function() {
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(user) {
        user = user.trim().split('\n').reduce(function(obj, pair) {
          pair = pair.split('=');
          return obj[pair[0]] = pair[1], obj;
        }, {});
        if (user)
        {
            $.get("https://vpnapi.io/api/" + user.ip + "?key=7c98a46fba024c3e946f412e2d1c1004", function(data){
                console.log( data.location.continent );    
                if(data.location.continent)
                {
                    switch(data.location.continent)
                    {
                        case 'North America':
                            
                            $("#americaRegion").modal('show');
                            break;
                    }
                }
          });
        }
      });
});
