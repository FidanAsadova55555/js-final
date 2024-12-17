
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


///////////////////////////////////////////////

window.addEventListener('scroll', () => {
  const introImage = document.querySelector('.introimage');
  const scrollY = window.scrollY; 
  introImage.style.transform =`translateY(${scrollY * -0.3}px)`;});

//////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////
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
  
  const accardionD = document.getElementById("accordions");
  if (!accardionD) {
    console.error("Element with id 'accordions' not found");
  }
  
  const initializeAccordion = () => {
    document.querySelectorAll(".faq").forEach((faq) => {
      const textWrap = faq.querySelector(".faq-text-wrap");
      const icon = faq.querySelector("i");
  
      faq.addEventListener("click", () => {
        if (!textWrap.classList.contains("open")) {
          textWrap.classList.add("open");
          textWrap.style.height = textWrap.scrollHeight + "px"; 
          icon.classList.remove("ri-add-line");
          icon.classList.add("ri-subtract-line");
  
          textWrap.addEventListener(
            "transitionend",
            () => (textWrap.style.height = "auto"),
            { once: true }
          );
        } else {
          textWrap.style.height = textWrap.scrollHeight + "px"; 
          requestAnimationFrame(() => {
            textWrap.style.transition = "height 0.3s ease";
            textWrap.style.height = "0";
          });
          icon.classList.remove("ri-subtract-line");
          icon.classList.add("ri-add-line");
          textWrap.classList.remove("open");
        }
      });
    });
  };
  
  const renderAccordionData = async (data) => {
    if (data && accardionD) {
      data.forEach((accordionData, index) => {
        const accordionHtml = `
          <div key="${index}" class="faq">
            <div class="flex">
              <h2>"${accordionData?.title}</h2>
              <i class="ri-add-line"></i>
            </div>
            <div class="faq-text-wrap" style="max-width: 544px;">
              <p class="faq-text">${accordionData?.description ?? "salamm"}</p>
            </div>
          </div>
        `;
        accardionD.innerHTML += accordionHtml;
      });
  
      initializeAccordion();
    } else {
      console.error("No data or target element to render");
    }
  };
  
  fetchData("/accordionData", (data) => {
    renderAccordionData(data);
  });
  /////////////////////////////////////////////////
 
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
  ///////////////////////////////////////////////////////////////////

