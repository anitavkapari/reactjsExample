import React from 'react';  
import './Fruit.css';
import FruitList from'./FruitList';
import 'tachyons/'
//class App extends React.Component() {  
 
    const App = () =>{
          const fruitListarray =[
              {
              id:1,
              img:'https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ',
              name:'fruit',
              work:'Apple',
          },
          {
            id:1,
            img:'https://www.hindimeaning.com/wp-content/uploads/2012/12/carrots-vegetables.jpg',
            name:'vegetables',
            work:'Carrot',
        },
        {
            id:1,
            img:'https://www.organicfacts.net/wp-content/uploads/2013/05/Vegetables4.jpg',
            name:'fruits',
            work:'fruit',
        },
        {
            id:1,
            img:'https://choosemyplate-prod.azureedge.net/sites/default/files/styles/food_gallery_colorbox__800x500_/public/myplate/Broccoli.jpeg?itok=aksUvoGw',
            name:'Greenvegetables',
            work:'Broccoli',
        },
        ]
          return (  
              <div>
                  <h1 className='tc'> Welcome to Anita</h1>  
                  <FruitList id='1' img={fruitListarray[0].img}
                                    name={fruitListarray[0].name}
                                     work={fruitListarray[0].work}/>

                  <FruitList id='2'img={fruitListarray[1].img}
                                    name={fruitListarray[1].name}
                                     work={fruitListarray[1].work}/>

                  <FruitList id='3'img={fruitListarray[2].img}
                                    name={fruitListarray[2].name}
                                     work={fruitListarray[2].work}/>

                  <FruitList id='4' img={fruitListarray[3].img}
                                    name={fruitListarray[3].name}
                                     work={fruitListarray[3].work}/>

                  <button className='ma4'> Subcribe</button>
                  </div>  
        )  
    }  
 
export default App;  