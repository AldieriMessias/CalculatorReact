import React, { useState } from "react";
import "./calculator.css"

export default function Calculator() {
    const[num, setNum] = useState(0);
    const[oldNum, setOldNum] = useState(0);
    const[operator,setOperator] = useState()
    
    

function inputNum(e){
    let input= e.target.value
    if(num === 0){
    setNum(input)
}
else{
    setNum(num + input)
}
}
function clear(){
    setNum(0)
}
function clear1(e){
    let result=document.getElementById('result').innerHTML;
          setNum(document.getElementById('result').innerHTML = result.substring(0,result.length - 1))

  }

function operation(e){
    let operatorInput=e.target.value
    // console.log(operator)
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
}

function change(){
    if(num>0){
        setNum(-num)
    }
    else{
        setNum(num*-1)
    }
}



function result(){
   if(operator === "/"){
    setNum(oldNum / num)
   }
   else if (operator === "*"){
    setNum(oldNum * num)
   }

   else if (operator === "-"){
    setNum(oldNum - num)
   }
   else if (operator === "+"){
    setNum(parseFloat(oldNum) + parseFloat(num))
}
   
   
    // console.log(oldNum)
    // console.log(operator)
    // console.log(num)

}


    return(

        <div className="backGround">
            <div className="calculadora">
                <h1>Calculator</h1>
                    <p id="result"  >{num}</p>
                        <table>
                            <tr>
                                <td><button onClick={clear}>AC</button></td>
                                <td><button onClick={clear1}>C</button></td>
                                <td><button onClick={operation} value={'/'}>/</button></td>
                                <td><button onClick={operation} value={'*'}>*</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={inputNum} value={7}>7</button></td>
                                <td><button onClick={inputNum} value={8}>8</button></td>
                                <td><button onClick={inputNum} value={9}>9</button></td>
                                <td><button onClick={operation} value={'+'}>+</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={inputNum} value={4}>4</button></td>
                                <td><button onClick={inputNum} value={5}>5</button></td>
                                <td><button onClick={inputNum} value={6}>6</button></td>
                                <td><button onClick={operation} value={'-'}>-</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={inputNum} value={1}>1</button></td>
                                <td><button onClick={inputNum} value={2}>2</button></td>
                                <td><button onClick={inputNum} value={3}>3</button></td>
                                <td><button className="btnResult" onClick={result}>=</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={inputNum} value={0}>0</button></td>
                                <td><button onClick={inputNum} value={'.'}>.</button></td>
                                <td><button onClick={change}>+-</button></td>
                                
                            </tr>
                        </table>
            </div>
        </div>
    )
}