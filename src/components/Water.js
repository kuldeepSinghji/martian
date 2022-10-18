import React, { useContext } from 'react'
import FoodContext from '../context/FoodContext'

const Water = () => {
  const {state,dispatch} = useContext(FoodContext);
  return (
    <>
    {state.water.length >0 && <div>
        <h1>Water Quantity</h1>
        <table border={2}>
          <tr>
            <th>Id</th>
            <th>packet-type</th>
            <th>packet-Content</th>
            <th>calories</th>
            <th>expiry-date</th>
            <th>Quanity in Liters</th>
          </tr>
              {state.water.map((water)=>(
                <tr key={water.id}> 
                  <td>{water.id}</td>
                  <td>{water.packettype}</td>
                  <td>{water.packetContent}</td>
                  <td>{water.calories}</td>
                  <td>{water.expityDate}</td>
                  <td>{water.quantityInLiters}</td>
                </tr>
              ))}
      </table>
    </div>}
    </>
  )
}

export default Water
