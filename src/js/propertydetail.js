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
////////////////////////////////////////////////////////////
const urlproParams = new URLSearchParams(window.location.search);

        const proId = urlproParams.get('id');

        fetch(`http://localhost:3001/properties/${proId}`)
    .then(response => response.json())
    .then(element => {
        const prodetail = document.getElementById('propertiesdetail');

        if (prodetail) {
          prodetail.innerHTML +=`
          <div class="container-fluid p-0">
                <div id="Blog-Info">
<h1>${element?.propertytitle}
</h1>
<p><i style="margin-right: 5px;" class="ri-map-pin-line"></i>${element?.address}</p>

 
<div style="margin-bottom: 40px;" class="prodetailimg">
    <img src="${element?.img}" alt="">
</div>
 <div class="row justify-content-between">
    <div class="col-lg-6 col-md-12 col-sm-12">
        <h1 class="blogdetailheader">
            About the property

        </h1>
        <div style="margin-bottom: 20px;" class="properties-info-wrap">
            <div class="properties-info">
                <div class="properties-info-icon w-embed">
                    <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0026 7.33594V5.33594L14.6693 8.0026L12.0026 10.6693V8.66927H8.66927V12.0026H10.6693L8.0026 14.6693L5.33594 12.0026H7.33594V8.66927H4.0026V10.6693L1.33594 8.0026L4.0026 5.33594V7.33594H7.33594V4.0026H5.33594L8.0026 1.33594L10.6693 4.0026H8.66927V7.33594H12.0026Z" fill="currentColor"></path>
            </svg>
        </div>
        <p style="margin: 0;" class="properties-info-text">${element?.sqft}</p>
        <p style="margin: 0;" class="properties-info-text">sqft</p>
    </div>
    <div class="properties-info">
        <div class="properties-info-icon w-embed">
            <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9974 8.12267V2.66667C13.9974 2.48986 13.9272 2.32029 13.8021 2.19526C13.6771 2.07024 13.5075 2 13.3307 2C13.1539 2 12.9843 2.07024 12.8593 2.19526C12.7343 2.32029 12.6641 2.48986 12.6641 2.66667V3.33333H3.33073V2.66667C3.33073 2.48986 3.26049 2.32029 3.13547 2.19526C3.01044 2.07024 2.84087 2 2.66406 2C2.48725 2 2.31768 2.07024 2.19266 2.19526C2.06763 2.32029 1.9974 2.48986 1.9974 2.66667V8.12267C1.60879 8.26006 1.27212 8.51415 1.03345 8.8502C0.794785 9.18625 0.665771 9.58783 0.664062 10V13.3333C0.664063 13.5101 0.7343 13.6797 0.859325 13.8047C0.984349 13.9298 1.15392 14 1.33073 14C1.50754 14 1.67711 13.9298 1.80213 13.8047C1.92716 13.6797 1.9974 13.5101 1.9974 13.3333V12.6667H13.9974V13.3333C13.9974 13.5101 14.0676 13.6797 14.1927 13.8047C14.3177 13.9298 14.4873 14 14.6641 14C14.8409 14 15.0104 13.9298 15.1355 13.8047C15.2605 13.6797 15.3307 13.5101 15.3307 13.3333V10C15.329 9.58783 15.2 9.18625 14.9613 8.8502C14.7227 8.51415 14.386 8.26006 13.9974 8.12267ZM12.6641 8H11.9974V6.66667C11.9974 6.48986 11.9272 6.32029 11.8021 6.19526C11.6771 6.07024 11.5075 6 11.3307 6H4.66406C4.48725 6 4.31768 6.07024 4.19266 6.19526C4.06763 6.32029 3.9974 6.48986 3.9974 6.66667V8H3.33073V4.66667H12.6641V8ZM5.33073 8V7.33333H7.33073V8H5.33073ZM8.66406 7.33333H10.6641V8H8.66406V7.33333ZM1.9974 10C1.9974 9.82319 2.06763 9.65362 2.19266 9.5286C2.31768 9.40357 2.48725 9.33333 2.66406 9.33333H13.3307C13.5075 9.33333 13.6771 9.40357 13.8021 9.5286C13.9272 9.65362 13.9974 9.82319 13.9974 10V11.3333H1.9974V10Z" fill="currentColor"></path>
            </svg>
        </div>
        <p style="margin: 0;" class="properties-info-text">${element?.bed}</p>
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
            </svg></div><p style="margin: 0;" class="properties-info-text">${element?.shower}</p></div><div class="properties-info"><div class="properties-info-icon w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5.33333L3.81458 6.84547C3.93439 6.94533 4.08541 7 4.24137 7H11.7586C11.9146 7 12.0656 6.94533 12.1854 6.84547L14 5.33333M4.33333 9.33333H4.34M11.6667 9.33333H11.6733M5.44043 3H10.5596C11.0381 3 11.4799 3.25638 11.7172 3.67181L13.6487 7.0518C13.8789 7.45473 14 7.91073 14 8.37487V12.3333C14 12.7015 13.7015 13 13.3333 13H12.6667C12.2985 13 12 12.7015 12 12.3333V11.6667H4V12.3333C4 12.7015 3.70152 13 3.33333 13H2.66667C2.29848 13 2 12.7015 2 12.3333V8.37487C2 7.91073 2.12111 7.45473 2.35135 7.0518L4.28277 3.67181C4.52016 3.25638 4.96195 3 5.44043 3ZM4.66667 9.33333C4.66667 9.5174 4.51743 9.66667 4.33333 9.66667C4.14924 9.66667 4 9.5174 4 9.33333C4 9.14927 4.14924 9 4.33333 9C4.51743 9 4.66667 9.14927 4.66667 9.33333ZM12 9.33333C12 9.5174 11.8507 9.66667 11.6667 9.66667C11.4826 9.66667 11.3333 9.5174 11.3333 9.33333C11.3333 9.14927 11.4826 9 11.6667 9C11.8507 9 12 9.14927 12 9.33333Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg></div><p style="margin: 0;" class="properties-info-text">${element?.car}</p></div></div>
            <p style="margin-bottom: 76px;">Monitors desires I managers, handed sofas the on honour; To academic called believe. To attempt, as be poverty forest the this endeavours, as queen harmonics, sacred, proceeded he is arm front he of which, a the you the pleasures more which five. We bathroom drunk read. Were her hands to options there such walls of be and, who film... Rush the peace an first, the would but one interfaces and, up time, travelling attempt, he from precipitate, are glanced frequently bad so supported framework in by get with if what quickly by select the in hung lady of his was when little the you rush yield play to are, managers, was in up of sport.





            </p>
          
            
       <h1 class="blogdetailheader">Property details</h1>
    <p>By to in the bed feedback sides musical the carpeting relations destined checks, learn timing have far the on of quitting derived having after weather. Top his objects and take initial work valuable that fully sitting now, town used editorials be to its still those salesmen the should shared control.
    
    
    <ul style="list-style: inherit;list-style-position: inside;">
        <li>Chequered the publication lobby the have sofas by little
        </li>
        <li>As and fresh on communicated the another films be the onto</li>
        <li>It is because ability and would this common agency</li>
        <li>That a to sleeping pushed the not is reflections, the a in doubting</li>
        <li>Didn't owner any of more their facilitate conflict- for declined</li>
    </ul>
    
    </p>
    <p>Never tower, is yourself the clothes, rung. Human all switching of lift in of name of be outcomes one didn't belong, perceive hesitated pattern.
    
    </p>
    <p>Though borne was middle all testimony achievements checks, enough of design the effort in left cleaning queen's the a minutes was me. In why all a thought of greatest on however which, like this of concepts has at spare chosen one was is in that's her distance objective teacher's now fall the feel.
    
    </p>
     </div>
    <div class="col-lg-5 d-flex justify-content-end">
        <div class="add">
            <p class="forsale">
Property for sale
            </p>
            <h1>$ <span>${element?.price}</span></h1>
            <div class="addtocart">
                Add to Cart
            </div>
        </div>
    </div>

   
   
   
   
   
    </div>
 </div>
                </div>`
          ;
          const btn = document.querySelector(".addtocart");
          btn.addEventListener('click', (e) => {
              e.preventDefault();
              const propertyId = element?.id;
          
              fetch('http://localhost:3001/card', {
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ ...element, propertyId: propertyId })
              }).then(res => res.json())
              .then(data => {
                  console.log(data);
              })
              .catch(error => console.error('Error adding to cart:', error));
          });
          
    }else {
            console.error('Element with id "blogInfo" not found');
        }
    })
    .catch(error => console.error('Error fetching blog data:', error));
   
    
    