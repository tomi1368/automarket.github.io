const menuHambuger = document.querySelector(".nav-bar__hambuger__line"),
  menuBar = document.querySelector(".nav-bar__list"),
  header = document.querySelector(".header")
let slideItem = 0;
const scrollActive = () => {
  const scrollY = window.pageYOffset,
    sections = document.querySelectorAll(".section");
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 400;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-bar__list__items[data-pos=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-bar__list__items[data-pos=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};
const slideMove = (list) => {
  list.forEach((slide) => {
    slide.classList.remove("active-slide");
  });
  slideItem++;
  if (slideItem >= list.length) {
    slideItem = 0;
  }
  list[slideItem].classList.add("active-slide");
};
const slideMoveLeft = (list) => {
  list.forEach((el) => {
    el.classList.remove("active-slide");
  });
  slideItem--;
  if (slideItem < 0) {
    slideItem = list.length - 1 ;
  }
  console.log(slideItem)
  list[slideItem].classList.add("active-slide");
};
document.addEventListener("click", (e) => {
  const boxImg = document.querySelector(".banner__box"),
  slides = boxImg.querySelectorAll("img");
  if (
    e.target.matches(".nav-bar__hambuger") ||
    e.target.matches(".nav-bar__hambuger__line")
  ) {
    e.stopPropagation();
    e.preventDefault();
    menuBar.classList.toggle("activo")
      ? menuHambuger.classList.add("open")
      : menuHambuger.classList.remove("open");
  }
  if (e.target.matches(".nav-bar__list__items")) {
    menuBar.classList.remove("activo");
    menuHambuger.classList.remove("open");
  }
  if (e.target.matches(".right")) {
    slideMove(slides);
  }
  if (e.target.matches(".left")) {
    slideMoveLeft(slides);
  }
  if (e.target.matches(".nav-bar__list__items__link")) {
    menuBar.classList.remove("activo");
    menuHambuger.classList.remove("open");
  }
});

document.addEventListener("scroll",e=>{
  document.documentElement.scrollTop > 0 ? header.classList.add("active") : header.classList.remove("active") 
} )

document.addEventListener("submit",e=>{
  let name = e.target.nombre.value,
  email=e.target.email.value,
  prov = e.target.provincia.value;
  e.preventDefault()
  if (name==="" || email==="" || prov ==""){
    swal("Warning", "Complete los Campos!", "error");
  }
  else{
    swal("Exitoso!", "Enviaste el mensaje!", "success");
    e.target.reset()
  }

})