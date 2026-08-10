/*
console.log mostly used fof debugging by 
printing out information to the screen 

console.log -> ensure you write your consoles in such 
a way that they help you figure out the issue 

->simple exercise from a gross salary
-> lets calculate the net salary

*/
const sallaryGross = 50000; //instruction
//console.log(sallaryGross)-> more information
console.log("Gross sallary", sallaryGross); // mopre helpful
//tax calculations
const paye = sallaryGross * 0.16;
console.log("for salary of ", sallaryGross, " paye is", paye);
//->
const nhif = 2500;
console.log("nhif deduction", nhif);
const sha = 2000;
console.log("sha is", sha);
const totalDeductions = paye + nhif + sha;
console.log("totalDeductions are", totalDeductions);
const netsallary = sallaryGross - totaldeductions;
console.log("your net sallary is", netsallary);
