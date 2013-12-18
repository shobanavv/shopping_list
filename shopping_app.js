$(document).ready(function(){
    var getItem = [];
    var newItem;
    var shoppy;
    var remove;
    var removeInstructions;

$("#listItem").focus();

shoppy = function() {
    newItem = $("#listItem").val();
   
    if(newItem != " ") {
    getItem.push(newItem);
    $("#displayItem").append('<li>' + ' <input class = "checkItem" type = "checkbox" > ' +  newItem + '</li>'); 
    } else {
        return;
    }

    $("#listItem").val(""); 
    $("#listItem").focus();
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

/* if checkbox gets checked. */
/*$("#checkItem").click(function() { */
if($("checkItem :checked" )) {
    $(this).css("opacity", ".5");
}
/*});*/

/* strikeout items purchased. */
$("li input.checkItem").change(function() {
    alert("checkbox clicked");
    $(this).toggleclass("strike");
});

/* Clear checked items from list.*/
$("#clearButton").submit(function() {
    $("checkItem input:checked").parent().remove();     
});

/* Doc ends.*/
});

