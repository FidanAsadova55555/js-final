
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



// const logoHtml = document.getElementById("logotabledata");
// const createLogoForm = document.getElementById("createlogoform");
// const logoImg = document.getElementById("img");

// const fetchData = async (url) => {
//   try {
//     const res = await instance.get(url);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };

// const createLogo = async (url, data) => {
//   try {
//     await instance.post(url, data);
//     refreshLogos();
//   } catch (error) {
//     console.error("Error creating logo:", error);
//   }
// };

// const deleteLogo = async (url, id) => {
//   try {
//     await instance.delete(`${url}/${id}`);
//     refreshLogos();
//   } catch (error) {
//     console.error("Error deleting logo:", error);
//   }
// };

// const refreshLogos = async () => {
//   const data = await fetchData("/data");
//   renderLogos(data);
// };

// const renderLogos = (data) => {
//   logoHtml.innerHTML = ""; 
//   data.forEach((logo, index) => {
//     const logoRow = `
//       <tr>
//         <th  class="align" scope="row">${index + 1}</th>
//         <td class="align">
//           <div class="tableimg">
//             <img src="${logo.img || 'https://picsum.photos/200/300'}" alt="Logo" />
//           </div>
//         </td>
//         <td class="align">
//           <button class="p-1 ps-2 pe-2 btn-danger border-0 rounded-pill  shadow-none delete-logo" data-id="${logo.id}">Delete</button>
//         </td>
//       </tr>`;
//     logoHtml.innerHTML += logoRow;
//   });

//   document.querySelectorAll(".delete-logo").forEach((btn) =>
//     btn.addEventListener("click", (e) => {
//       const id = e.target.dataset.id;
//       deleteLogo("/data", id);
//     })
//   );
// };

// createLogoForm?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fileReader = new FileReader();
//   fileReader.onload = () => {
//     const payload = {
//       id: crypto.randomUUID(),
//       img: fileReader.result,
//     };
//     createLogo("/data", payload);
//   };
//   fileReader.readAsDataURL(logoImg.files[0]);
// });

// refreshLogos();
//////////////////////////////////////////////////////////////////

// const onlineHtml = document.getElementById("onlinetabledata");
// const createOnlineForm = document.getElementById("createonlineform");
// const Img = document.getElementById("logoimg");
// const description = document.getElementById("description");
// const header = document.getElementById("header");
// const backgroundImgColor = document.getElementById("backgroundimgcolor");

// const createOnline = async (url, data) => {
//   try {
//     await instance.post(url, data);
//     refreshOnline();
//   } catch (error) {
//     console.error("Error creating online entry:", error);
//   }
// };
// const deleteOnline = async (url, id) => {
//   try {
//     await instance.delete(`${url}/${id}`);
//     refreshOnline();
//   } catch (error) {
//     console.error("Error deleting logo:", error);
//   }
// };


// const refreshOnline = async () => {
//   const data = await fetchData("/online");
//   renderOnline(data);
// };

// const renderOnline = (data) => {
//   onlineHtml.innerHTML = "";
//   data.forEach((item, index) => {
//     const onlineRow = `
//       <tr>
//         <th class="align" scope="row">${index + 1}</th>
//         <td class="align">${item.description || "No description"}</td>
//         <td class="align">
//           <div class="tableimg" style="background-color: ${item.backgroundimgcolor || "#ffffff"};">
//           </div>
//         </td>
//         <td class="align">
//        <div class="tableimg">
//             <img src="${item.logoimg || 'https://picsum.photos/200/300'}" alt="Logo" />
//           </div> 
//         </td>
//         <td class="align">${item.header || "No header"}</td>
//         <td class="align">
//           <button class="p-1 ps-2 pe-2 border-0 btn-danger rounded-pill shadow-none delete-online" data-id="${item.id}">Delete</button>
//         </td>
//       </tr>`;
//     onlineHtml.innerHTML += onlineRow;
//   });

//   document.querySelectorAll(".delete-online").forEach((btn) =>
//     btn.addEventListener("click", (e) => {
//       const id = e.target.dataset.id;
//       deleteOnline("/online", id);
//     })
//   );
// };

// createOnlineForm?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fileReader = new FileReader();
//   fileReader.onload = () => {
//     const payload = {
//       id: crypto.randomUUID(),
//       description: description.value,
//       header: header.value,
//       backgroundimgcolor: backgroundImgColor.value,
//       logoimg: fileReader.result,
//     };
//     createOnline("/online", payload);
//   };
//   fileReader.readAsDataURL(Img.files[0]);
// });

// refreshOnline();
/////////////////////////////////////////////////////////////////////


// const courseTableData = document.getElementById("coursetabledata");
// const createCourseForm = document.getElementById("createcourseform");
// const courseImg = document.getElementById("courseimg"); 
// const ctext = document.getElementById("ctext");
// const cheader = document.getElementById("cheader");
// const bgcolor = document.getElementById("bgcolor");

