const burgerMenu = document.querySelector(".burger-menu");
const navCenter = document.querySelector(".nav-center");
const navend = document.querySelector(".nav-end");
const navbar = document.querySelector(".navbar");
burgerMenu.innerHTML = '<i class="ri-menu-line"></i>';
navbar.style.borderBottom = "none";

burgerMenu.addEventListener("click", () => {
    navCenter.classList.toggle("open");
    navend.classList.toggle("open");

    if (navCenter.classList.contains("open")) {
        burgerMenu.innerHTML = '<i class="ri-close-line"></i>';
        
        navbar.style.borderBottom = "1px solid black";
    } else {
        burgerMenu.innerHTML = '<i class="ri-menu-line"></i>';
        navbar.style.borderBottom = "none"; 
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        navCenter.classList.remove("open");
        navend.classList.remove("open");
        burgerMenu.innerHTML = '<i class="ri-menu-line"></i>';
        navbar.style.borderBottom = "none";
    }
});
//services//
const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 3000,
  });
  
  const fetchData = async (url, cb) => {
    try {
      const res = await instance.get(url);
      cb(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const serviceD = document.querySelector("#typesofservices");

  const renderServiceData = async (data) => {
    if (data && serviceD) {
      data.forEach((data) => {
        const serviceHtml = `
         <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="servicebox">
                            <div class="servicelogo">
                                <img src="${data?.logo}" alt="">
                            </div>
                            <h1 class="servicename">${data?.name}</h1>
                            <p class="servicedescription">${data?.description}

                            </p>
                        </div>
                    </div>
                          
        `;
        serviceD.innerHTML += serviceHtml;
      });
  
     
    } else {
      console.error("No data or target element to render");
    }
  };
  
  fetchData("/servicedata", (data) => {
    renderServiceData(data);
  });
  
//testimonials //
//SLIDER//

  
  var swiper = new Swiper(".hola", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      900: {
        slidesPerView: "auto",
        centeredSlides: true, 
      },
      0: {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 10,
      },
    },
    rewind: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  console.log(swiper);
  const swiperD = document.querySelector(".holaswiper");
  if (!swiperD) {
    console.error("Element with classname 'swiper-wrapper' not found");
  }
  const renderSwiperData = async (data) => {
    if (data && swiperD) {
      data.forEach((swiperData, index) => {
        const swiperHtml = `
          <div key="${index}" class="swiper-slide">
<div class="slidecontainer">
    <div class="row justify-content-between">
        <div class="col-lg-7 col-md-12">
           
                        <div class="values-box-title-wrap"><h2 class="values-box-title">"${swiperData?.header}"
                        </h2></div> 
                        <div class="values-box-text-wrap"><p class="values-box-text">${swiperData?.text}</p></div>
                        <div class="values-box-title-wrap"><h2 class="values-box-title">${swiperData?.name}
                        </h2></div> 
                        <div class="values-box-text-wrap"><p class="values-box-text">${swiperData?.location}

                        </p></div>
                    </div>
        <div class="col-lg-4 col-md-12">
            <div class="testimonials-thumb-wrap"><img src="${swiperData?.img}" alt="A man in a suit and tie smiling." class="testimonials-thumb"></div>
        </div>
    </div>
</div>



                          </div>
                          
        `;
        swiperD.innerHTML += swiperHtml;
      });
  
     
    } else {
      console.error("No data or target element to render");
    }
  };
  
  fetchData("/swiperData", (data) => {
    renderSwiperData(data);
  });
  //blogs//
  const today = dayjs().format('MMMM D, YYYY');

 let minutesAgo;
 const blogsui = document.getElementById("blogsui");
 if (!blogsui) {
   console.error("Element with id 'blogsui' not found");
 }
 
 const renderbloqsuiData = async (data, limit = null) => {
   if (data && blogsui) {
     const blogsToRender = limit ? data.slice(0, limit) : data;
 
     blogsToRender.forEach((blog) => {
       let exitTime = localStorage.getItem('exitTime');
       const currentTime = new Date();
 
       if (!exitTime) {
         exitTime = currentTime.toISOString();
         localStorage.setItem('exitTime', exitTime);
       } else {
         localStorage.setItem('exitTime', currentTime.toISOString());
       }
 
       const exitTimeParsed = new Date(exitTime);
       const differenceInMinutes = Math.round((currentTime - exitTimeParsed) / 1000 / 60);
       const minutesAgo = differenceInMinutes > 0 ? differenceInMinutes : 0;
 
       const blogsuiHtml = `
         <div id="responsiveblog" class="col-lg-4 col-md-6 col-sm-12">
           <div class="blogcontainer">
             <div class="blogimg">
               <a href="${blog?.href}">
                 <img src="${blog?.blogimg}" alt="">
               </a>
             </div>
             <div class="values-box-title-wrap">
               <a href="${blog?.href}">
                 <h2 class="values-box-title">${blog?.txt}</h2>
               </a>
             </div>
             <div class="blogdata">
               <p class="date"><i class="ri-calendar-2-line"></i>${today}</p>
               <p class="date"><i class="ri-time-line"></i>${minutesAgo} min read</p>
             </div>
             <div class="btn">
               <a href="${blog?.href}">Read more</a>
             </div>
           </div>
         </div>`;
       blogsui.innerHTML += blogsuiHtml;
     });
   } else {
     console.error("No data or target element to render");
   }
 };
 
 document.addEventListener('DOMContentLoaded', () => {
   const currentPath = window.location.pathname;
 
   fetchData("/blog", (data) => {
     if (currentPath.includes("blogs.html")) {
       renderbloqsuiData(data);
     } else {
       renderbloqsuiData(data, 3);
     }
   });
 });
 