import React from 'react';  
const FruitList = (props) =>{
          return (  
              <div className="fruitstyle ma4 bg-light-white dib grow shadow-4 ">
                  <img className='pa4' src= {props.img}alt="fruit"/>  
                  <h1 className='ma2'>{props.name}</h1>  
                  <p className='ma2'>{props.work}</p>
             </div>  
        )  
    }  
 
export default FruitList;  