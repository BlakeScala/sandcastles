$(function() {
  $("#button1").click(function() {
    $(".content2").show();
  });
});
$(function() {
  $("#button2").click(function() {
    $(".content3").show();
  });
});
$(function() {
  $("#button3").click(function() {
    $(".content4").show();
  });
});
$(function() {
  $("#button4").click(function() {
    $(".content2, .content3, .content4").hide();
  });
});
