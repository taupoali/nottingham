let d = new Date();
let time =d.getHours();
console.log(time,"h");

if (time < 12){
    console.log("Good Morning");
} 
else if (time >= 12 && time < 18) {
        console.log("Good Afternoon");
}
else {
        console.log("Good Evening");
    }