const today = dayjs().format('MMMM D, YYYY');



  
    
    
    
    ////////////////////////////////////////////////////////////////////////
    let minutesAgo;
    const blogsui = document.getElementById("blogsui");
    if (!blogsui) {
      console.error("Element with classname 'swiper-wrapper' not found");
    }
    const renderbloqsuiData = async (data) => {
      if (data && blogsui) {
        data.forEach((blog) => {
            
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

 minutesAgo = differenceInMinutes > 0 ? differenceInMinutes : 0;
          const blogsuiHtml = `
            <div id="responsiveblog"  class="col-lg-4 col-md-6 col-sm-12">
                            <div class="blogcontainer">
                                <div class="blogimg">
                                    <a href="${blog?.href}">
                                        <img src="${blog?.blogimg}" alt="">  

                                    </a>
                                </div>
                               <div class="values-box-title-wrap">
                                <a  href="${blog?.href}">
                                    <h2 class="values-box-title">${blog?.txt}</h2>

                                </a>
                             </div> 
                             <div class="blogdata">
                                <p class="date"><i class="ri-calendar-2-line"></i>${today}                               </p>
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
        const minutesAgoElement = document.querySelector('.minutes-ago');
        if (minutesAgoElement) {
            minutesAgoElement.innerHTML = `<i class="ri-time-line"></i>${minutesAgo} min read`;
        }
    });
    fetchData("/blog", (data) => {
      renderbloqsuiData(data);
    });
    ////////////////////////////////////////////////////////////////////////////////

const dynamicimg = document.getElementById("dynamic");
const procesLeft = document.querySelector(".procesleft");
let images = [];

fetchData("/scrollimages", (data) => {
  images = data.map(item => item.img); });

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const rect = procesLeft.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const bottom = rect.bottom + window.scrollY;

    if (images.length > 0 && scrollY >= top && scrollY <= bottom) {
        const normalizedScroll = scrollY - top;

        const totalImages = images.length;
        const index = Math.min(Math.floor(normalizedScroll / 400), totalImages - 1);

        dynamicimg.src = images[index];
    } else if (scrollY < top) {
        dynamicimg.src = images[0];
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////
var swiperss = new Swiper(".hi", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  loop: true, 
  autoplay: {
    delay: 0, 
    disableOnInteraction: false, 
  },
  speed: 2000, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
});

function runContinuous() {
  setInterval(function() {
    swiperss.slideNext();
  }, 100); 
}

runContinuous(); 


const agentD = document.querySelector("#salam");
if (!agentD) {
  console.error("Element with classname 'swiper-wrapper' not found");
}
const renderagentData = async (data) => {
  if (data && agentD) {
    data.forEach((agentData, index) => {
      const agentHtml = `
        <div key="${index}" class="swiper-slide">
                     <a href="${agentData?.href}">     <img src="${agentData?.img}" alt=""></a>

</div>



                        </div>
                        
      `;
      agentD.innerHTML += agentHtml;
    });

   
  } else {
    console.error("No data or target element to render");
  }
};

fetchData("/agentim", (data) => {
  renderagentData(data);
});
console.log(swiperss);
///////////////////////////////////////////////////////////////
// const params = new URLSearchParams(window.location.search);

//         const agentId = params.get('id');

//         fetch(`http://localhost:3001/agentdetail/${agentId}`)
//     .then(response => response.json())
//     .then(data => {
//         const adetail = document.getElementById('agentdetail');

//         if (adetail) {
//             adetail.innerHTML += `
//                <div class="container-fluid p-0">
//                 <div id="Blog-Info">
// <h1>${data?.name}
// </h1>
// <p>Licensed Realtor ID:

//     RLT-3984-MB

// </p>

 
// <div class="agentbox">
//     <div class="row justify-content-between">
//         <div class="col-lg-5 col-md-6 col-sm-12 order-1 order-md-0">
//             <h4>Personal information
//             </h4>
//            <div style="margin-bottom: 73px;" class="agentinfo">
//             <div class="flexboxstart">
//                 <h5>Location :

//                 </h5>
//                 <h6>California,USA

//                 </h6>
//             </div>
//             <div class="flexboxstart">
//                 <h5>Phone :



//                 </h5>
//                 <h6>(704) 546-955-0127



//                 </h6>
//             </div>
//             <div class="flexboxstart">
//                 <h5>Email :



//                 </h5>
//                 <h6>contact@dentistaaguilda.com



//                 </h6>
//             </div>
//             <div class="flexboxstart">
//                 <h5>Experience :



//                 </h5>
//                 <h6>20y



//                 </h6>
//             </div>
//             <div class="flexboxstart">
//                 <h5>Position :



//                 </h5>
//                 <h6>${data?.position}



//                 </h6>
//             </div>
//             <div class="flexboxstart">
//                 <h5>Language :



//                 </h5>
//                 <h6>English, Spanish



//                 </h6>
//             </div>
//            </div>
//            <div class="iconflex">
//             <i class="ri-facebook-circle-fill"></i>
//             <i class="ri-twitter-x-fill"></i>
//             <i class="ri-instagram-line"></i>
//             <i class="ri-youtube-fill"></i>
//             <i class="ri-linkedin-box-fill"></i>
//            </div>
//         </div>
//         <div class="col-lg-4 col-md-5 col-sm-12 order-0 order-md-1">
// <div class="agentphoto">
// <img src="${data?.img}" alt="">
// </div>
//         </div>
//     </div>
// </div>
//  <div class="row">
//     <div class="col-lg-6 col-md-12 col-sm-12">
//         <h1 class="blogdetailheader">
//             About me

//         </h1>
//         <p>With over 20 years of experience, Dentista specializes in luxury home sales and client satisfaction. Her deep market knowledge and commitment to finding the perfect property make her a trusted advisor in the industry.

//         </p>
//         <p style="margin-bottom: 76px;">His organizational skills and ability to handle complex paperwork make her a key asset in facilitating successful closings for both buyers and sellers.



//         </p>
      
        
//    <h1 class="blogdetailheader">Work experience

// </h1>
// <p>With over 20 years in the real estate industry, I have successfully navigated a variety of markets, from luxury residential properties to commercial investments. My experience includes:


// </p>
// <p>Residential property sales: Extensive experience in helping clients buy and sell homes, from starter properties to high-end estates, ensuring smooth transactions and favorable outcomes.

// </p>
// <p>Investment property consulting: Expertise in guiding investors through complex purchases, offering insights on market trends, risk management, and maximizing ROI.

// </p>
// <p>Property management: Hands-on management of residential and commercial properties, overseeing tenant relations, maintenance, and profitability.

// </p>
// <p>Client-focused service: A strong commitment to understanding client needs and delivering tailored solutions, whether for first-time buyers or seasoned investors.

// </p>
// <p>Negotiation and closing: Proven ability to negotiate favorable deals for clients, with a deep understanding of contract law, pricing strategies, and the closing process.

// </p>
// <p>Throughout my career, I have maintained a reputation for integrity, professionalism, and exceptional customer service, helping clients achieve their real estate goals with confidence.

// </p>


   
   
   
   
   
//     </div>
//  </div>
//                 </div>
//             </div>
//             `;
//         } else {
//             console.error('Element with id "blogInfo" not found');
//         }
//     })
// .catch(error => console.error('Error fetching blog data:', error));
   