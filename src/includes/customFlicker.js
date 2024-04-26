jQuery(document).ready(function() {
    $('.flick').each(function() {
        (function(flicker,org){
        window.setInterval(function() {
            var tmrID = window.setInterval(function() {
                var s = String.fromCharCode(33+Math.random()*80);
                flicker.empty().append(s);
            },25);
            window.setTimeout(function(){
                window.clearInterval(tmrID);
                flicker.empty().append(org);
//                $('#status').append(tmrID);
            },50+Math.random()*200);

        }, 2000+Math.random()*75000);
        })($(this),$(this).text());
        
    });
});


