// class Enemy {
//   constructor(){
    
//   }
//   move(

//   )
// }




// const enemy = document.querySelector('.enemy');


//enemy.style.top = 0 +"px";



// function rain(enemy){
//     console.log(enemy);
//     if(parseInt(enemy.style.top)< 520){
//         console.log(parseInt(enemy.style.top));
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


// function rain(){
//     let GhostDownUnit = 50;
//     let GhostNumberPx = window.getComputedStyle(divNew).top;
//     let GhostNumberString = GhostNumberPx.replace(/[^0.1-9]/g,"");
//     let GhostNumberType = GhostNumberString*1; //스트링을 넘버로 변환
//     let GhostDownNumberType = GhostNumberType + GhostDownUnit;
//     if (GhostDownNumberType > 546){
//         GhostDownNumberType = 546;
//         GhostBoom();           //고스트터짐 펑션실행
//     }
//     let GhostDownPx = GhostDownNumberType + "px";
//    divNew = GhostDownPx;
// }

// function copy1(){
//     console.log(1111);
//     const divNew = document.createElement('div');
//     divNew.classList.add('enemy');
//     div.appendChild(divNew);
//     const random = Math.floor((Math.random()*(750 - 10 + 1)) + 10);
//     divNew.style.left = random+"px";
//    /// console.log(rain);
//    setInterval(rain, 400);
// }
// setInterval(copy1, 3000)
// setInterval(rain, 400);
// const div = document.querySelector('#bg');

// function enemyCopy(){
//     let divNew = document.createElement('div');
//     divNew.classList.add('enemy');
//     div.appendChild(divNew);
//     const random = Math.floor((Math.random()*(750-10+1))+10);
//     divNew.style.left = random+"px";
//     setInterval(rain,(Math.random()*(500-250))+350);
//     function rain(){
//         const DownPx = 10;
//         const ghostPx = window.getComputedStyle(document.querySelector('.enemy'),"").top;
//         const ghostString = ghostPx.slice(0,ghostPx.length-2);
//         const ghostType = ghostString*1;
//         const ghostDownType = ghostType + DownPx;
//         const ghostDownPx = ghostDownType+"px";
//         divNew.style.top = ghostDownPx;
//         console.log(divNew);
//         if(divNew.style.top === "520px"){
//             divNew.remove();
//         }

//     }
// }


// setInterval(enemyCopy,3000);

const div = document.querySelector('#bg');

function enemyCopy(){
    let divNew = document.createElement('div');
    divNew.classList.add('enemy');
    div.appendChild(divNew);
    const random = Math.floor((Math.random()*(750-10+1))+10);
    divNew.style.left = random+"px";
    setInterval(rain,1000);
    function rain(){
        const DownPx = 40;
        const ghostPx = divNew.offsetTop;
        const ghostDownType = ghostPx + DownPx;
        const ghostDownPx = ghostDownType+"px";
        divNew.style.top = ghostDownPx;
        if(divNew.style.top === "560px"){
            divNew.style.backgroundPosition = "-45px 0";
            //divNew.remove();
            setTimeout(()=>{
                divNew.remove();
            },1000)
        }

    }
}


setInterval(enemyCopy,3000);






