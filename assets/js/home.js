
function myFunction(i) {
    // Get the checkbox
    var checkBox = document.getElementById(`myCheck${i}`);
    // Get the output text
    var text = document.getElementById(`text${i}`);
    var dateText = document.getElementById(`date${i}`);
    var categoryText = document.getElementById(`cat${i}`);
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.textDecoration = "line-through";
      dateText.style.textDecoration = "line-through";
      categoryText.style.textDecoration = "line-through";
    } else{
        text.style.textDecoration = "none";
        dateText.style.textDecoration = "none";
        categoryText.style.textDecoration = "none";
    }
}

var x = document.querySelectorAll(".category-text");
for (let k = 0; k < x.length; k++){
  if(x[k].innerHTML == "Personal"){
    x[k].style.backgroundColor = "red";
  }else if(x[k].innerHTML == "Work"){
    x[k].style.backgroundColor = "blue";
  }else if(x[k].innerHTML == "School"){
    x[k].style.backgroundColor = "yellow";
  }else if(x[k].innerHTML == "Cleaning"){
    x[k].style.backgroundColor = "purple";
    x[k].style.color = "white";
  }else if(x[k].innerHTML == "Other"){
    x[k].style.backgroundColor = "green";
  } 
}