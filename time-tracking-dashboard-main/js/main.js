'use strict';

const data =[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];

const day = document.getElementById('daily');
const week = document.getElementById('weekly');
const month = document.getElementById('monthly');
const buttons = [day, week, month];

const activities = 
Array
  .from(document.querySelectorAll('article'))
  .filter(article => !article.classList.contains('user'));

const timeFields = Array.from(document.querySelectorAll('.tracked-time'));

function displayTime(current, previous, time = "day"){
  const actualTime = `${current}hrs`;
  let prevTime;
  if(time==="day"){
    prevTime = ` Yesterday - ${previous}hrs`;
  }else if(time === "month"){
    prevTime = ` Last Month - ${previous}hrs`;
  }else if(time === "week"){
    prevTime = ` Last Week - ${previous}hrs`;
  }
  const p = document.createElement('p');
  const span = document.createElement('span');
  p.textContent = actualTime;
  span.textContent = prevTime;
  p.classList.add('actual-time');
  span.classList.add('previous-time');
  p.appendChild(span);
  return p;
}

//
function dayByDefault(){
  timeFields.forEach((field, index)=>{
    const curr = data[index].timeframes.daily.current;
    const prev = data[index].timeframes.daily.previous;
    field.appendChild(displayTime(curr, prev))
  })
}

dayByDefault();


day.addEventListener('click', ()=>{
  day.classList.add('active');
  week.classList.remove('active');
  month.classList.remove('active');
  timeFields.forEach((field, index)=>{
    field.textContent = ""
    const curr = data[index].timeframes.daily.current;
    const prev = data[index].timeframes.daily.previous;
    field.appendChild(displayTime(curr, prev))
  })
});

week.addEventListener('click', ()=>{
  day.classList.remove('active');
  week.classList.add('active');
  month.classList.remove('active');
  timeFields.forEach((field, index)=>{
    field.textContent = ""
    const curr = data[index].timeframes.weekly.current;
    const prev = data[index].timeframes.weekly.previous;
    field.appendChild(displayTime(curr, prev, 'week'))
  })
});

month.addEventListener('click', ()=>{
  day.classList.remove('active');
  week.classList.remove('active');
  month.classList.add('active');
  timeFields.forEach((field, index)=>{
    field.textContent = ""
    const curr = data[index].timeframes.monthly.current;
    const prev = data[index].timeframes.monthly.previous;
    field.appendChild(displayTime(curr, prev, 'month'))
  })
});