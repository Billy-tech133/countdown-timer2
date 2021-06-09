const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.give-away')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')


let futureDate = new Date(2021, 5, 15, 11, 30, 0);

const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()]
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();


giveaway.textContent =  `giveaway ends on ${weekday}, 
${date} ${month} ${year} at ${hour}:${minute}am`

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const currentTime = new Date();
  const time = futureTime - currentTime;
  const oneDay = 24*60*60*1000;
  const onehour = 60*60*1000;
  const oneMinute = 60*1000;
  const day = Math.floor(time/oneDay);
  const hour = Math.floor((time % oneDay) / onehour);
  const minute = Math.floor((time % onehour) / oneMinute);
  const second = Math.floor((time % oneMinute) / 1000);
  const values = [day,hour,minute,second]

  function format(item) {
    if(item < 10) {
      return item =  `0${item}`
    }
    return item;
  }
  items.forEach(function(item,index) {
    item.innerHTML= format(values[index])
  })
  //countdown
  if(time < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();