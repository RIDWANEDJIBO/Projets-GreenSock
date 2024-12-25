const container=document.querySelector('.container');
const container_title=document.querySelector('.container-title');
const content=document.querySelector('.content');
const h2=document.querySelector('.container-title h2')

window.addEventListener('load',funcAnim);


function funcAnim(){
    const TL=gsap.timeline();

    TL.to(container_title,{height:'80%',duration:1.3,delay:0.4})
    .to(h2,{y:0,duration:1},"-=0.8")
    .to(container_title,{autoAlpha:0,delay:0.2,duration:0.6,
        aonComplete:()=>{
            TL.to(container,{autoAlpha:0,duration:0.6,delay:0.4}),
            TL.to(content,{autoAlpha:1,delay:0.2,duration:0.4})
        }

    },2)

    


}





