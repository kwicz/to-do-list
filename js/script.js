// Business on top
function ToDoItemList() {
  this.currentId = 0;
  this.toDoItems = [];
};

ToDoItemList.prototype.addItem = function(item) {
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
  var itemList = new itemList();

  
});