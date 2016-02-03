$(document).ready(function(){
    $('a.dropdown-toggle').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('on');
        });
    });

    $('section.cont').click(function(){
        $('.on').each(function(){
            $(this).removeClass('on')
        })
    })


});