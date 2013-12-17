$(document).ready(function(){
    var get_item = [];
    var new_item;
    var shoppy;
    var remove;

$("#list_item").focus();


shoppy = function() {
    new_item = $("#list_item").val();
    get_item.push(new_item);
    $("#display_items").append("<li>" + "<button>Del</button>" + new_item + "</li>");
    $("#list_item").val(""); 
    $("#list_item").focus();
};

$('#list_item').keydown(function(e){
      if (e.keyCode === 13) {
        shoppy();
      }
});

$("#add_button").click(function() {
    shoppy();
});

$("#display_items").click(function() {
(this).remove();
});


});