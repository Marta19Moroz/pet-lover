(function ($) {
    "use strict";
    const adminEmail = 'morozmarta123@gmail.com';

    // Dropdown on mouse hover
    $(document).ready(function () {
        $('#sendMessageButton').on('click', (event) => {
            const name = $('#name').val();
            const email = $('#email').val();
            const subject = $('#subject').val();
            const message = $('#message').val();
            const mailTo = `mailto: ${adminEmail}?subject=${subject}&body=User Name: ${name} User Email: ${email} Message: ${message}`;
            
            alert("Підтвердіть Ваш вибір");
            $('#sendMessageButton').attr('href', mailTo);
        });

        $('#bookingFormSendButton').on('click', () => {
            const name = $('#bookingUserName').val();
            const email = $('#bookingUserEmail').val();
            const date = $('#bookingReservationDate').val();
            const time = $('#bookingReservationTime').val();
            const service = $('#bookingService').val();
            const mailTo = `mailto: ${adminEmail}?subject=Booking Info&body=User Name: ${name} User Email: ${email} Date: ${date} Time: ${time} Service Type: ${service}`;
            
            alert("Підтвердіть Ваш вибір");
            $('#bookingFormSendButton').attr('href', mailTo);
        });

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


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'HH:mm'
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: false,
        responsive: {
            0:{
                items:1,
                loop: true
            },
            576:{
                items:1,
                loop: true
            },
            768:{
                items:2,
                loop: true
            },
            992:{
                items:3,
                loop: true
            }
        }
    });

    //window.open('mailto:test@example.com?subject=subject&body=body');
    
})(jQuery);

