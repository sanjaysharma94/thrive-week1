import { Search } from './components/Search'
import { Getlocation} from "./components/Getlocation"
import './App.css'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch , useSelector } from "react-redux"
import { Slider } from './components/Corousel'


function App() {

  const city = useSelector((store)=>store.credential.city)
  
  if(!city==""){
    console.log("hii")
  useEffect(()=>{
     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d9c313e67589677085ed508b96ae174`)
       .then((r)=>console.log(r.data))
      .catch((e)=>console.log(e.message))
  },[city])
  }
 
   

  return (
    <div className="App">
      <p>hello weather app</p> 
      <Getlocation></Getlocation>
      <Search></Search>
      <Slider></Slider>
      
    </div>
  )
}

export default App
