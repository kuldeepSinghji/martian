import React, { useContext } from 'react'
import FoodContext from '../context/FoodContext'

const ServialMaterials = () => {
  const {servival} = useContext(FoodContext);
  return (
    <>   
    {servival.length > 0 && <div>
        <h1>Food Details to Survive On the Mars....</h1>
      <table border={2}>
          <tr>
            <th>Servival Day</th>
            <th>Id</th>
            <th>packet-type</th>
            <th>packet-Content</th>
            <th>calories</th>
            <th>expiry-date</th>
            <th>Quanity in Liters</th>
          </tr>
              {servival?.map((food,i)=>(
                <tbody key={i}>
                <tr> 
                  <td style={{color:"red",fontSize:"25px"}} align='center' rowSpan={4}>Day {i+1}</td>
                  <td >{food?.food1?.id}</td>
                  <td >{food?.food1?.packettype}</td>
                  <td>{food?.food1?.packetContent}</td>
                  <td>{food?.food1?.calories}</td>
                  <td style={{color:"greenyellow"}}>{food?.food1?.expityDate}</td>
                  <td>{food?.food1?.quantityInLiters}</td>
                </tr>
                <tr> 
                  <td>{food?.food2?.id}</td>
                  <td>{food?.food2?.packettype}</td>
                  <td>{food?.food2?.packetContent}</td>
                  <td>{food?.food2?.calories}</td>
                  <td style={{color:"greenyellow"}}>{food?.food2?.expityDate}</td>
                  <td>{food?.food2?.quantityInLiters}</td>
                </tr>
                <tr> 
                  <td>{food?.water1?.id}</td>
                  <td>{food?.water1?.packettype}</td>
                  <td>{food?.water1?.packetContent}</td>
                  <td>{food?.water1?.calories}</td>
                  <td style={{color:"greenyellow"}}>{food?.water1?.expityDate}</td>
                  <td>{food?.water1?.quantityInLiters}</td>
                </tr>
                {food?.water2 && <tr> 
                  <td>{food?.water2?.id}</td>
                  <td>{food?.water2?.packettype}</td>
                  <td>{food?.water2?.packetContent}</td>
                  <td>{food?.water2?.calories}</td>
                  <td>{food?.water2?.expityDate}</td>
                  <td>{food?.water2?.quantityInLiters}</td>
                </tr>}
                </tbody>
              ))}
      </table>
    </div>}
    </>
  )
}

export default ServialMaterials
