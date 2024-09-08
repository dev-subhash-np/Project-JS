const bulb = document.querySelector(".bulb");
const onoff = document.querySelector(".switch");
var logic = 0

onoff.addEventListener('click',()=>{
    if (logic == 0) {
        bulb.style.background = "yellow"; // Turn on the light
        bulb.style.boxShadow = `
        0 0 20px 10px rgba(255, 255, 0, 0.6), 
        0 0 40px 20px rgba(255, 255, 0, 0.5), 
        0 0 80px 40px rgba(255, 255, 0, 0.4)`; // Add the shadow
        logic = 1
        onoff.innerHTML = "off"
          
    } else {
        bulb.style.background = "transparent"; // Turn on the light
        bulb.style.boxShadow = "";
        logic = 0
        onoff.innerHTML = "on"
    }
   
})