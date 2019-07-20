import React from 'react';  
const FruitList = (props) =>{
          return (  
              <div className="fruitstyle ma4 bg-light-white dib ">
                  <img className='pa4' src="https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 "alt="fruit"/>  
                  <h1 className=''>{props.name}</h1>  
                  <p>{props.work}</p>
             </div>  
        )  
    }  
 
export default FruitList;  