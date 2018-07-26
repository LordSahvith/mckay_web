$(document).ready(function() {
    
    var navLinks = $('#nav-items div a'),
        logoBtn = $('#home-btn');
   
    // scroll to section upon btn click
    navLinks.click(function() {
        var self = $(this),
            targetLink = "." + self.attr('class'),
            targetSection = "#" + self.attr('id').slice(0, self.attr('id').length - 4);

        $("html, body").animate({scrollTop: $(targetSection).offset().top - 65}, 1500);
    });
    
    logoBtn.click(function() {
        var self = $(this),
            targetLink = "." + self.attr('class'),
            targetSection = "#" + self.attr('id').slice(0, self.attr('id').length - 4);

        $("html, body").animate({scrollTop: $(targetSection).offset().top - 0}, 1500); 
    });
    
});