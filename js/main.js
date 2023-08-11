const STATIC_STRING = {
    "ADDR_STRING": "3rd Floor, Fortaleza Complex, Central Ave, above NM Medical, Prathamesh Society, Kalyani Nagar, Pune",
    "TELE_STRING": "1234567890",
    "EMAIL_STRING": "hr@arsmedia.co.in",
    "COMP_STRING": "ARS Media and Marketing Pvt."
}
const fieldsList = "c_addr,c_tele,c_email,c_comp"


const addDynamicText = (fieldname , field ) => {
    let elems  = document.getElementsByClassName(fieldname) 
    for(elem of elems){
      elem.textContent = STATIC_STRING[field];
    }
    }


(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        fieldsList.split(',').forEach( elem  => {
            addDynamicText(elem, elem.replace("c_","").toUpperCase()+"_STRING")
        })

        $("#sendHireEmail").on('click', function(){
            let name =  $("#name").val() 
            let email = $("#email").val()
            let phn  = $("#phn").val()
            let edu = $("#edu").val()
            let wswhu  = $("#wswhu").val();

            let email_string = `?subject=Candidate Notification [${name}]&body=name : ${name} \nemail : ${email} \nphone : ${phn} \neducation : ${edu} \ncover letter : ${wswhu} \n `
            console.log(email_string)
            location.href="mailto:hr@arsmedia.co.in"+email_string
        })
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

