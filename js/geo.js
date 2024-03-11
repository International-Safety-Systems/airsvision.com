$(document).ready(function() {
    $.get("https://vpnapi.io/api/?key=7c98a46fba024c3e946f412e2d1c1004", function(data){
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
});
