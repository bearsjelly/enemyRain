// class Enemy {
  
// }






const enemy = document.querySelector('.enemy');
const div = document.querySelector('#bg');

enemy.style.top = 0 +"px";

function copy(){
    const divNew = document.createElement('div');
    divNew.classList.add('enemy');
    div.appendChild(divNew);
    const random = Math.floor((Math.random()*(750 - 10 + 1)) + 10);
    divNew.style.left = random+"px";
    
    rain = () => {
        setInterval(() => {
            if(parseInt(enemy.style.top) < 520){
                enemy.style.top = (parseInt(enemy.style.top)+40)+"px";
            }
            // console.log(enemy.style.top)
            if(parseInt(enemy.style.top) >= 520){
                enemy.style.backgroundPosition = "-45px 0";
                setTimeout(()=>{
                //enemy.style.display ="none";
                enemy.remove();
                }, 300);
            }
        }, 300)
    }
    rain()
}

setInterval(copy, 400)

// function rain(){
//     if(parseInt(enemy.style.top) < 520){
//         enemy.style.top = (parseInt(enemy.style.top)+40)+"px";
//     }
//     // console.log(enemy.style.top)
//     if(parseInt(enemy.style.top) >= 520){
//         enemy.style.backgroundPosition = "-45px 0";
//         setTimeout(()=>{
//         //enemy.style.display ="none";
//         enemy.remove();
//         }, 300);
//     }
// }

// setInterval(rain, 400);





