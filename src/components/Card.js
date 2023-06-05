import Nav from "../components/Nav"
import { products } from "../resources"  
import { BsFillTrash3Fill } from "react-icons/bs"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../store/cart/actions"

export default ({ id, qty })=>{
    const product = products.find((product) => product.id === id)
    const dispatch = useDispatch()

    const handleFixed = amo =>{
       return amo.toFixed(2)
    }
    return (
        <tr>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{qty}</td>
            <td>${handleFixed(product.price*qty)}</td>
            <td>
                <button onClick={()=>dispatch(addToCart({id, qty:1, price: product.price }))}><AiOutlinePlus /></button> 
                <button className="mx-1" onClick={()=>dispatch(addToCart({id, qty:1}))}><AiOutlineMinus/></button>
                <button onClick={()=>dispatch(removeFromCart({id}))}><BsFillTrash3Fill/></button>
            </td>
        </tr>
    )
}