const previous=document.getElementById('previous');
const next=document.getElementById('next');
const slide = Array.from(document.querySelectorAll('.slide'))
const container=document.querySelector('.container')


window.addEventListener('load',()=>{

    let index=0

   function slideRight(){
        const TLRight=gsap.timeline({
            defaults:{duration:1}
        })
        
        TLRight
        .to(slide[index],{
            duration:0.6,
            ease:"power",
            x:0
        })
    }

   function slideLeft(){
        const TLLeft=gsap.timeline({
            defaults:{duration:1}
        })
        TLLeft
        .to(slide[index],{
            duration:0.6,
            ease:"power",
            x:'-100%'
        })
    }


   const negation=gsap.set(container,{
    paused:true,
    keyframes: [
        { duration: 0.1, x: -4 },
        { duration: 0.1, x: 4 },
        { duration: 0.1, x: -4 },
        { duration: 0.1, x: 0 },
      ],
   })


   function slideDirection(direction){
    if(direction==='next'){
        if(index==2){
            negation.seek(0)
            negation.play()

            return;
        }
        else{
           index++
           slideRight() 
        }
    }
    else if(direction==='prev'){
        if(index==0){
            negation.seek(0)
            negation.play()

            return;
        }
        else{
            slideLeft();
            index--;
        }
    }

   }

    
    next.addEventListener('click',()=>{
        slideDirection('next')  
            
    })
           
    previous.addEventListener('click',()=>{
        slideDirection('prev')
    })



// console.log(slide)




})

