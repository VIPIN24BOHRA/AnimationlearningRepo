

setTimeout(animation,4200);

 function animation (){
    let i=0;
    let text="I am a Software developer and a Competitive programmer";
    
    let len=text.length;
    let interval=setInterval(() => {
       
    document.getElementById("text").innerHTML+=text[i];
    i++;
    if(i==len){
       clearInterval(interval);

    }

 },100);
 }

 