$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        // Toggle the 'cross-icon' class as before
        $('.navbar-toggler-icon').toggleClass('cross-icon');

        // Disable the button
        $(this).prop('disabled', true);

        // Set a timeout to re-enable the button after 2 seconds
        setTimeout(() => {
            $(this).prop('disabled', false);
        }, 500);
    });
});
