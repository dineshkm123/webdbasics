const forms=document.querySelector('form')
const  buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
const clock=document.getElementById('clock')
const dat=document.getElementById('date')
const guide=document.getElementById('guide')
// calculating bmi and displaying
forms.addEventListener('submit',function(e){
    e.preventDefault()  
    const height=parseInt(document.querySelector('#height').value) 
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height==='' || height<0 || isNaN(height)){
         results.innerHTML="enter the valid values"
} else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML="enter the valid values"}
    else {
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`Your BMI is ${bmi} `
        if (bmi<18.6 ){
            guide.innerHTML='Your are under weight'
        }
        else if(bmi>18.6 && bmi<24.9){
            guide.innerHTML='You have a perfect body'
        }
        else
        {
            guide.innerHTML='You are over weight'
        }
    }
});
//  displaying date and time
setInterval(function(){
    let date=new Date()
    clockid.innerHTML=date.toLocaleTimeString()
    dateid.innerHTML=date.toDateString()

},1000)

//  changing the background color manually
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if (e.target.id==='red'){

            body.style.backgroundColor='rgb(169, 88, 88)';
        }
        if (e.target.id==='blue'){

            body.style.backgroundColor='rgb(67, 67, 161)';
        }
        if (e.target.id==='grey'){

            body.style.backgroundColor='rgb(60, 57, 57)';
        }
        if (e.target.id==='green'){

            body.style.backgroundColor='rgb(81, 148, 107)';
        }
    });
});
//// dancing background colors



const randomcolor=function(){
    let color ='#';
    const hex='0123456789ABCDEF'
    for (let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }   
    return color
}
console.log(randomcolor());


let intervalId;

const startbgchange=function(){
    intervalId=setInterval(changingbgcolor,1000)
    function changingbgcolor(){
        document.body.style.backgroundColor=randomcolor()
    }
}
const  stopbgchange=function(){
    clearInterval(intervalId)
}
document.querySelector('#startbutton').addEventListener('click',startbgchange)
document.querySelector('#stopbutton').addEventListener('click',stopbgchange)

// startt.addEventListener('click',startbgchange)
// stopp.addEventListener('click',stopbgchange)


