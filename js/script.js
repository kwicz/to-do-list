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
    $("#not-done").append("<li><input id='" + newItem.id + "' type='checkbox'> " + newItem.task) + "</li>";

    $("form").val("");

  });
  
  $("#not-done").on("click", "input[type='checkbox']", function() {
    var id = parseInt(event.target.id);
    console.log(id);
    var change = itemList.toDoItems[id].done;
    change = true;
    $(this).parent().detach();
    $("#done").append($(this).parent());
  });
  
  $("#done").on("click", "input[type='checkbox']", function() {
    var change = itemList.toDoItems[id].done;
    change = false;
    $(this).parent().detach();
    $("#not-done").append($(this).parent());
    $(this).parent().appendTo($("#not-done"));
    });
});