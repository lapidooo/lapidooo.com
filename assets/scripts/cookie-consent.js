// Simple Cookie Consent

var cookieNoticeHtml = document.createElement('div');
cookieNoticeHtml.innerHTML = '<span>We would like to use third party cookies and scripts to improve the functionality of this website.</span><a id="cookie-notice-accept" class="cookie-notice-accept btn btn-primary btn-sm">Approve</a><a id="cookie-notice-moreinfo" class="cookie-notice-moreinfo btn btn-primary btn-sm">More Info</a>';
cookieNoticeHtml.id = 'cookie-notice';
cookieNoticeHtml.className = 'cookie-notice';

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.appendChild(cookieNoticeHtml);

    function createCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    
    function eraseCookie(name) {
        createCookie(name,"",-1);
    }
    
    if(readCookie('cookie-notice-dismissed-accept')=='true') {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', '{{ site.google_analytics }}', 'auto');
        ga('send', 'pageview');
    }
    else {
        document.getElementById('cookie-notice').style.display = 'block';
    }
    
    document.getElementById('cookie-notice-accept').addEventListener("click",function() {
        createCookie('cookie-notice-dismissed-accept','true',31);
        document.getElementById('cookie-notice').style.display = 'none';
        location.reload();
    });
});