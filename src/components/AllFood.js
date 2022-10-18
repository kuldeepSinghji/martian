import React, { useContext} from 'react'
import FoodContext from '../context/FoodContext'

const AllFood = () => {
  const {state,dispatch,setServival} = useContext(FoodContext)
  function filterFood(){
    let food = state.allFood.filter((e)=>e.calories).sort((a,b)=>{
      if(a.expityDate !== null && b.expityDate !== null){
          let [iday,imonth,iyear] = a.expityDate.split("/");
          let [jday,jmonth,jyear] = b.expityDate.split("/");
          let itime = new Date(`${imonth}/${iday}/${iyear}`).getTime()
          let jtime = new Date(`${jmonth}/${jday}/${jyear}`).getTime()
          if(itime < jtime ){
              return itime - jtime;
          }
      }
    })
    dispatch({
        type:"FILTER_FOOD",
        payload:food
    });
    let water = state.allFood.filter((e)=>!e.calories).sort((a,b)=>a.quantityInLiters-b.quantityInLiters);
    dispatch({
          type:"FILTER_WATER",
          payload:water
    })
    let f = [...food];
    let w = [...water];
    let result = [];
    let j=0
    for(let i=0;i<f.length;i++){
        // console.log(food)
        if(f[i]?.calories + f[i+1]?.calories >= 2500){
            // console.log(i)
            if(w[j]?.quantityInLiters + w[j+1]?.quantityInLiters === 2 && j < w.length){
                result.push({"food1":f[i],"food2":f[i+1],"water1":w[j],"water2":w[j+1]});
                w[i] = 0;
                w[i+1] = 0
                f[i] = 0;
                f[i+1] = 0;
                j=j+2;
            }else if(w[j].quantityInLiters === 2 && j < w.length){
                result.push({"food1":f[i],"food2":f[i+1],"water1":w[j]});
                f[i] = 0;
                f[i+1] = 0;
                w[i] = 0
                j++;
            }
        }
      }
      setServival(result);
      setTimeout(() => {
        window.scroll({top:3000,behavior:"smooth"})
      }, 100);
      // console.log(result)
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Food Details</h1>
      <table border={2}>
          <tr>
            <th>Id</th>
            <th>packet-type</th>
            <th>packet-Content</th>
            <th>calories</th>
            <th>expiry-date</th>
            <th>Quanity in Liters</th>
          </tr>
              {state.allFood.map((food)=>(
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
      <button  onClick={()=>filterFood()}>Food For Servival</button>
    </div>
  )
}

export default AllFood
