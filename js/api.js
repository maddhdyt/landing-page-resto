fetch('https://restaurant-api.dicoding.dev/list', {
  method: 'GET' // Explicitly specifying the GET method
}).then((data) => {
  return data.json();
}).then((completedata) => {
  // Check if the 'restaurants' property exists and is an array
  if (Array.isArray(completedata.restaurants)) {
    const firstThreeRestaurants = completedata.restaurants.slice(0, 3);
    const HeaderRestaurant = completedata.restaurants.slice(3, 3);
    let data1 = "";
    let data2 = "";
    firstThreeRestaurants.map((values) => {
      data1 += ` <div id="cards" class="resto col-span-1">
			<img src="https://restaurant-api.dicoding.dev/images/medium/${values.pictureId}" class="w-full h-full object-cover">
      <div class="p-5 w-full absolute bottom-0">
        <div class="flex justify-between p-5 bg-slate-100 rounded-3xl cursor-default">
          <div class="resto-desc">
            <div class="flex items-center">
              <img src="assets/images/Star.svg" class="mr-1"><span class="font-semibold text-yellow-500 text-base mt-1">5.0</span><span class="text-sm text-slate-500 ml-1 mt-[2px]">(7.6K+)</span>
            </div>
            <h5 class="font-semibold text-lg text-slate-800 mt-1">${values.name}</h5>
            <div class="flex items-center text-slate-600 mt-1">
              <i class='bx bxs-map text-xl'></i><span class="ml-1">${values.city}</span>
            </div>
          </div>
          <div class="resto-button flex items-center justify-end">
            <a href="#" class="flex justify-center items-center w-[36px] h-[36px] bg-main rounded-xl">
              <i class='bx bx-right-arrow-alt text-2xl mr-[2px]'></i>
            </a>
          </div>
        </div>
      </div>
	  </div>
	  `;
    });
    HeaderRestaurant.map((values) => {
      data2 += `<p>${values.name}</p>`
    })
    document.getElementById('cards').innerHTML = data1;
    document.getElementById('header-resto').innerHTML = data2;
  } else {
    console.log("Error: 'restaurants' property is not an array");
  }
}).catch((err) => {
  console.log(err);
});


const restoItems = document.getElementsByClassName("resto");
const restoDesc = document.getElementsByClassName("resto-desc");
const restoBtn = document.getElementsByClassName("resto-button");

function handleMouseOver(index) {
  for (let i = 0; i < restoItems.length; i++) {
    if (i === index) {
      restoItems[i].classList.remove("lg:col-span-3");
      restoItems[i].classList.add("lg:col-span-5");
      restoDesc[i].classList.remove("hidden");
      restoBtn[i].classList.remove("w-full", "justify-center");
      restoBtn[i].classList.add("justify-end");
    } else {
      restoItems[i].classList.remove("lg:col-span-5");
      restoItems[i].classList.add("lg:col-span-3");
      restoDesc[i].classList.add("hidden");
      restoBtn[i].classList.remove("justify-end");
      restoBtn[i].classList.add("w-full", "justify-center");
    }
  }
}

for (let i = 0; i < restoItems.length; i++) {
  restoItems[i].addEventListener("mouseover", function () {
    handleMouseOver(i);
  });
}