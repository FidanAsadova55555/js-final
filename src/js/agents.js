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
////////////////////////////////////////////////////////
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
const agentsD = document.querySelector("#foreachagent");

const renderagentsData = async (data) => {
  if (data && agentsD) {
    data.forEach((agentsData, index) => {
      const agentsHtml = `
        <div key="${index}" class="col-lg-4 p-3">
                     <a href="${agentsData?.href}">   
                     <div class="agentsimg">
                      <img src="${agentsData?.img}" alt=""></div> 
                      <div class="agentsname">
                      ${agentsData?.name}
                      </div>
<div class="agentsposition">
                      ${agentsData?.position}
                      </div>
                     </a>

</div>



                        </div>
                        
      `;
      agentsD.innerHTML += agentsHtml;
    });

   
  } else {
    console.error("No data or target element to render");
  }
};

fetchData("/agentim", (data) => {
  renderagentsData(data);
});
/////////////////////////////////////////////////////////
const params = new URLSearchParams(window.location.search);

        const agentId = params.get('id');

        fetch(`http://localhost:3001/agentdetail/${agentId}`)
    .then(response => response.json())
    .then(data => {
        const adetail = document.getElementById('agentdetail');

        if (adetail) {
            adetail.innerHTML += `
               <div class="container-fluid p-0">
                <div id="Blog-Info">
<h1>${data?.name}
</h1>
<p>Licensed Realtor ID:

    RLT-3984-MB

</p>

 
<div class="agentbox">
    <div class="row justify-content-between">
        <div class="col-lg-5 col-md-6 col-sm-12 order-1 order-md-0">
            <h4>Personal information
            </h4>
           <div style="margin-bottom: 73px;" class="agentinfo">
            <div class="flexboxstart">
                <h5>Location :

                </h5>
                <h6>California,USA

                </h6>
            </div>
            <div class="flexboxstart">
                <h5>Phone :



                </h5>
                <h6>(704) 546-955-0127



                </h6>
            </div>
            <div class="flexboxstart">
                <h5>Email :



                </h5>
                <h6>contact@dentistaaguilda.com



                </h6>
            </div>
            <div class="flexboxstart">
                <h5>Experience :



                </h5>
                <h6>20y



                </h6>
            </div>
            <div class="flexboxstart">
                <h5>Position :



                </h5>
                <h6>${data?.position}



                </h6>
            </div>
            <div class="flexboxstart">
                <h5>Language :



                </h5>
                <h6>English, Spanish



                </h6>
            </div>
           </div>
           <div class="iconflex">
            <i class="ri-facebook-circle-fill"></i>
            <i class="ri-twitter-x-fill"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-youtube-fill"></i>
            <i class="ri-linkedin-box-fill"></i>
           </div>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-12 order-0 order-md-1">
<div class="agentphoto">
<img src="${data?.img}" alt="">
</div>
        </div>
    </div>
</div>
 <div class="row">
    <div class="col-lg-6 col-md-12 col-sm-12">
        <h1 class="blogdetailheader">
            About me

        </h1>
        <p>With over 20 years of experience, Dentista specializes in luxury home sales and client satisfaction. Her deep market knowledge and commitment to finding the perfect property make her a trusted advisor in the industry.

        </p>
        <p style="margin-bottom: 76px;">His organizational skills and ability to handle complex paperwork make her a key asset in facilitating successful closings for both buyers and sellers.



        </p>
      
        
   <h1 class="blogdetailheader">Work experience

</h1>
<p>With over 20 years in the real estate industry, I have successfully navigated a variety of markets, from luxury residential properties to commercial investments. My experience includes:


</p>
<p>Residential property sales: Extensive experience in helping clients buy and sell homes, from starter properties to high-end estates, ensuring smooth transactions and favorable outcomes.

</p>
<p>Investment property consulting: Expertise in guiding investors through complex purchases, offering insights on market trends, risk management, and maximizing ROI.

</p>
<p>Property management: Hands-on management of residential and commercial properties, overseeing tenant relations, maintenance, and profitability.

</p>
<p>Client-focused service: A strong commitment to understanding client needs and delivering tailored solutions, whether for first-time buyers or seasoned investors.

</p>
<p>Negotiation and closing: Proven ability to negotiate favorable deals for clients, with a deep understanding of contract law, pricing strategies, and the closing process.

</p>
<p>Throughout my career, I have maintained a reputation for integrity, professionalism, and exceptional customer service, helping clients achieve their real estate goals with confidence.

</p>


   
   
   
   
   
    </div>
 </div>
                </div>
            </div>
            `;
        } else {
            console.error('Element with id "blogInfo" not found');
        }
    })
    .catch(error => console.error('Error fetching blog data:', error));
   
    
 