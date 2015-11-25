
$(document).ready(function() {
  $(".person-picture").click(function() {
    window.location.href = $(this).attr("data-url");
  })
})