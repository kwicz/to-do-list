// Business on top
function ItemList() {
  this.currentId = 0;
  this.toDoItems = [];
};

ItemList.prototype.addItem = function(item) {
  item.id = this.currentId;
  this.toDoItems.push(item);
  this.currentId++;
};

function toDoItem(task, done){
  this.task = task;
  this.done = done;
};

// User on the bottom
$(document).ready(function(){
  var itemList = new ItemList();

  $("form").submit(function(event) {
    event.preventDefault();
    var newItem = new toDoItem($("#input").val(), false);
    itemList.addItem(newItem);
    $("#not-done").append("<input id='check' type='checkbox'> " + newItem.task);
    $("form").val("");
  });

  $("#not-done").on("click", "input[type='checkbox']", function() {
    if($(this).is(":checked")) {
      var done = true;
      console.log(typeof done);
      console.log($(this).parent());
      $(this).parent().detach();
      $("#done").append($(this).parent());
    } else {
      var done = false;
      console.log(typeof done);

      console.log("this: " + $(this).val());
      $("#not-done").append($(this).parent().val());
      $(this).parent().appendTo($("#not-done"));
      $(this).parent().detach();
    }
     
  });
});