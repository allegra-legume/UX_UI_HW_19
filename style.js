$(document).ready(function() {
  $("#mobileMenu").click(function() {
      if ($("#mobileSideBar").hasClass("is-active")) {
          $("#mobileSideBar").removeClass("is-active");
      } else {
          $("#mobileSideBar").addClass("is-active");
      }
  });
});