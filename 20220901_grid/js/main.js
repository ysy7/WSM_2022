// 현재 년, 월, 일 알아내자 
let today = new Date();
year = today.getFullYear();
month = today.getMonth();
date = today.getDate();

// 현재 월 마지막 날?
let lastDate = new Date(year,month +1,0).getDate();  //현재 월의 마지막날: 다음날의 0일

// 현재 월 1일은 무슨 요일?
let firstDay = new Date(year, month, 1).getDay();

console.log(`${year}년 ${month + 1}월 ${date}일 ${lastDate}, ${firstDay}`);