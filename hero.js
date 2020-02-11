// class Hero {
  
// }
const body = document.querySelector('body');
const hero = document.querySelector('#hero');
hero.style.left = 350+"px";
hero.style.top = 520+"px";

body.addEventListener('keydown',function(event){

    console.log(event);
// console.log(hero.style.left)
// console.log(parseInt(hero.style.left))
    if(event.keyCode == 37){
        // hero.style.left = (parseInt(hero.style.left)-30)+"px";
        
        // hero.style.backgroundPosition ="-70px 0";
        goLeft();
        
        // hero.style.left = (parseInt(hero.style.left)-30)+"px";
        // hero.style.backgroundPosition ="-70px 0";
        // hero.style.left = (parseInt(hero.style.left)-10)+"px";
        console.log(parseInt(hero.style.left));
        
    }else if(event.keyCode == 39){
        // hero.style.backgroundPosition ="-105px 0";
        // hero.style.left = (parseInt(hero.style.left)+30)+"px";
        goRight();
        console.log(hero.style.left);
    }
    // else if(event.keyCode == 38){
    //     hero.style.backgroundPosition ="-35px 0";
    //     hero.style.bottom = (parseInt(hero.style.bottom)+30)+"px";
    //     console.log(parseInt(hero.style.bottom));
    // }else if(event.keyCode == 40){
    //     hero.style.backgroundPosition ="0 0";
    //     hero.style.bottom = (parseInt(hero.style.bottom)-30)+"px";
    // }

})

function goLeft(){
    hero.style.left = (parseInt(hero.style.left)-30)+"px";
     hero.style.backgroundPosition ="-70px 0";     
     if(parseInt(hero.style.left) < -10){
         goRight();
     }
}

function goRight(){
    hero.style.backgroundPosition ="-105px 0";
    hero.style.left = (parseInt(hero.style.left)+30)+"px";
    if(parseInt(hero.style.left) > 770){
        goLeft();
    }
}


