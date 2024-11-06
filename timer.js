const endDate= "04 May 2024 00:07:20";
document.getElementById("endDate").innerText=endDate;
const end= new Date(endDate);
function clock(){
    setInterval(()=>{
        const now= new Date();
    const remainDiff=end-now;
    if(remainDiff <= 0){
        const greet="Happy Birthday ABC";
        document.querySelector("#greeting").innerText=greet;
        clearInterval(timer);
    }
    else{
    const msSeconds= 1000;
    const msMinutes= msSeconds*60;
    const msHours= msMinutes*60;
    const msDays= msHours*24;

    let diff=remainDiff;
    const Days= Math.floor(diff/msDays);
    diff=diff%msDays;
    const Hours= Math.floor(diff/msHours);
    diff=diff%msHours;
    const Minutes= Math.floor(diff/msMinutes);
    diff=diff%msMinutes;
    const Seconds=Math.floor(diff/msSeconds);

    document.querySelector(".daysLeft").innerText=Days;
    document.querySelector(".hoursLeft").innerText=Hours;
    document.querySelector(".minutesLeft").innerText=Minutes;
    document.querySelector(".secondsLeft").innerText=Seconds;
    }
},1000)
}

clock();