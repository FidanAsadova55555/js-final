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
let lastScrollPosition = 0;
let ticking = false;
const introImage = document.querySelector('.introimage');


window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (currentScrollPosition < lastScrollPosition) {
                console.log("Scrolling up");
                introImage.classList.remove('animate');
            }
            else{
                introImage.classList.add('animate');

            }
            lastScrollPosition = currentScrollPosition;
            ticking = false;
        });
        ticking = true;
    }
});
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
  