const percentButton=document.querySelector("#percentButton")
const ceButton=document.querySelector("#ceButton")
const cButton=document.querySelector("#cButton")
const deleteButton=document.querySelector("#deleteButton")

const x1Button=document.querySelector("#x1Button")
const squarex=document.querySelector("#squarex")
const cubex=document.querySelector("#cubex")
const divisionButton=document.querySelector("#divisionButton")

const button7=document.querySelector("#button7")
const button8=document.querySelector("#button8")
const button9=document.querySelector("#button9")
const multiplyButton=document.querySelector("#multiplyButton")

const button4=document.querySelector("#button4")
const button5=document.querySelector("#button5")
const button6=document.querySelector("#button6")
const subtractionButton=document.querySelector("#subtractionButton")

const button1=document.querySelector("#button1")
const button2=document.querySelector("#button2")
const button3=document.querySelector("#button3")
const additionButton=document.querySelector("#additionButton")

const modulus=document.querySelector("#modulus")
const button0=document.querySelector("#button0")
const decimal=document.querySelector("#decimal")
const equateButton=document.querySelector("#equateButton")

const inputArea=document.querySelector("#inputArea")


let string1=""
let string2=""



divisionButtonValue=false;
equateButtonValue=false;
additionButtonValue=false;
subtractionButtonValue=false;
multiplyButtonValue=false;



button0.addEventListener("click",()=>{
    string1=string1+"0"
    inputArea.innerText=string1
})

button1.addEventListener("click",()=>{
    string1=string1+"1"
    inputArea.innerText=string1
})

button2.addEventListener("click",()=>{
    string1=string1+"2"
    inputArea.innerText=string1
})

button3.addEventListener("click",()=>{
    string1=string1+"3"
    inputArea.innerText=string1
})

button4.addEventListener("click",()=>{
    string1=string1+"4"
    inputArea.innerText=string1
})

button5.addEventListener("click",()=>{
    string1=string1+"5"
    inputArea.innerText=string1
})

button6.addEventListener("click",()=>{
    string1=string1+"6"
    inputArea.innerText=string1
})

button7.addEventListener("click",()=>{
    string1=string1+"7"
    inputArea.innerText=string1
})

button8.addEventListener("click",()=>{
    string1=string1+"8"
    inputArea.innerText=string1
  
})

button9.addEventListener("click",()=>{
    string1=string1+"9"
    inputArea.innerText=string1
       
})


inputArea.classList.add("design")
let num1=0;
let num2=0;    


divisionButton.addEventListener("click",()=>{
    divisionButtonValue=true;
    inputArea.innerText="";
    num1=parseInt(string1)
    string1=""
})
multiplyButton.addEventListener("click",()=>{
    multiplyButtonValue=true;
    inputArea.innerText="";
    num1=parseInt(string1)
    string1=""
})
subtractionButton.addEventListener("click",()=>{
    subtractionButtonValue=true;
    inputArea.innerText="";
    num1=parseInt(string1)
    string1=""
})
additionButton.addEventListener("click",()=>{
    additionButtonValue=true;
    inputArea.innerText="";
    num1=parseInt(string1)
    string1=""
})
let solution1;
equateButton.addEventListener("click",()=>{
    num2=parseInt(string1)
    equateButtonValue=true;
    if(equateButtonValue===true){
    if(additionButtonValue===true){
        solution1=num1+num2
        additionButtonValue=false   
        equateButtonValue=false 
     }
    else if(subtractionButtonValue===true){
        solution1=num1-num2
        subtractionButtonValue=false
        equateButtonValue=false
     }
    else if(multiplyButtonValue===true){
        solution1=num1*num2
        multiplyButtonValue=false
        equateButtonValue=false
     }
    else if(divisionButtonValue===true){
        solution1=num1/num2
        divisionButtonValue=false
        equateButtonValue=false
     }
    }
    inputArea.innerText=`${solution1}`
})
               


                                                                                                                                
