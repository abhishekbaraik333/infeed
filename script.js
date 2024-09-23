$(".list li .orange").click(function () {
  $(".list li .plus-minus-toggle-yellow").addClass("collapsed");
  $(".list li .plus-minus-toggle-teal").addClass("collapsed");
  $(".list li .plus-minus-toggle-blue").addClass("collapsed");
  $(".list li .yellow").parent().removeClass("active");
  $(".list li .teal").parent().removeClass("active");
  $(".list li .blue").parent().removeClass("active");
  setTimeout(function () {
    $(" .list li .orange div").toggleClass("collapsed");
    $(".list li .orange").parent().toggleClass("active");
  }, 250);
});

$(".list li .teal").click(function () {
  $(".list li .plus-minus-toggle-yellow").addClass("collapsed");
  $(".list li .plus-minus-toggle-orange").addClass("collapsed");
  $(".list li .plus-minus-toggle-blue").addClass("collapsed");
  $(".list li .yellow").parent().removeClass("active");
  $(".list li .orange").parent().removeClass("active");
  $(".list li .blue").parent().removeClass("active");
  setTimeout(function () {
    $(" .list li .teal div").toggleClass("collapsed");
    $(".list li .teal").parent().toggleClass("active");
  }, 250);
});

$(".list li .yellow").click(function () {
  $(".list li .plus-minus-toggle-orange").addClass("collapsed");
  $(".list li .plus-minus-toggle-teal").addClass("collapsed");
  $(".list li .plus-minus-toggle-blue").addClass("collapsed");
  $(".list li .orange").parent().removeClass("active");
  $(".list li .teal").parent().removeClass("active");
  $(".list li .blue").parent().removeClass("active");
  setTimeout(function () {
    $(" .list li .yellow div").toggleClass("collapsed");
    $(".list li .yellow").parent().toggleClass("active");
  }, 250);
});

$(".list li .blue").click(function () {
  $(".list li .orange").parent().removeClass("active");
  $(".list li .teal").parent().removeClass("active");
  $(".list li .yellow").parent().removeClass("active");
  $(".list li .plus-minus-toggle-yellow").addClass("collapsed");
  $(".list li .plus-minus-toggle-teal").addClass("collapsed");
  $(".list li .plus-minus-toggle-orange").addClass("collapsed");
  setTimeout(function () {
    $(" .list li .blue div").toggleClass("collapsed");
    $(".list li .blue").parent().toggleClass("active");
  }, 250);
});
