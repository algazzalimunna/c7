const container =document.querySelector(".container");
const header = document.querySelector(".header");
const myObserver = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    ent.isIntersecting === false ? header.classList.add("sticky") : header.classList.remove("sticky");
},
{
    root:null,
    rootMargin:"-60px",
    threshold:"0"
});

myObserver.observe(container);

// -- Initialize Swiper --
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
      delay:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
