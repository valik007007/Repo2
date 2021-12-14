'use strict'

var employeeSalaries = {
	FirstEmployee: 1500,
	SecondEmployee: 3400,
	ThirdEmployee: 4000
	
}

//first variant with if-else

if(employeeSalaries != null ){
	
	console.log("Amount salaries: ===> " + (employeeSalaries.FirstEmployee+employeeSalaries.SecondEmployee+employeeSalaries.ThirdEmployee));
}else if(employeeSalaries == null){
	console.log('0');
}else{
	console.log('Doesnt exis!!!')
}

//second variant with for 

var sum = 0;

for(var key in employeeSalaries){
	sum +=employeeSalaries[key];
}

console.log("Amount salaries: ===> " + sum);