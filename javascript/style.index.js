$(document).ready(function() {
  $("#mobileMenu").click(function() {
    if ($("#mobileSideBar").hasClass("is-active")) {
          $("#mobileSideBar").removeClass("is-active").animate({width: "0%"}, "fast", "linear");
          $("#mobileOverlay").removeClass("is-active");
          $("i").addClass("fa-bars");
          $("i").removeClass("fa-xmark");
    } else {
        $("#mobileSideBar").addClass("is-active").animate({width: "60%"}, "fast", "linear");
        $("#mobileOverlay").addClass("is-active");
        $("i").removeClass("fa-bars");
        $("i").addClass("fa-xmark");
    };
  });
}); 