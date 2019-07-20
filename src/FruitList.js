import React from 'react';  
const FruitList = (props) =>{
          return (  
              <div className="fruitstyle ma4 bg-light-white dib ">
                  <img className='pa4' src= {props.img}alt="fruit"/>  
                  <h1 className=''>{props.name}</h1>  
                  <p>{props.work}</p>
             </div>  
        )  
    }  
 
export default FruitList;  