$(document).ready(function(){
    $('#mycarousel').carousel({ interval : 1000}); 
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');  
        }
        else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    // modal showing and closing

    $('#reserveTable').click(function(){
        $('#reserveModal').modal('show');
    });
    $('.reserveClose').click(function(){
        $('#reserveModal').modal('hide');
    });
    $('#login').click(function(){
        $('#loginModal').modal('show');
    });
    $('.loginClose').click(function(){
        $('#loginModal').modal('hide');
    });
 });