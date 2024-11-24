'use strict';

const years= document.querySelector('.years');
const days= document.querySelector('.days');
const months= document.querySelector('.months');
const yearsResult=document.querySelector('.years-result');
const monthsResult=document.querySelector('.months-result')
const daysResult=document.querySelector('.days-result')
let result=0;

console.log(result);
class Person{
    constructor(year,month,day){
        this.year=year;
        this.month=month;
        this.day=day;
    }
    calculateAge(){
        let age ,remainingMonths,remainingDays;
        const currentDate= new Date();
        if(this.year && this.year!==0){
            age=currentDate.getFullYear() - this.year;
            if(currentDate.getMonth()+1 > this.month || this.month <= 12){
                remainingMonths= currentDate.getMonth()+1 - this.month;
            }
            else{
                age-1;
            }
            remainingDays=currentDate.getDate()-this.day;
        }
        return {age:age, months: remainingMonths, days:remainingDays}
    }

    displayResult(result){
        yearsResult.innerHTML=Math.abs(result.age);
        monthsResult.innerHTML=Math.abs(result.months);
        daysResult.innerHTML=Math.abs(result.days);

    }
}


document.addEventListener('DOMContentLoaded', ()=>{

    document.querySelector('.submit').addEventListener('click',(e)=>{
        e.preventDefault()
        const currentDate= new Date();
        if(years.value===""  || months.value === "" || days.value ===""){
            alert('Please enter all the values')
        }
        else if(years.value<=0 || months.value>12 || days.value>31){
            alert('Please enter valid values')
        }
        else if (years.value>0 && years.value<=currentDate.getFullYear() || months.value>0 || days.value>0){
            const p1= new Person(Number(years.value), Number(months.value), Number(days.value));
            result=p1.calculateAge();
            p1.displayResult(result)
        }
    })
})
