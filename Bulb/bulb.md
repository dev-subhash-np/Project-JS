## html code
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulb</title>
    <style>
body{
    height: 90vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    flex-direction: column;
}
.bulb{
    height: 200px;
    width: 200px;
    border: 1px solid yellow;
    border-radius: 50%;
}
.switch{
    font-weight: 800;
    cursor: pointer;
    margin: 10vh;
    padding: 10px;
    color: #000;
}
    </style>
</head>

<body>
    <div class="bulb"></div>
    <button class="switch">ON</button>
    <script src="script.js"></script>
</body>

</html>
```





## javascript code

```
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

```