let msg=document.querySelector(".msg");
let input=document.querySelector(".input");
let button=document.querySelector(".button");
const words = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Grapes", "Strawberry"];
let newWords="";
let randomWords="";
let play=false;


let createWords=()=>{
    let random=Math.floor(Math.random()* words.length);
    let tempWords=words[random];
    return tempWords;

}
let scramble=(arr)=>{
for (let i=arr.length-1; i>0; i--){
    let temp=arr[i];
    let j=Math.floor(Math.random()*(i+1));
    arr[i]=arr[j];
    arr[j]=temp;    
}
 return arr;
}



button.addEventListener("click",()=>{
  if(!play){
    play=true;
    input.style.display="block";
    input.style.margin="5vh";
    button.innerHTML="Guess";
    button.style.width="30%"
    newWords=createWords ();
 randomWords=scramble(newWords.split("")).join("");
 msg.innerHTML=`Guess The Word : ${randomWords}`;
}

  else{

    let tempWord=input.value;
    if(tempWord=== newWords){
        // console.log("correct")
        play=false;
         msg.innerHTML=`Awesome its correct it is  ${newWords}`;
         msg.style.padding="25px"
         msg.style.fontSize="30px"
         button.innerHTML='Start Again';
         input.style.display="none"
         input.value="";
         
    }else{
        console.log("incorrecct");
        msg.innerHTML=`its incorrect please try again : ${randomWords}`
    }

  }

})




