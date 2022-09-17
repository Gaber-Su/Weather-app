// https://api.weatherapi.com/v1/current.json?key=5653b4a08fda490d8da130413220106&q=Cairo

let searchbox = document.querySelector("#search");

let myHttp = new XMLHttpRequest();
let dataList = {};

searchbox.addEventListener("keyup", search)


myHttp.open("GET", `http://api.weatherapi.com/v1/forecast.json?key=8b607851ab6948a8869174658220106&days=3&q=London`); // to display one City
myHttp.send();

myHttp.addEventListener("readystatechange", function () {
  if (myHttp.readyState == 4 && myHttp.status == 200) {
    dataList = JSON.parse(myHttp.response)
    display()
    console.log(myHttp.readyState)
  }
})


function display() {
  let days = dataList.forecast.forecastday
  const DayDate1 = new Date(`${days[0].date}`);
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let DayMonth = month[d.getMonth()];
  var weekday = new Array(7);
  weekday[0] = "Monday";
  weekday[1] = "Tuesday";
  weekday[2] = "Wednesday";
  weekday[3] = "Thursday";
  weekday[4] = "Friday";
  weekday[5] = "Saturday";
  weekday[6] = "Sunday";
  const dday1 = new Date(`${days[0].date}`);
  let day1 = dday1.getDay()
  const dday2 = new Date(`${days[1].date}`);
  let day2 = dday2.getDay()
  const dday3 = new Date(`${days[2].date}`);
  let day3 = dday3.getDay()
  let temp = ""
  temp = `
  
  
  
  <div class="col-md-4">
  <div class="item p-3">
    <div class="date d-flex justify-content-between fs-5 fw-bold rounded-start rounded-end text-white px-1">
      <p class="day">${weekday[day1 - 1]}</p>
      <p class="month">${DayDate1.getDate()}${DayMonth}</p>
    </div>

    <div class="info d-flex justify-content-center fs-5 text-white text-centre">
      <div>
        <img src="${dataList.current.condition.icon}" alt="">
        <p class="temp">${dataList.current.temp_c}<span>&#8451;</span></p>
        <p class="location">${dataList.location.name}</p>
        <p class="tempr">${dataList.current.condition.text}</p>
      </div>
    </div>
   
    <div class="icons  text-white">
    <ul class="list-unstyled d-flex justify-content-around">
        <li><img src="images/icon-umberella.png" alt=""> ${Math.floor(dataList.current.pressure_in)}%</li>
        <li><img src="images/icon-wind.png" alt=""> ${Math.floor(dataList.current.vis_km)}km/h</li>
        <li><img src="images/icon-compass.png" alt=""> ${dataList.current.wind_dir}</li>
    </ul>
</div>
  </div>    
</div>


<div class="col-md-4">
  <div class="item p-3">
    <div class="date d-flex justify-content-between fs-5 fw-bold rounded-start rounded-end text-white px-1 text-centre">
      <p class="day">${weekday[day2 - 1]}</p>
    </div>

    <div class="info d-flex justify-content-center fs-5 fs-5 text-white pb-5">
      <div>
      <img src="${days[1].day.condition.icon}" alt="">
        <p class="temp">${days[1].day.maxtemp_c}<span>&#8451;</span>
        <p class="sec-degree">
            ${days[1].day.mintemp_c}<span>&#8451;</span>
            </p>
            <p class="tempr">${days[1].day.condition.text}</p>
      </div>
    </div>
  
   
  </div>    
</div>


<div class="col-md-4">
  <div class="item p-3">
    <div class="date d-flex justify-content-between fs-5 fw-bold  rounded-start rounded-end text-white px-1">
      <p class="day">${weekday[day3 - 1]}</p>
    </div>

    <div class="info d-flex justify-content-center fs-5  text-white pb-5">
      <div>
      <img src="${days[2].day.condition.icon}" alt="">
        <p class="temp">${days[2].day.maxtemp_c}<span>&#8451;</span></p>
        <p class="sec-degree">
            ${days[2].day.mintemp_c}<span>&#8451;</span>
            </p>
            <p class="tempr">${days[2].day.condition.text}</p>
      </div>
    </div>
   
  </div>    
</div>
  

  
  `
  document.getElementById("dataShow").innerHTML = temp
}




function search() {
  let searchValueInput = searchbox.value

  myHttp.open("GET", `http://api.weatherapi.com/v1/forecast.json?key=8b607851ab6948a8869174658220106&days=3&q=${searchValueInput}`);
  myHttp.send();

  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
      dataList = JSON.parse(myHttp.response)
      display()
      console.log(myHttp.readyState)
    }
  })

}

