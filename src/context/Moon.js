import React, { useEffect, useReducer, useState } from 'react'
import moonReducer from '../reducer/moonReducer'
import FoodContext from './FoodContext'

const Moon = (props) => {
    let input = [
        {
            id:"F1",
            packettype:"Food",
            packetContent:"MRE",
            calories:1000,
            expityDate:"07/05/2019",
            quantityInLiters:0
        },
        {
            id:"W1",
            packettype:"Water",
            packetContent:null,
            calories:null,
            expityDate:null,
            quantityInLiters:1
        },
        {
            id:"F2",
            packettype:"Food",
            packetContent:"Protein Bar",
            calories:2000,
            expityDate:"06/06/2019",
            quantityInLiters:0
        },
        {
            id:"F3",
            packettype:"Food",
            packetContent:"Dry fruits",
            calories:1000,
            expityDate:"27/06/2019",
            quantityInLiters:0
        },
        {
            id:"F4",
            packettype:"Food",
            packetContent:"Rice",
            calories:1500,
            expityDate:"06/05/2019",
            quantityInLiters:0
        },
        {
            id:"W2",
            packettype:"Water",
            packetContent:null,
            calories:null,
            expityDate:null,
            quantityInLiters:2
        },
        {
            id:"W3",
            packettype:"Water",
            packetContent:null,
            calories:null,
            expityDate:null,
            quantityInLiters:2
        },
        {
            id:"F5",
            packettype:"Food",
            packetContent:"Biscuits",
            calories:1000,
            expityDate:"31/12/2019",
            quantityInLiters:0
        },
        {
            id:"F6",
            packettype:"Food",
            packetContent:"Apple Pie",
            calories:1500,
            expityDate:"06/07/2019",
            quantityInLiters:0
        },
        {
            id:"W4",
            packettype:"Water",
            packetContent:null,
            calories:null,
            expityDate:null,
            quantityInLiters:1
        },
        {
            id:"F7",
            packettype:"Food",
            packetContent:"MRE",
            calories:1000,
            expityDate:"03/07/2019",
            quantityInLiters:0
        },  
    ]
    const [state, dispatch] = useReducer(moonReducer, {
      allFood:[],
      food:[],
      water:[],
    })
    
    useEffect(() => {
      dispatch({
        type:"ADD_FOOD_ITEMS",
        payload:input
      })
      //eslint-disable-next-line
    }, [])
    const [servival, setServival] = useState([])
    
  return (
    <FoodContext.Provider value={{state,dispatch,setServival,servival}}>
      {props.children}
    </FoodContext.Provider>
  )
}

export default Moon
