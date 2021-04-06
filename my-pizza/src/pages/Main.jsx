import React , {useState, useEffect, Fragment} from 'react'
import '../styles/app.css'
import {Button} from "../components/button"
import { ReactComponent as ReactLogo } from '../images/logo.svg';

export const Main = () => {
const arrayOfTypePizza = [ "Все","Мясна", "Вегатиріанська","Гриль","Гостра","Закрита" ]
const [activeTypeOfPizza,setActiveTypeOfPizza] = useState(0)
const [isOpen,setIsOpen] = useState(false)
const arrayOfTypeFilter = [ "Популярне","Ціна", "алфавіту" ]
const [activeTypeOfFilter,setActiveTypeOfFilter] = useState(0)
const arrayOfPizzaFilters = ["тонкое", "традиционное"] 
const [activeOfPizzaFilters, setActiveOfPizzaFilters] = useState(0)
const arrayOfPizzaSizes = ["26 см.", "30 см.", "40 см."] 
const [activeOfPizzaSizes, setActiveOfPizzaSizes] = useState(0)

const [pizzas, setPizzas] = useState([])

useEffect(() => {
    const fetchPizzas = async ()  => {
        const response = await fetch ("http://localhost:3001/pizzas")
        setPizzas(await response.json())
    }
    fetchPizzas()
}, [])

    return (        
        <div className ="container">
            <div className="conteiner-inside">
                <div className="header">
                    <div className="header-logo">
                    <ReactLogo />
                    </div>
                    <div className="header-button">
                        <Button isBlack={false} text="254Р"/>
                    </div>
                </div>
                <div className="header-bar">
                    <div className="header-buttons-bar">
                    {
                        arrayOfTypePizza.map((el,index) => (
                            <div onClick={()=> setActiveTypeOfPizza(index)} className= {index === activeTypeOfPizza? "clicked-button-black" : "button-type"}>{el}</div> 
                        )) 
                    }
                    </div>
                    <div className="header-filter-bar">
                        <p>Сортировка по: </p>
                        <div onClick={() =>setIsOpen(!isOpen)} className="filter-button">

                            <p>популярности</p>
                            
                            <div className={isOpen? "filters" :"filterNone"} >{
                                arrayOfTypeFilter.map((el,index) => (
                                    <div onClick={()=> setActiveTypeOfFilter(index)} className= {index === activeTypeOfFilter? "is-active" : "non-active"}>{el}</div> 
                                )) 
                            }
                            </div>
                     
                        </div>
                        
                    </div>
                    
                </div>
                <div className="menu-name">
                    <p>Все пиццы</p>
                </div>
                <div className="pizza-componets">
                    {
                    pizzas.map((el,index)=>(
                        <div className="menu">
                    <div className="menu-photos">
                        <img className="menu-images"
                            src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg" alt="rerender"
                        />
                    </div>
                    <div className="menu-pizzas-name">                        
                            <p>Чизбургер-пицца</p>
                    </div>
                    <div className="menu-info-bar">
                        <div className="menu-info-bar-top">  
                        {
                        arrayOfPizzaFilters.map((el,index) => (
                            <div onClick={()=> setActiveOfPizzaFilters(index)} className= {index === activeOfPizzaFilters? "clicked-button-white" : "button-grey"}>{el}</div> 
                        )) 
                    }
                        </div>
                        <div className="menu-info-bar-bottom">
                        {
                        arrayOfPizzaSizes.map((el,index) => (
                            <div onClick={()=> setActiveOfPizzaSizes(index)} className= {index === activeOfPizzaSizes? "clicked-button-size" : "button-size"}>{el}</div> 
                        )) 
                    }
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
            </div>
            
        </div>
    )
}
