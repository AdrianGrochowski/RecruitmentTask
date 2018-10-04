$(function() {

    $('.navbar-toggler').on('click', function() {
        $('#nav-icon1').toggleClass('open');
    });

    $('.navbar-nav a').on("click", function() {
        $('#nav-icon1').removeClass('open');
    });

    $('.navbar-nav .dropdown-toggle').on("click", function() {

    });

    $(document).click(function(e) {
        if ($(e.target).closest('.navbar').length === 0) {
            $('#nav-icon1').removeClass('open');
        }
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.panel-body')) {
            $('.collapse').collapse('hide');
        }
    });

    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

})
