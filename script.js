let displayScreen = document.querySelector('.display-screen');
let buttons = Array.from(document.querySelectorAll('.btn'))
buttons.map(button=>{
     button.addEventListener('click',(e)=>{
          switch(e.target.textContent){
               case 'CE':
                    displayScreen.innerText = '';
                    break;
               case 'C':
                    displayScreen.textContent = displayScreen.textContent.slice(0,-1);
                    break;
               case '=':
                    try{
                         let result = eval(displayScreen.textContent);
                         displayScreen.textContent = result;
                    }
                    catch{
                         displayScreen.textContent = 'Syntax Error';
                         setTimeout(() => {
                              displayScreen.textContent = '';
                         }, 2000);
                    }
                    break;
               default:
                    displayScreen.textContent += e.target.textContent;
          }
     })
})


















// const add = document.querySelector('.add');
// const minus = document.querySelector('.minus');
// const multiply = document.querySelector('.multiply');
// const divide = document.querySelector('.divide');
// const one = document.querySelector('.one');
// const two = document.querySelector('.two');
// const three = document.querySelector('.three');
// const four = document.querySelector('.four');
// const five = document.querySelector('.five');
// const six = document.querySelector('.six');
// const seven = document.querySelector('.seven');
// const eight = document.querySelector('.eight');
// const nine = document.querySelector('.nine');
// const zero = document.querySelector('.zero');
// let displayScreenValue = Number(document.querySelector('.display-screen').value);
// const equalsTo = document.querySelector('.equalsto');

// const operand1 = 0;
// const operand2 = 0;
// let arr = []
// let operator;

// one.onclick =()=> setNumber(1)
// two.onclick =()=> setNumber(2)
// three.onclick =()=> setNumber(3)
// four.onclick =()=> setNumber(4)
// five.onclick =()=> setNumber(5)
// six.onclick =()=> setNumber(6)
// seven.onclick =()=> setNumber(7)
// eight.onclick =()=> setNumber(8)
// nine.onclick =()=> setNumber(9)
// zero.onclick =()=> setNumber(0)

// add.addEventListener('click',()=>setOperation('+'))
// minus.addEventListener('click',setMinus)
// multiply.addEventListener('click',setMultiply)
// divide.addEventListener('click',setDivision)
// equalsTo.addEventListener('click',setEqualsTo)
// function setNumber(num){
//      arr.push(num);
//      displayScreenValue = num;
//      if(arr.length > 3){
//           displayScreen.textContent =  `${arr[0]} ${operator} ${arr[1]}`
//      }
//      else{
//           displayScreen.textContent = displayScreenValue;
//      }
//      console.log(displayScreenValue)
//      console.log(arr)
// }

// function setEqualsTo(){
//      let result;
//      if(operator == '+'){
//           arr.map(items=>{
//                if(isNaN(items)){
//                     result = Number(arr.slice(0,arr.indexOf(items)).join('')) + Number(arr.slice(arr.indexOf(items)+1).join(''))
//                }
//           })
//      }
//      else if(operator == '-'){
//           arr.map(items=>{
//                if(isNaN(items)){
//                     result = Number(arr.slice(0,arr.indexOf(items)).join('')) - Number(arr.slice(arr.indexOf(items)+1).join(''))
//                }
//           })
//      }
//      else if(operator == 'x'){
//           arr.map(items=>{
//                if(isNaN(items)){
//                     result = Number(arr.slice(0,arr.indexOf(items)).join('')) * Number(arr.slice(arr.indexOf(items)+1).join(''))
//                }
//           })
//      }
//      else if(operator == '/'){
//           arr.map(items=>{
//                if(isNaN(items)){
//                     result = Number(arr.slice(0,arr.indexOf(items)).join('')) / Number(arr.slice(arr.indexOf(items)+1).join(''))
//                }
//           })
//      }
//      displayScreen.textContent = result;
//      console.log(result)
//      console.log(arr);
//      arr = arr.slice(0);
// }
// function setOperation(opera){
//      displayScreenValue  = opera
//      arr.push(opera)
//      operator = opera;
//      displayScreen.textContent = `${arr[0]} ${operator}`
// }
// function setMinus(){
//      displayScreenValue  = '-'
//      arr.push('-')
//      operator = '-'
//      displayScreen.textContent = `${arr[0]} ${operator}`
// }
// function setMultiply(){
//      displayScreenValue  = 'x'
//      arr.push('x')
//      operator = 'x'
//      displayScreen.textContent = `${arr[0]} ${operator}`
// }
// function setDivision(){
//      displayScreenValue  = '/'
//      arr.push('-');
//      operator = '/'
//      displayScreen.textContent = `${arr[0]} ${displayScreenValue}`
// }



