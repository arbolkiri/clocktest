window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?
    })
    var h1s = [].slice.call(document.querySelectorAll('h1'));


    setInterval(function() {
        var d = new Date();

        var parts = [
            d.getHours(),
            d.getMinutes(),
            d.getSeconds()
        ]


        function displayTime(){

           var h,m,s,time, color; 
            h = d.getHours();
            m = d.getMinutes();
            s = d.getSeconds();


            if(h<10){h = '0' + h};
            if(m<10){m = '0' + m};
            if(s<10){s = '0' + s};  

        time = h + ':'+ m +':'+ s;
        // color = "#"+h + m + s;
        
        // setTimeout(displayTime, 1000);  
        var r, g, b;
        r = Math.round((h/23)*255)
        g = Math.round((m/59)*255)
        b = Math.round((s/59)*255)

        color = r + g + b;
        document.body.style.background = "rgb("+ r + ',' + g + ',' + b + ")";
        document.getElementById("hex").innerHTML = time;
        }

        displayTime();

        // h1s.forEach(function(el) {
        //     el.innerHTML = parts.join(":")
        // })
    }, 1 * 1000)

}
