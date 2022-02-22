var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'turn light on';
document.body.appendChild(btn);
document.body.style.background = 'black';


// schijf hier tussen je code
var lightswitch = 'off'
btn.addEventListener("click", ()=>{
    if(lightswitch === 'off'){
        btn.innerHTML = "turn light off"
        lightswitch = 'on';
        document.body.style.background = 'yellow';
        console.log("light is now on")
    }else{
        btn.innerHTML = 'turn light on';
        lightswitch = 'off';
        document.body.style.background = 'black';
        console.log("light is now off")
    }
})
// schijf hier tussen je code