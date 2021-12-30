$(document).ready(function(){
    $('a[href*="#hierarchy"]').click(function(){
        $($(this).attr("href")).effect("highlight", {color: "#FFC300"}, 800);
    });
    $('a[href*="#table"]').click(function(){
        $($(this).attr("href")).effect("highlight", {color: "#FFC300"}, 800);
    });
});
