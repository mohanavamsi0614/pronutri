import { useState } from 'react'
function Food(props) {
    const [count,setcount]=useState(0)
    return (
      <div className='food'>
      <div className='green'>
      <img src={props.img}/>
      <div>
      <h1>{props.name}</h1>
      <h2>cal{props.cal}</h2>
      </div>
      <input type='number' placeholder="Quantity"  onChange={(e)=>{setcount(Number(e.target.value))}}/>
      <h1>{count} {props.name}={Number(props.cal)*count}Cal</h1>
      </div>
      <button className='bu' onClick={()=>{setcount(0)}}>reset</button>
      </div>
    )
  }
  
  export default Food
  