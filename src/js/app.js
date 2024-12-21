
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
    for (let i = 0; i < 10 && i < data.length; i++) {
      const agentData = data[i];
      const agentHtml = `
        <div key="${i}" class="swiper-slide">
                     <a href="${agentData?.href}">   
                     <div class="agentslideimg">
                      <img src="${agentData?.img}" alt=""></div> 
                      <div class="agentslidename">
                      ${agentData?.name}
                      </div>
<div class="agentslideposition">
                      ${agentData?.position}
                      </div>
                     </a>

</div>



                        </div>
                        
      `;
      agentD.innerHTML += agentHtml;
    }
  } else {
    console.error("No data or target element to render");
  }
};

// const renderagentData = async (data) => {
//   if (data && agentD) {
//     data.forEach((agentData, index) => {
//       const agentHtml = `
//         <div key="${index}" class="swiper-slide">
//                      <a href="${agentData?.href}">   
//                      <div class="agentslideimg">
//                       <img src="${agentData?.img}" alt=""></div> 
//                       <div class="agentslidename">
//                       ${agentData?.name}
//                       </div>
// <div class="agentslideposition">
//                       ${agentData?.position}
//                       </div>
//                      </a>

// </div>



//                         </div>
                        
//       `;
//       agentD.innerHTML += agentHtml;
//     });

   
//   } else {
//     console.error("No data or target element to render");
//   }
// };

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
   //PROPERTIES//pagination...............
const productsContainer = document.querySelector('#twelve');

async function fetchProperties() {
    const response = await fetch('http://localhost:3001/properties');
    return await response.json();
}

