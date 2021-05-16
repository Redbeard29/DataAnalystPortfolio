$(document).ready(function() {

    /* Navbar toggler animations */
    $('#button_container').click(function(){
        $('.icon').toggleClass('close');
        if($('.icon').hasClass('close')){
            $('#navigationOverlay').slideDown();
            //Disable scroll when navigationOverlay is down
            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
        }
        else{
            $('#navigationOverlay').slideUp('slow');
            //Reenable scroll when navigationOverlay is up
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        }
    });

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hidden_element').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},700);
                    
            }
      
        }); 

    });
    /* Scrolling to sections */

    //See my work button scroll 
    $("#see_my_work_button").click(function(){
        $('html, body').animate({
            scrollTop: $("#portfolio_section").offset().top}, 2000);
    });

    //View projects button scroll
    $("#view_projects_button").click(function(){
        $('html, body').animate({
            scrollTop: $("#portfolio_section").offset().top}, 2000);
    });

    //Let's connect button scroll
    $("#lets_connect_button").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact_section").offset().top}, 2000);
    });

    //About nav link scroll
    $("#about_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#about_section").offset().top}, 2000);
        //Hide navigationPage and close nav toggle
        $('#navigationOverlay').slideUp('slow');
        $('.icon').toggleClass('close');
        //Reenable scroll when navigationOverlay is up
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    });

    //Portfolio nav link scroll
    $("#portfolio_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#portfolio_section").offset().top}, 2000);
        //Hide navigationPage and close nav toggle
        $('#navigationOverlay').slideUp('slow');
        $('.icon').toggleClass('close');
        //Reenable scroll when navigationOverlay is up
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    });

    //Resume nav link scroll
    $("#resume_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#resume_section").offset().top}, 2000);
        //Hide navigationPage and close nav toggle
        $('#navigationOverlay').slideUp('slow');
        $('.icon').toggleClass('close');
        //Reenable scroll when navigationOverlay is up
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    });

    //Contact nav link scroll
    $("#contact_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact_section").offset().top}, 2000);
        //Hide navigationPage and close nav toggle
        $('#navigationOverlay').slideUp('slow');
        $('.icon').toggleClass('close');
        //Reenable scroll when navigationOverlay is up
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    });

    //Back to top scroll
    $("#back_to_top_button").click(function(){
        $('html, body').animate({
            scrollTop: $("#showcase").offset().top}, 1000);
    });

    /* Filtering by language using isotope */

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio_container h5').on("click", function(){

        $("#portfolio_container h5").removeClass("text-danger").addClass("text-white");
        $(this).addClass("text-danger");

        var language = $(this).attr('data-filter');
        $grid.isotope({
            filter: language
        });
    });

    return false;
});