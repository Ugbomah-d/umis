// alert("Working");
const line = document.querySelector("span.link");
const link = document.querySelector("li ul");
const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const courses = document.querySelector("#courses");
const course = document.querySelector("#course-stuff");
const finance = document.querySelector("#finances")

line.addEventListener('click', function(){
  if(!course.classList.contains("hidden")){
    course.classList.add("hidden");
  }
  link.classList.toggle("hidden");
})
toggle.addEventListener('click', function(){
  sidebar.classList.toggle("hidden");
})
courses.addEventListener('click', function(){
  if(!link.classList.contains("hidden")){
    link.classList.add("hidden");    
  } 
  course.classList.toggle("hidden");
})
line.addEventListener('click', function(){
  if(!finance.classList.contains("hidden")){
    finance.classList.toggle("hidden");
  }
})