async function renderProductsContainer(limit = null) {
    const data = await fetchProperties();

    const propertiesToDisplay = limit ? data.slice(0, limit) : data;

    productsContainer.innerHTML = '';

    propertiesToDisplay.forEach((element) => {
        const propertyHTML = `
      <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="property-box">
                    <div class="propertyimg">
                    <a href="${element?.href}">                        <img src="${element?.img}" alt="">
</a>
                      <div class="absolutes">
                        <div class="abslt rentorsell">${element?.rentorsale}</div>
                        <div class="abslt price"><span id="price">$${element?.price}</span><span>${element?.frequency}</span></div>
                      </div>
                    </div>
                   <div class="propertyinfo">
                   <a href="${element?.href}"> <div class="protitle">
                    ${element?.propertytitle}
                    </div></a>
                    <h4 class="proadress"><i class="ri-map-pin-line"></i>12273 Dream Avenue, New York</h4>
                    <div class="properties-info-wrap">
                        <div class="properties-info">
                            <div class="properties-info-icon w-embed">
                                <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0026 7.33594V5.33594L14.6693 8.0026L12.0026 10.6693V8.66927H8.66927V12.0026H10.6693L8.0026 14.6693L5.33594 12.0026H7.33594V8.66927H4.0026V10.6693L1.33594 8.0026L4.0026 5.33594V7.33594H7.33594V4.0026H5.33594L8.0026 1.33594L10.6693 4.0026H8.66927V7.33594H12.0026Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <p class="properties-info-text">${element?.sqft}</p>
                    <p class="properties-info-text">sqft</p>
                </div>
                <div class="properties-info">
                    <div class="properties-info-icon w-embed">
                        <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9974 8.12267V2.66667C13.9974 2.48986 13.9272 2.32029 13.8021 2.19526C13.6771 2.07024 13.5075 2 13.3307 2C13.1539 2 12.9843 2.07024 12.8593 2.19526C12.7343 2.32029 12.6641 2.48986 12.6641 2.66667V3.33333H3.33073V2.66667C3.33073 2.48986 3.26049 2.32029 3.13547 2.19526C3.01044 2.07024 2.84087 2 2.66406 2C2.48725 2 2.31768 2.07024 2.19266 2.19526C2.06763 2.32029 1.9974 2.48986 1.9974 2.66667V8.12267C1.60879 8.26006 1.27212 8.51415 1.03345 8.8502C0.794785 9.18625 0.665771 9.58783 0.664062 10V13.3333C0.664063 13.5101 0.7343 13.6797 0.859325 13.8047C0.984349 13.9298 1.15392 14 1.33073 14C1.50754 14 1.67711 13.9298 1.80213 13.8047C1.92716 13.6797 1.9974 13.5101 1.9974 13.3333V12.6667H13.9974V13.3333C13.9974 13.5101 14.0676 13.6797 14.1927 13.8047C14.3177 13.9298 14.4873 14 14.6641 14C14.8409 14 15.0104 13.9298 15.1355 13.8047C15.2605 13.6797 15.3307 13.5101 15.3307 13.3333V10C15.329 9.58783 15.2 9.18625 14.9613 8.8502C14.7227 8.51415 14.386 8.26006 13.9974 8.12267ZM12.6641 8H11.9974V6.66667C11.9974 6.48986 11.9272 6.32029 11.8021 6.19526C11.6771 6.07024 11.5075 6 11.3307 6H4.66406C4.48725 6 4.31768 6.07024 4.19266 6.19526C4.06763 6.32029 3.9974 6.48986 3.9974 6.66667V8H3.33073V4.66667H12.6641V8ZM5.33073 8V7.33333H7.33073V8H5.33073ZM8.66406 7.33333H10.6641V8H8.66406V7.33333ZM1.9974 10C1.9974 9.82319 2.06763 9.65362 2.19266 9.5286C2.31768 9.40357 2.48725 9.33333 2.66406 9.33333H13.3307C13.5075 9.33333 13.6771 9.40357 13.8021 9.5286C13.9272 9.65362 13.9974 9.82319 13.9974 10V11.3333H1.9974V10Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <p class="properties-info-text">${element?.bed}</p>
                </div>
                <div class="properties-info">
                    <div class="properties-info-icon w-embed">
                        <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4215_902)">
                        <path d="M14.6641 8.0013H3.33073V3.33464C3.33073 2.98101 3.4712 2.64187 3.72125 2.39183C3.9713 2.14178 4.31044 2.0013 4.66406 2.0013H5.9974C6.25844 2.00144 6.5137 2.07821 6.73152 2.22208C6.94934 2.36595 7.12014 2.57059 7.22273 2.81064C6.7687 2.97043 6.3752 3.26673 6.09616 3.65891C5.81712 4.0511 5.66619 4.51998 5.66406 5.0013V6.0013C5.66406 6.17811 5.7343 6.34768 5.85932 6.47271C5.98435 6.59773 6.15392 6.66797 6.33073 6.66797H9.66406C9.84087 6.66797 10.0104 6.59773 10.1355 6.47271C10.2605 6.34768 10.3307 6.17811 10.3307 6.0013V5.0013C10.3286 4.4886 10.1577 3.99086 9.84442 3.58501C9.53112 3.17916 9.09286 2.8878 8.59739 2.75597C8.46586 2.16425 8.13665 1.635 7.66402 1.25544C7.1914 0.875886 6.60356 0.668679 5.9974 0.667969H4.66406C3.95682 0.667969 3.27854 0.94892 2.77844 1.44902C2.27835 1.94911 1.9974 2.62739 1.9974 3.33464V8.0013H1.33073C1.15392 8.0013 0.984349 8.07154 0.859325 8.19656C0.7343 8.32159 0.664063 8.49116 0.664062 8.66797C0.664063 8.84478 0.7343 9.01435 0.859325 9.13937C0.984349 9.2644 1.15392 9.33463 1.33073 9.33463H1.9974V12.0013C1.9991 12.4135 2.12812 12.8151 2.36679 13.1511C2.60546 13.4871 2.94212 13.7412 3.33073 13.8786V14.668C3.33073 14.8448 3.40097 15.0143 3.52599 15.1394C3.65102 15.2644 3.82058 15.3346 3.9974 15.3346C4.17421 15.3346 4.34378 15.2644 4.4688 15.1394C4.59382 15.0143 4.66406 14.8448 4.66406 14.668V14.0013H11.3307V14.668C11.3307 14.8448 11.401 15.0143 11.526 15.1394C11.651 15.2644 11.8206 15.3346 11.9974 15.3346C12.1742 15.3346 12.3438 15.2644 12.4688 15.1394C12.5938 15.0143 12.6641 14.8448 12.6641 14.668V13.8786C13.0527 13.7412 13.3893 13.4871 13.628 13.1511C13.8667 12.8151 13.9957 12.4135 13.9974 12.0013V9.33463H14.6641C14.8409 9.33463 15.0104 9.2644 15.1355 9.13937C15.2605 9.01435 15.3307 8.84478 15.3307 8.66797C15.3307 8.49116 15.2605 8.32159 15.1355 8.19656C15.0104 8.07154 14.8409 8.0013 14.6641 8.0013ZM8.9974 5.0013V5.33464H6.9974V5.0013C6.9974 4.73609 7.10275 4.48173 7.29029 4.29419C7.47782 4.10666 7.73218 4.0013 7.9974 4.0013C8.26261 4.0013 8.51697 4.10666 8.7045 4.29419C8.89204 4.48173 8.9974 4.73609 8.9974 5.0013ZM12.6641 12.0013C12.6641 12.1781 12.5938 12.3477 12.4688 12.4727C12.3438 12.5977 12.1742 12.668 11.9974 12.668H3.9974C3.82058 12.668 3.65102 12.5977 3.52599 12.4727C3.40097 12.3477 3.33073 12.1781 3.33073 12.0013V9.33463H12.6641V12.0013Z" fill="currentColor"></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_4215_902">
                        <rect width="16" height="16" fill="currentColor"></rect>
                        </clipPath>
                        </defs>
                        </svg></div><p class="properties-info-text">${element?.shower}</p></div><div class="properties-info"><div class="properties-info-icon w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5.33333L3.81458 6.84547C3.93439 6.94533 4.08541 7 4.24137 7H11.7586C11.9146 7 12.0656 6.94533 12.1854 6.84547L14 5.33333M4.33333 9.33333H4.34M11.6667 9.33333H11.6733M5.44043 3H10.5596C11.0381 3 11.4799 3.25638 11.7172 3.67181L13.6487 7.0518C13.8789 7.45473 14 7.91073 14 8.37487V12.3333C14 12.7015 13.7015 13 13.3333 13H12.6667C12.2985 13 12 12.7015 12 12.3333V11.6667H4V12.3333C4 12.7015 3.70152 13 3.33333 13H2.66667C2.29848 13 2 12.7015 2 12.3333V8.37487C2 7.91073 2.12111 7.45473 2.35135 7.0518L4.28277 3.67181C4.52016 3.25638 4.96195 3 5.44043 3ZM4.66667 9.33333C4.66667 9.5174 4.51743 9.66667 4.33333 9.66667C4.14924 9.66667 4 9.5174 4 9.33333C4 9.14927 4.14924 9 4.33333 9C4.51743 9 4.66667 9.14927 4.66667 9.33333ZM12 9.33333C12 9.5174 11.8507 9.66667 11.6667 9.66667C11.4826 9.66667 11.3333 9.5174 11.3333 9.33333C11.3333 9.14927 11.4826 9 11.6667 9C11.8507 9 12 9.14927 12 9.33333Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></div><p class="properties-info-text">${element?.car}</p></div></div>
                   </div>
                    
                </div>
            </div>`;
            productsContainer.innerHTML += propertyHTML;
          });
      }
      
      if (window.location.pathname.includes('home.html')) {
          renderProductsContainer(6);
      }
      
      if (window.location.pathname.includes('explore.html')) {
          renderProductsContainer();
      }
   
