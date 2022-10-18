import React, { useContext } from 'react'
import FoodContext from '../context/FoodContext'

const Food = () => {
  const {state,dispatch} = useContext(FoodContext);
  return (
    <>
    {state.food.length > 0 && <div>
        <h1>Food Quantity</h1>
      <table border={2}>
          <tr>
            <th>Id</th>
            <th>packet-type</th>
            <th>packet-Content</th>
            <th>calories</th>
            <th>expiry-date</th>
            <th>Quanity in Liters</th>
          </tr>
              {state.food.map((food)=>(
                <tr key={food.id}> 
                  <td>{food.id}</td>
                  <td>{food.packettype}</td>
                  <td>{food.packetContent}</td>
                  <td>{food.calories}</td>
                  <td>{food.expityDate}</td>
                  <td>{food.quantityInLiters}</td>
                </tr>
              ))}
      </table>
    </div>}
    </>
  )
}

export default Food
