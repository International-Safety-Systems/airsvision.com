$(document).ready(function () {
    initializeCookieBanner();
});

function showCookieBanner() {
    document.getElementById("cookieBanner").style.display = "block";
    document.getElementById("main").style.paddingBottom = $("footer").height() + "px";
    document.getElementById("footer").classList.add("cookies");
}

function hideCookieBanner() {
    document.getElementById("cookieBanner").style.display = "none";
}

function initializeCookieBanner() {
    window.acceptCookies = acceptCookies;
    if (isCookieAccepted())
    {
        hideCookieBanner();
        // Google Analytics Start
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
    
        gtag('config', 'G-NTK9EXC9NB');
        // Google Analytics End
        // Geo Redirection Start
        geoLocate();
        // Geo Redirection End


    } else {
        showCookieBanner();
    }
}

function acceptCookies()
{
    localStorage.setItem("vision_isCookieAccepted", true);
    localStorage.setItem("vision_CookiesAcceptedDate", Date.now());
    hideCookieBanner();
}

function isCookieAccepted()
{
    let isCookieAccepted = localStorage.getItem("vision_isCookieAccepted");
    if (isCookieAccepted === null || !isCookieAccepted) {
        return false
    }
    else if (isCookieAccepted) {
        return true;
    }
}


function geoLocate()
{
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
}