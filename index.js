
//Function to hide sidebar
document.querySelector(".sidebar-toggle").addEventListener('click', function(){
  document.querySelector(".sidebar").classList.toggle("hidden");
});

//Function to hide all submenu
function hideAll(){
  for(var i=0; i<document.querySelectorAll(".submenu").length; i++ ){
    if(!document.querySelectorAll(".submenu")[i].classList.contains("hidden")){
      document.querySelectorAll(".submenu")[i].classList.add("hidden")
    }
  }
}

//Toggling the hidden class in academic details
document.querySelector("#academic_details").addEventListener('click', function(){
  if(document.querySelector("#academic_details + ul").classList.contains("hidden")){
    hideAll();
  }
  document.querySelector("#academic_details + ul").classList.toggle("hidden");
})

//Toggling the hidden class in courses
document.querySelector("#courses").addEventListener('click', function(){
  if(document.querySelector("#courses + ul").classList.contains("hidden")){
    hideAll();
  }
  document.querySelector("#courses + ul").classList.toggle("hidden");
})

//Toggling the hidden class in finances
document.querySelector("#finances").addEventListener('click', function(){
  if(document.querySelector("#finances + ul").classList.contains("hidden")){
    hideAll();
  }
  document.querySelector("#finances + ul").classList.toggle("hidden");
})

