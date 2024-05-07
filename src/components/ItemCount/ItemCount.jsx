import { useState } from "react"
const itemCount = ({ stock }) => {
  const [count, setCount] = useState(1)

  const restar =() =>{
    if (count > 1 ) {
      setCount(count - 1)
    }
    
  }
  const sumar = ()=>{
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const agregarAlCarrito = () =>{
    console.log(count)
  }
  return (
    <div>
      <button onClick={restar}>-</button>
      <p>{count}</p>
      <button onClick={sumar}>+</button>
      <button onClick={agregarAlCarrito}>agregar al carrito</button>
    </div>
  )
}

export default itemCount