$(function () {
    
    let producciones = $('#enlace-producciones').offset().top,
        about = $('#enlace-about').offset().top,
        trabajo = $('#enlace-trabajo').offset().top,
        contacto = $('#enlace-contacto').offset().top;

    if (screen.width<=700) {

        $('#enlace-about').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: about + 3400
            }, 600);
        });

        $('#enlace-trabajo').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: trabajo + 3910
            }, 600);
        });

        $('#enlace-contacto').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto + 32760
            }, 600);
        });

    }else{

        $('#enlace-inicio').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        });
    
        $('#enlace-producciones').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 500
            }, 600);
        });
    
        $('#enlace-about').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 1530
            }, 600);
        });
    
        $('#enlace-trabajo').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 2020
            }, 600);
        });
    
        $('#enlace-contacto').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 3500
            }, 600);
        });
    };
 
});