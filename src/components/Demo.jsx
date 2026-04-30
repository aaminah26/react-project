import { useState } from "react";

function Demo(){
    const[count,abcd]=useState(10);
    const increment=() =>abcd(count+1);
    const decrement=()=>{
        if(count==0) return;
        abcd(count-1);
    };
        
    
    return(
        <div>
            <h1>My first App</h1>
            <h2>welcome to my first app</h2>
            <p>count:{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}disabled={count==0}>decrement</button>
        </div>
    );
}
export default Demo;