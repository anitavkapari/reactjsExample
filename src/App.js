import React, {Component} from 'react';  
import './Fruit.css';
import FruitList from'./FruitList';
import 'tachyons/'
class App extends Component{  
 constructor(){
     super();
     this.state = {
         name : "Welome to Annu"
     }
 }
   // const App = () =>{
    namechange(){
        this.setState({
            name : "Welome to Anita"

        })
    }
        render (){
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
          const arrayfruitcard = fruitListarray.map((fruitcard, i) =>{
              return  <FruitList key={i} id='1' img={fruitListarray[i].img}
              name={fruitListarray[i].name}
               work={fruitListarray[i].work}/>
          })
          return (  
              <div className='mainpage'>
                  <h1 className='tc'> {this.state.name}</h1>  
                 {arrayfruitcard}
                  <button className='ma4' onClick={()=> this.namechange()}> Subcribe</button>
                  </div>  
        )  
    }  
}
export default App;  