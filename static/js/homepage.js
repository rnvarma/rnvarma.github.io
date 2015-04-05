


function load_hover_handlers() {
  $(".main-img").hover(function() {
    // on hover in
    $(".sub-name").show("slow");
  }, function() {
    // on hover out
  })
  $(".main-name").hover(function() {
    // on hover in
    $(".sub-name").show("slow");
  }, function() {
    // on hover out
  })

  $(".sub-name").hover(function() {
    // on hover
    $(this).css("color", "white");
  }, function() {
    // off hover
    $(this).css("color", "#333");
  })
}

function load_menu_click_handlers() {
  $(".sub-name").click(function() {
    var menu_item = $(this).attr("data-menu");
    $('html, body').animate({
      scrollTop: $("." + menu_item + "-row").offset().top
    }, 1000);
  })
}

function load_hacker_click_handlers() {
  $(".toc-item").click(function () {
    var name = $(this).attr("data-content");
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    $(".not-hidden").addClass("hidden").removeClass("not-hidden");
    $("." + name).addClass("not-hidden").removeClass("hidden");
  })
}

$(document).ready(function() {
  load_hover_handlers();
  load_menu_click_handlers();
  load_hacker_click_handlers();
})