// /////////////////////////////////addtocart///
// const shoppingCard = document.querySelector('.modal-body');
// const receiptContainer = document.querySelector('.total-price');
// const net=document.querySelector('.nettotal');
// const continueCheckout=document.querySelector('.menimbutonum');
// const quantity = document.querySelector('#quantity');
// renderShoppingCard();

// function renderShoppingCard() {
//   fetch("http://localhost:3001/card")
//     .then((res) => res.json())
//     .then((data) => {
//       shoppingCard.innerHTML = "";

//       if (data.length === 0) {
//         shoppingCard.innerHTML = `
//           <div class="empty">
//             <p>No items found.</p>
//           </div>
//         `;
//         net.innerHTML = "";
//         continueCheckout.innerHTML = `<p>Shop now</p>`;

//         return;
//       }

//       data.forEach((element) => {
//         const existingItem = shoppingCard.querySelector(`[data-id="${element.id}"]`);

//         if (!existingItem) {
//           const itemHTML = `
//             <div class="notempty" data-id="${element.id}">
//               <div class="cartitemimg">
//                 <img src="${element.img}" alt="">
//               </div>
//               <div class="cartiteminfo">
//                 <div class="leftinfo">
//                   <div class="itemtitle">${element.propertytitle}</div>
//                   <input type="number" class="count" value="1" min="0">
//                   <div class="action">Remove</div>
//                 </div>
//                 <div class="rightinfo">
//                   <div class="cart-price">$<span>${element.price}</span></div>
//                 </div>
//               </div>
//             </div>
//           `;
//           shoppingCard.insertAdjacentHTML('beforeend', itemHTML);
//         } else {
//           const input = existingItem.querySelector('.count');
//           input.value = parseInt(input.value) + 1; 
//         }
//       });

