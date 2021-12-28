
// for active links
let home = document.getElementById('home');
let service = document.getElementById('service');
let about = document.getElementById('about');

home.addEventListener('click',()=>{
  home.classList.add("active");
  service.classList.remove("active");
  about.classList.remove("active");
})
service.addEventListener('click',()=>{
  service.classList.add("active");
  about.classList.remove("active");
  home.classList.remove("active");
})
about.addEventListener('click',()=>{
  about.classList.add("active");
  home.classList.remove("active");
  service.classList.remove("active");
})

