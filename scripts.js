// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
let myBtn = document.getElementById("takeoff");
myBtn.addEventListener('click', function(){
   window.confirm( "Confirm that the shuttle is ready for takeoff.")
   let status = document.getElementById("flightStatus");
   status.innerText = "Shuttle in flight."
   let backgrd = document.getElementById("shuttleBackground");
   backgrd.style.backgroundColor = "blue";
   let position = document.getElementById("spaceShuttleHeight");
    position.innerHTML=parseInt(position.innerHTML)+10000;
    let land = document.getElementById("landing");
    land.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML ="The shuttle has landed";
        backgrd.style.backgroundColor = "green";
        position.innerHTML=0;
    })

    let abort = document.getElementById("missionAbort");
    abort.addEventListener('click', function(){
        let text = window.confirm("Confirm that you want to abort the mission");
        if(text === true)
        {
        status.innerHTML ="The shuttle has landed";
        backgrd.style.backgroundColor = "green";
        position.innerHTML=0;
        }
    });
    
});
});

