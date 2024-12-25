const links=document.querySelectorAll('li')
const title=document.querySelector('h1')
const line=document.querySelector('.line')
const text=document.querySelector('p')
const btn=document.getElementById('btn')


const TL=gsap.timeline()


TL.to(title,{y:20,autoAlpha:1, delay:0.2})
TL.to(line,{height:'200px',marginTop:'1rem'},'-=0.2')
TL.to(text,{autoAlpha:1},'-=0.2')
TL.to(btn,{autoAlpha:1},'-=0.2')
TL.to(links,{y:0,autoAlpha:1,duration:0.4,stagger:0.1},'-=0.2')

