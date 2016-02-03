$(document).ready(function(){

    var divider = '<div class="flex row">' +
        '<div style="border-bottom: 15px solid #fad280" class="box"></div>' +
        '<div style="border-bottom: 15px solid #bfe79e" class="box"></div>' +
        '<div style="border-bottom: 15px solid #fc9f66" class="box"></div>' +
        '<div style="border-bottom: 15px solid #48d1cc" class="box"></div>' +
        '</div>';

    $('div.divider').append(divider);

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