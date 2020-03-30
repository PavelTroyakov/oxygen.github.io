
    $(document).ready(function () {
        $('#bar1').barfiller({ barColor: '#1D1D1D;',duration:'5000',tooltip:'false'});
        $('#bar2').barfiller({ barColor: '#1D1D1D;', duration: '5000', tooltip: 'false' });
        $('#bar3').barfiller({ barColor: '#1D1D1D;', duration: '5000', tooltip: 'false' });
        
    });


    $(".gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    });


$(function () {

    $('.slider-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autospeed: 1000
        

       


    });
});