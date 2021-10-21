import { useState } from "react"
import './Ejercicio.css';

const Home = () => {

    const [show, setShow ] = useState(false)
  
    const handleShow = () => {
      setShow(!show)
    }

    const [show2,setShow2]=useState(false)
    const handleShow2 = () => {
      setShow2(!show2)
    }

    const [show3,setShow3]=useState(false)
    const handleShow3 = () => {
      setShow3(!show3)
    }
  
    return (
      <div>
        
        <button onClick={handleShow} >{show ? 'Rojo:ON' : 'Rojo:OFF'}</button>
        <button onClick={handleShow2} >{show2 ? 'Azul:ON' : 'Azul:OFF'}</button>
        <button onClick={handleShow3} >{show3 ? 'Amarillo:ON' : 'Amarillo:OFF'}</button>
        <br />
        {
          show && (
            <img className="Rojo" alt="" />
          )
        }
        {
          show2 && (
            <img className="Azul" alt="" />
          )
        }
        {
          show3 &&(
            <img className="Amarillo" alt=""/>
          )
        }
      </div>
      
    )
  }

export default Home