// ======================= what we provide- services section =====>
// const swiperSlideItems = document.querySelectorAll('.swiper-slide li');

// swiperSlideItems.forEach(function (item) {
//     item.addEventListener('click', function () {
//         const dataFilter = item.getAttribute('data-filter');
//         const servicesSlides = document.querySelectorAll('.services-slide');

//         servicesSlides.forEach(function (slide) {
//             const dataName = slide.getAttribute('data-name');

//             if (dataName === dataFilter) {
//                 slide.classList.add('active-slide');
//             } else {
//                 slide.classList.remove('active-slide');
//             }
//         });
//          // Reset background color of all list items
//             document.querySelectorAll('.swiper-slide li').forEach(function (item) {
//                 item.style.backgroundColor = '';
//             });
//             // Set background color of clicked list item
//             document.querySelectorAll('.swiper-slide li').forEach(function (li) {
//                 li.addEventListener("click",function (){
//                     li.style.backgroundColor = '#cb0043'; // Change this to desired background color
//                 })
//             });
//     });
// });

// ========================== Google Sheet =======================>

var url =
  "https://script.google.com/macros/s/AKfycbzX0WPGXGwH0o9hXp5ILpDqrQycTpWum2sCGR_pVtDgzyStdF1IKwLLjHwbZ1Aewck/exec";
var form = document.querySelector(".bybENQform");
// console.log(form)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  ENQdata = new FormData(form);
  console.log(ENQdata);
  fetch(url, {
    method: "POST",
    body: ENQdata,
  })
    .then((res) => {
      res.text();
    })
    .then((finalres) => {
      console.log(finalres);
    });
  form.reset();
});

// =================================================================================================
// JavaScript to add or remove classes based on window width
window.addEventListener('resize', function(){
  // var dropEnd= document.getElementById("drop-end");
  if (window.innerWidth <= 576) {
      document.querySelector('.dropend').classList.remove('dropend');
      document.querySelector('.nav-dropdown').classList.add('dropdown');
  } else {
      document.querySelector('.dropdown').classList.remove('dropdown');
      document.querySelector('.nav-dropdown > button').setAttribute('aria-expanded', 'false');
  }
});