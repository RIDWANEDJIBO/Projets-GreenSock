

window.addEventListener('load',funcAnim);


function funcAnim(){
    const TL=gsap.timeline({repeat:-1})

    TL.to('p',{
        autoAlpha:1,
        y:'0', duration:0.5,
        stagger:1

    },1)
    .to('p',{
        autoAlpha:0,
        y:'-150%',duration:0.5,
        stagger:1
        
    },2)


}
