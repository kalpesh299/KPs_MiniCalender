const month=document.getElementById("month");
const day=document.getElementById("day");
const dat=document.getElementById("dat");
const year=document.getElementById("year");
console.log(year);

const months=[ " ","Jan","Feb","March","April","May","June","Jully","Aug","Sep",
"Oct",
"Nov",
"Dec"];

const days=["Sun","Monday","Tuesday","Wendsday","Thurstday","Friday","Sat"];
  

const date=new Date();

month.innerText=months[date.getMonth()];
day.innerText=days[date.getDay()];
dat.innerText=date.getDate();
year.innerText=date.getFullYear();

console.log(date.getFullYear());
// console.log(months[date.getMonth()]);
console.log(date.getDate());
// console.log(days[date.getDay()]);
