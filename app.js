var inpval = document.getElementById("inp");
var listval = document.getElementById("list");

function delRow(btn){
    btn.parentNode.remove();
}
function editRow(btn){
    btn.parentNode.firstChild.nodeValue = prompt();
}

function addTask(){
    var li = document.createElement("li");
    var liText = document.createTextNode(inpval.value);
    li.appendChild(liText);

    var del = document.createElement("BUTTON");
    var delText = document.createTextNode("Delete");
    del.appendChild(delText);
    del.setAttribute("class","btn");
    del.setAttribute("onclick","delRow(this)");
    li.appendChild(del);

    listval.appendChild(li);

    var edit = document.createElement("BUTTON");
    var EditText = document.createTextNode("Edit");
    edit.setAttribute("onclick","editRow(this)")
    edit.appendChild(EditText);
    li.appendChild(edit);

     inpval.value = " ";
     

}
function DelAll(){
    listval.innerHTML = " ";
}