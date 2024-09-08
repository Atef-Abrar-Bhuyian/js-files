const mark=101;

mark < 0 || mark > 100 ? 
console.log("Invalid Marks!!!") : 
mark >= 90 && mark <= 100 ? 
console.log("Grade A") : 
mark >=80 && mark <= 89 ? 
console.log("Grade B") : 
mark >= 70 && mark <= 80 ? 
console.log("Grade C") : 
mark  >= 60 && mark <=69 ? 
console.log("Grade D") : 
console.log("Grade F");