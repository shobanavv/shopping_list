$(document).ready(function(){
    var getItem = [];
    var newItem;
    var shoppy;
    var remove;
    var removeInstructions;
    var line_through;

$("#listItem").focus();

shoppy = function() {
    newItem = $("#listItem").val();
   
    if(typeof(newItem) == 'string' && newItem.length > 0) {
    $("#displayItem").removeClass("strike");
    $("#message").val("");
    $("#listItem").removeClass('invalid');
    getItem.push(newItem);
    $("#displayItem").append('<li>' + ' <input class = "checkItem" type = "checkbox" >' +  newItem + '</li>'); 
    } else {
        $("#message").val("Hey! Forgot to type something?.");
        $("#listItem").addClass('invalid');
        return;
    }

    $("#listItem").val(""); 
    $("#listItem").focus();
    line_through();
};

/* Adding itmes by pressing Enter key. */
$("#listItem").keydown(function(e){
    if (e.keyCode === 13) {
        shoppy();
    }
});

/* Adding itmes by clicking Add button. */
$("#addButton").click(function() {
    shoppy();
});

/* strikeout items purchased. */
line_through = function() {
    $("input.checkItem").change(function() {
      if($(this).is(':checked')) {
            $(this).parent().addClass("strike");
        } else {
            $(this).parent().removeClass("strike");
        }
    });
};
/* Clear checked items from list.*/
$("#clearButton").click(function() {
    if($(".checkItem:checked").length > 0) {
        $(".checkItem:checked").parent().remove();
    }
    else {
        $("#message").val("Oops! you have to select an item to clear from this list.");
        return;
     }   
});
$("#checkAll").click(function() {
    $("#displayItem").addClass("strike");
    $(".checkItem").prop('checked',true);   
    
});
$("#uncheckAll").click(function(){
    $("#displayItem").removeClass("strike");
    $(".checkItem").prop('checked',false); 
});

/* Doc ends.*/
});

