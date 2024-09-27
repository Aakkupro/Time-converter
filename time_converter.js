const input = require('readline-sync');
let time = input.question("Enter time (12-hour AM/PM or 24-hour format): ");
 
if(time.includes("AM") || time.includes("PM")){
    let time_split = time.split(":");
    let hours = parseInt(time_split[0]);
    let [min, n] = time_split[1].split(" ");
     n = n.toUpperCase();
    if(n === "AM" && hours === 12){
            hours = 0;
        } 
    else if(n === "PM" && hours < 12){
            hours += 12;
        }
    console.log(`24-hour format: ${hours}:${min}`);
    
}
else{
    let time_split = time.split(":");
    let hours = parseInt(time_split[0]);
    let minutes = time_split[1];
    let seconds = hours >= 12 ? "PM" : "AM";
    
    hours = hours%12 || 12
    
    console.log(`12-hour format: ${hours}:${minutes} ${seconds}`);
}
