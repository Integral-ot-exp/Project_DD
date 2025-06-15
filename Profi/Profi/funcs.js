//
function func_1(){
    document.getElementById("about").scrollIntoView({behavior: 'smooth'});
}

//
function func_2(){
	document.getElementById("services").scrollIntoView({behavior: 'smooth'});
}

//
function func_3(){
	document.getElementById("advants").scrollIntoView({behavior: 'smooth'});
}

//
function func_4(){
	document.getElementById("design").scrollIntoView({behavior: 'smooth'});
}

//
function func_5(){
	document.getElementById("portfolio").scrollIntoView({behavior: 'smooth'});
}

//
function func_6(){
	document.getElementById("forma").scrollIntoView({behavior: 'smooth'});
}

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");
 
  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } 
    else {
      backToTop.style.display = "none";
    }
  });
 
  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});