//       attachEventListeners(); 
//     })
//     .catch((error) => console.error("Error rendering shopping cart:", error));
// }

// function attachEventListeners() {
//   const items = document.querySelectorAll('.notempty');

//   items.forEach(item => {
//     const input = item.querySelector('.count');
//     const removeButton = item.querySelector('.action');
//     const price = parseFloat(item.querySelector('.cart-price span').textContent.replace(/,/g, '')) || 0;

//     updateItemVisibility(item, input.value);
//     updateSubtotal();

//     input.addEventListener('input', () => {
//       updateItemVisibility(item, input.value); 
//       updateSubtotal();
//     });

//     removeButton.addEventListener('click', () => {
//       let inputValue = parseInt(input.value) || 0;

//       if (inputValue > 0) {
//         input.value = inputValue - 1; 
//       }

//       updateItemVisibility(item, input.value);
//       updateSubtotal();

//       const itemId = item.getAttribute('data-id');
//       fetch(`http://localhost:3001/card/${itemId}`, {
//         method: 'DELETE'
//       })
//         .then((response) => {
//           if (response.ok) {
//             console.log(`Item with ID ${itemId} removed from server.`);
//             if (parseInt(input.value) === 0) {
//               item.remove();
//             }
//           } else {
//             console.error("Error removing item from server");
//           }
//         })
//         .catch((error) => console.error("Error removing item from server:", error));

//       updateSubtotal();
//     });
//   });
// }

// function updateItemVisibility(item, value) {
//   item.style.display = parseInt(value) > 0 ? "flex" : "none";
// }

// function updateSubtotal() {
//   const items = document.querySelectorAll('.notempty');
//   let subtotal = 0;
//   let totalQuantity = 0;

//   items.forEach(item => {
//     const input = item.querySelector('.count');
//     const price = parseFloat(item.querySelector('.cart-price span').textContent.replace(/,/g, '')) || 0;
//     const inputValue = parseInt(input.value) || 0;

//     if (inputValue > 0) {
//       subtotal += inputValue * price;
//       totalQuantity += inputValue;
//     }
//   });

//   renderReceiptContainer(subtotal, totalQuantity);
// }

// function renderReceiptContainer(total, totalQuantity) {
//   const formattedTotal = total.toLocaleString('en-US'); 
//   receiptContainer.innerHTML = `$<span>${formattedTotal}</span>`;
//   quantity.textContent = totalQuantity; 
// }
