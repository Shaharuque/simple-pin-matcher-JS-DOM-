
function generateRandomNumber(){
    //4-digit number generation
    const randomNumber= Math.round(Math.random()*10000)
    const convertedToString=randomNumber+ ''
    if(convertedToString.length==4){
        return randomNumber
    }
    else{
        return generateRandomNumber()
    }
}

function generatePin(){
   const randomNum=generateRandomNumber()
   //console.log(randomNum)
   //displaying random number to the display screen
   const randomNumberDisplayText=document.getElementById("randomNumber-display")
   randomNumberDisplayText.value=randomNum
}

document.getElementById('key-pad').addEventListener('click',function(event){
    // console.log(event.target.innerText)
    const pressedNumberDisplayText=document.getElementById('pressed-number-display') 
    const previousPressed=pressedNumberDisplayText.value
    const pressedNumber=event.target.innerText
    // console.log(previousPressed)
    if(isNaN(pressedNumber)){//pressed number jodi number na hoy tahley seita display tey show hobey na remember in JS: '01' is a number but 'hello' is not a number
        if(pressedNumber=='C'){
            pressedNumberDisplayText.value=''   //clear the display
        }     
    }
    else{
        const newPressed=previousPressed+pressedNumber
        pressedNumberDisplayText.value=newPressed
    }
    
})

//submit button click event handler
document.getElementById('submit-btn').addEventListener('click',function(){
    // console.log("clicked")
    const pinDisplayText=document.getElementById('randomNumber-display')
    const generatedPin=pinDisplayText.value
    console.log(generatedPin)
    const keyPadText=document.getElementById('pressed-number-display')
    const keyPadNumber=keyPadText.value
    console.log(keyPadNumber)

    const success=document.getElementById('success-massege')
    console.log(success)
    const failure=document.getElementById('failur-massege')
    console.log(failure)
    if(generatedPin==keyPadNumber){ //success massege will be shown if pin and number matched
         success.style.display='block'
         failure.style.display='none'
        
    }
    else{
        success.style.display='none'
         failure.style.display='block'
        
    }
    
})