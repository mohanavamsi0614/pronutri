import { useState } from 'react'
import './App.css'
import data from './data'
import Food from './food'


function App() {
  const [food,setfood]=useState("")
  let ata=data
  ata=ata.filter((ele)=>{return ele.name.includes(food) })
  console.log(ata)
  return(
    <>
    <input placeholder='search' className="serch" onChange={(e)=>{setfood(e.target.value)}}/>
  {ata.map((i,ind)=>(
    <Food img={i.img} name={i.name} cal={i.cal} key={ind}/>
  ))}
  </>
  )
}
export default App
