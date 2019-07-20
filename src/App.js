import React from 'react';  
import './Fruit.css';
import FruitList from'./FruitList';
import 'tachyons/'
//class App extends React.Component() {  
 
    const App = (props) =>{
          
          return (  
              <div>
                  <h1 className='tc'> Welcome to Anita</h1>  
                  <FruitList id='1' name="Fruit" work="Apple"/>
                  <FruitList id='2' name="Fruit" work="Apple"/>
                  <FruitList id='3' name="Fruit" work="Apple"/>
                  <FruitList id='4' name="Fruit" work="Apple"/>
                  <button className='ma4'> Subcribe</button>
                  </div>  
        )  
    }  
 
export default App;  