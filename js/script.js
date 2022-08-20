let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a')

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 200;
      let id = sec.getAttribute('id');
      console.log(offset);
      console.log(height);
      console.log(id);

      if(top >= offset && top < offset + height){
        navlinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
    });
}

document.querySelector('#search').onclick =() =>{
    document.querySelector('#search-form').classList.add('active');
}

document.querySelector('#close').onclick =() =>{
    document.querySelector('#search-form').classList.remove('active');
}


 var swiper = new Swiper(".home-slider", { 
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
  }); 

  var swiper = new Swiper(".review-slider", { 
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop : true,
  }); 

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
      setInterval(loader , 1000);
  }
  window.onload = fadeOut;