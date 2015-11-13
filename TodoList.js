//variable name settings//
var todo = document.getElementById('todolist'),
  form = document.getElementById('myform'),
  field = document.getElementById('newitem'),
  dropdown = document.getElementById("dropdown");



form.addEventListener('submit', function(evt) {
  var text = field.value;

//to do list drop down options and function coding://

//bold//
  if (dropdown.value == "bold") {
    todo.innerHTML += '<div style= "font-weight: bold;">' + text + '</div>';
  }

//color: red//
  if (dropdown.value == "red") {
    todo.innerHTML += '<div style= "color: red;">' + text + '</div>';

  }
  
//italics//
  if (dropdown.value == "italics") {
    todo.innerHTML += '<div style= "font-style: italic;">' + text + '</div>';
  }

//none//
  if (dropdown.value == "none") {
    todo.innerHTML += '<div>' + text + '</div>'
  }
  
//underline//
  if (dropdown.value == "underline") {
    todo.innerHTML += '<div style= "text-decoration: underline;">' + text + '</div>';
}

//override of normal reload function//
    evt.preventDefault();
  
}, false);

//upon click//
todo.addEventListener('click', function(evt) {
  var tar = evt.target;

//after one click to strikeout the text//
  if (tar.style.textDecoration === "line-through") {
    tar.parentNode.removeChild(tar);
  }
  else {
    tar.style.textDecoration = "line-through";
  }
  
//to override the reload function//
evt.preventDefault();
}, false);