// const createCourse = async (url, data) => {
//   try {
//     await instance.post(url, data);
//     refreshCourse();
//   } catch (error) {
//     console.error("Error creating course entry:", error);
//   }
// };

// const deleteCourse = async (url, id) => {
//   try {
//     await instance.delete(`${url}/${id}`);
//     refreshCourse();
//   } catch (error) {
//     console.error("Error deleting course:", error);
    

//   }
// };

// const refreshCourse = async () => {
//   const data = await fetchData("/courses");
//   renderCourse(data); 
// };

// const renderCourse = (data) => {
//   courseTableData.innerHTML = ""; 
//   data.forEach((item, index) => {
//     const courseRow = `
//       <tr>
//         <th class="align" scope="row">${index + 1}</th>
//        <td class="align">
//        <div class="tableimg">
//             <img src="${item.img || 'https://picsum.photos/200/300'}" alt="Logo" />
//           </div> 
//         </td>
//          <td class="align">
//           <div class="tableimg" style="background-color: ${item.bgcolor || "#ffffff"};">
//           </div>
//         </td>
//         <td class="align">${item.header || "No header"}</td>
//                 <td class="align">${item.txt || "No txt"}</td>

//         <td class="align">
//           <button class="border-0 p-1 ps-2 pe-2 btn-danger rounded-pill shadow-none delete-course" data-id="${item.id}">Delete</button>
//         </td>
//       </tr>`;
//     courseTableData.innerHTML += courseRow;
//   });

//   document.querySelectorAll(".delete-course").forEach((btn) =>
//     btn.addEventListener("click", (e) => {
//       const id = e.target.dataset.id;
//       deleteCourse("/courses", id); 
//     })
//   );
// };

// createCourseForm?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fileReader = new FileReader();
//   fileReader.onload = () => {
//     const payload = {
//       id: crypto.randomUUID(),
//       txt: ctext.value,
//       header: cheader.value,
//       bgcolor: bgcolor.value,
//       img: fileReader.result,
//     };
//     createCourse("/courses", payload); 
//   };
//   fileReader.readAsDataURL(courseImg.files[0]); 
// });

// refreshCourse(); 
////////////////////////////////////////////////////////////////////////////////////

const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 3000,
  });
  
  const accordtabledata = document.getElementById("accordtabledata");
  const changeform = document.getElementById("changeforms");
  const title = document.getElementById("title");
  const text = document.getElementById("info");
  const id = document.getElementById("id");
  
  const fetchaccordData = async (url) => {
    try {
      const res = await instance.get(url);
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  
  const updateData = async (id, updatedData) => {
    try {
      await instance.put(`/accordionData/${id}`, updatedData);
      alert("Məlumat uğurla dəyişdirildi!");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Məlumatı dəyişmək mümkün olmadı.");
    }
  };
  
  const deleteCourse = async (url, id) => {
    try {
      await instance.delete(`${url}/${id}`);
      alert("Məlumat uğurla silindi!");
      refresh();
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Məlumatı silmək mümkün olmadı.");
    }
  };
  
  const refresh = async () => {
    const data = await fetchaccordData("/accordionData");
    renderAccordion(data);
  };
  
  const renderAccordion = (data) => {
    accordtabledata.innerHTML = "";
    data.forEach((item) => {
      const courseRow = `
        <tr>
          <th scope="row">${item.id}</th>
          <td>${item?.title || "No header"}</td>
          <td>${item?.description || "No txt"}</td>
          <td>
            <button style="background-color:#560319;color:white;" class="border-0 p-1 ps-2 pe-2 btn-danger rounded-pill shadow-none delete-faq" data-id="${item.id}">
              Delete
            </button>
          </td>
        </tr>`;
      accordtabledata.innerHTML += courseRow;
    });
  };
  
  
  accordtabledata.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-faq")) {
      const id = e.target.dataset.id; 
      deleteCourse("/accordionData", id);
    }
  });
  
  changeform?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!id.value.trim()) {
      alert("ID sahəsi boş buraxılıb.");
      return;
    }
    if (!title.value.trim()) {
      alert("Başlıq sahəsi boş buraxılıb.");
      return;
    }
    if (!text.value.trim()) {
      alert("Təsvir sahəsi boş buraxılıb.");
      return;
    }
  
    const data = await fetchaccordData("/accordionData");
    const matchingItem = data.find((item) => item.id === String(id.value.trim()));
  
    if (matchingItem) {
      const updatedData = {
        ...matchingItem,
        title: title.value.trim(),
        description: text.value.trim(),
      };
  
      await updateData(matchingItem.id, updatedData);
      refresh();
    } else {
      alert("Bu ID ilə uyğun məlumat tapılmadı.");
    }
  });
  
  refresh(); 
  